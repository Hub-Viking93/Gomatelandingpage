import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const images = [
  { src: "https://images.unsplash.com/photo-1682685797795-5640f369a70a?", alt: "Digital nomad working remotely in India" },
  { src: "https://images.unsplash.com/photo-1507812984078-917a274065be?", alt: "Remote worker overlooking tropical coastline in the Philippines" },
  { src: "https://images.unsplash.com/photo-1718968924529-3f169a8666ca?", alt: "Office professionals collaborating in a modern Japanese workplace" },
  { src: "https://images.unsplash.com/photo-1677730277400-097e5da58a56", alt: "Exchange students exploring a campus in the United States" },
  { src: "https://images.unsplash.com/photo-1606663121252-aadb2a31311b", alt: "Travelers navigating a bustling city street abroad" }
];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);
  return <div className="absolute inset-0 z-0 bg-stone-900 overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <AnimatePresence mode='wait'>
        <motion.img key={currentIndex} src={images[currentIndex].src} alt={images[currentIndex].alt} className="absolute inset-0 w-full h-full object-cover" initial={{
        opacity: 0,
        scale: 1.1
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 2.5,
        ease: "easeInOut"
      }} />
      </AnimatePresence>

      {/* Gradient Overlays for Text Contrast */}
      <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-stone-900/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-transparent to-transparent z-10" />

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-500 ease-out border border-white/30 ${index === currentIndex ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/30 hover:bg-white/60"}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};
export default ImageCarousel;