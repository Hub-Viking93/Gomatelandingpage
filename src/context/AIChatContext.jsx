import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';
import {
  getMultipleRelevantResources,
  AVAILABLE_COUNTRIES,
  FIELD_GUIDE_CATEGORIES
} from '@/utils/contentMapper';

const AIChatContext = createContext(null);

export const useAIChat = () => {
  const context = useContext(AIChatContext);
  if (!context) {
    throw new Error('useAIChat must be used within an AIChatProvider');
  }
  return context;
};

// Prefer a single source of truth for the Edge Function URL.
// - Local dev: supabase start -> http://localhost:54321/functions/v1
// - Prod: your project URL
const FUNCTION_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:54321/functions/v1/chat'
    : 'https://xnwcoeydkcckekmxcbcj.supabase.co/functions/v1/chat';

// Updated System Prompt with Knowledge Base and App Awareness
const SYSTEM_PROMPT = `
You are GoMate, an expert relocation assistant and companion for the GoMate website.
Your Mission: Help users navigate the emotional, logistical, and cultural complexities of moving abroad.

Tone & Style:
- Warm, grounded, and realistic. Avoid overly enthusiastic marketing speak.
- Empathetic but practical. Acknowledge stress but offer solutions.
- Concise and structured. Use formatting to make answers readable.

Knowledge Base & Site Structure:
1. Country Guides:
   - You have guides for many countries including: ${AVAILABLE_COUNTRIES ? AVAILABLE_COUNTRIES.slice(0, 10).join(', ') : 'various destinations'}, and many more.
   - URL Pattern: /country-guides/[country-slug]

2. Field Guide Categories (General Relocation Advice):
   - Categories include: ${FIELD_GUIDE_CATEGORIES ? Object.values(FIELD_GUIDE_CATEGORIES).join(', ') : 'various topics'}.
   - URL Pattern: /field-guide/[category]

3. GoMate App (Structured Planning):
   - CRITICAL: Distinguish between "Chatting" (here) and "Planning" (App).
   - This chat is for quick questions, general advice, and emotional support.
   - The GoMate App is for: Detailed checklists, personalized timelines, step-by-step visa guidance, budget calculators, and tracking progress.
   - If the user asks for:
     - A full plan or timeline
     - "How do I move to [Country]?" (broad complex question)
     - A checklist
     - Specific visa application steps
     - Personalized recommendations based on their specific situation
   - THEN: Provide a helpful summary here, BUT strongly recommend they use the GoMate App for the full, personalized experience.
   - Use phrases like "personalized plan", "GoMate App", or "tailored guidance" to trigger the app recommendation card.

Capabilities:
- You will be provided with "Contextual Resources" based on the user's message.
- You should naturally weave references to these resources into your response where relevant.
- CRITICAL: Reference resources by their natural NAME ONLY (e.g., "check out our Germany Country Guide").
- DO NOT create markdown links (e.g. [Title](path)) or hyperlinks.
- DO NOT output URL paths in the text.
- The chat interface will automatically display clickable resource cards below your message.
- Example: "Since you're moving with your partner, our Moving With Someone Field Guide might be really helpful."
- Don't just list links at the end; integrate the resource names into your advice.

CRITICAL GUARDRAILS:
1. NO LEGAL/TAX ADVICE: You are NOT a lawyer or tax advisor. Standard Disclaimer required for visa/tax specific questions.
2. STAY ON TOPIC: Focus only on relocation, travel, and cultural adaptation.
3. SAFETY: Do not encourage illegal immigration.
`;

export const AIChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasUnread, setHasUnread] = useState(false);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content:
            "Hi! I'm GoMate. I'm here to help you navigate the chaos of moving abroad. What's on your mind?",
          timestamp: new Date().toISOString()
        }
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) setHasUnread(false);
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content:
          'Chat cleared. Fresh start! How can I help you with your move today?',
        timestamp: new Date().toISOString()
      }
    ]);
    setError(null);
  };

  const sendMessage = async (content) => {
    if (!content.trim()) return;

    const newMessage = {
      role: 'user',
      content,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Analyze content for smart suggestions (Multi-resource)
      const suggestions = getMultipleRelevantResources(content);

      // Inject relevant content context into the system prompt for this turn
      let currentContext = "";
      if (suggestions.length > 0) {
        currentContext = `\n\n[CONTEXT UPDATE - RELEVANT RESOURCES]\nThe user's message matches the following GoMate resources. Please reference 1-2 of them naturally by NAME ONLY (no links) in your response if they fit the context:\n${suggestions.map(s => `- [${s.type.toUpperCase()}] ${s.title}`).join('\n')}`;
      }

      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT + currentContext },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content }
      ];

      if (!FUNCTION_URL) {
        throw new Error('Missing Supabase Edge Function URL');
      }

      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          temperature: 0.7,
          max_completion_tokens: 1000
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiContent = data?.content || "I'm having trouble thinking right now.";
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: aiContent,
          timestamp: new Date().toISOString(),
          suggestedResources: suggestions
        }
      ]);

      if (!isOpen) setHasUnread(true);
    } catch (err) {
      console.error('Chat Error:', err);
      setError(err.message || 'Failed to get response. Please try again later.');
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm sorry, I encountered an error connecting to the service. Please try again in a moment.",
          timestamp: new Date().toISOString(),
          isError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AIChatContext.Provider
      value={{
        isOpen,
        toggleChat,
        messages,
        sendMessage,
        isLoading,
        error,
        clearChat,
        hasUnread
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
};

export default AIChatProvider;