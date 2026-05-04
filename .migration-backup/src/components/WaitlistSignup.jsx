import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, CheckCircle2 } from 'lucide-react';

const WaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setStatus('loading');

    try {
      const res = await fetch(
        'https://xnwcoeydkcckekmxcbcj.supabase.co/functions/v1/bright-action',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setEmail('');
        return;
      }

      if (res.status === 400) {
        setErrorMessage(data?.message || 'Invalid email.');
        setStatus('error');
        return;
      }

      if (res.status === 409) {
        setErrorMessage('You are already on the waitlist with this email.');
        setStatus('error');
        return;
      }

      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');

    } catch (err) {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 mt-8 flex items-center gap-4 animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="text-sage-600 h-8 w-8 shrink-0" />
        <div>
          <h4 className="font-semibold text-stone-900">You're on the list!</h4>
          <p className="text-stone-600 text-sm mt-1">
            Thank you for joining. We've registered your interest and will notify you as soon as the GoMate App beta is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 mt-8 border border-stone-200 shadow-sm relative overflow-hidden">
      {/* Decorative subtle background element */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-sage-50 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">Join Our Beta Waitlist</h4>
        <p className="text-stone-600 mb-6 text-sm">
          The GoMate App is currently in active development. Be the first to know when we launch and get exclusive early access to personalized relocation planning tools.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-stone-50 border-stone-200 focus-visible:ring-sage-500 text-stone-900"
          />
          <Button 
            type="submit" 
            disabled={status === 'loading'}
            className="bg-sage-600 hover:bg-sage-700 text-white min-w-[140px] shadow-sm transition-all"
          >
            {status === 'loading' ? 'Joining...' : (
              <>
                Join Waitlist <Send size={16} className="ml-2" />
              </>
            )}
          </Button>
        </form>
        {status === 'error' && (
          <p className="text-rose-500 text-sm mt-2 font-medium">
            {errorMessage || 'Something went wrong. Please try again.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default WaitlistSignup;