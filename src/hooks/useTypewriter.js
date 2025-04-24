import { useState, useEffect } from 'react';

export const useTypewriter = (phrases, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        
        if (text === currentPhrase) {
          setIsDeleting(true);
          setTimeout(() => {}, pauseTime);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting, phrases, deletingSpeed, typingSpeed, pauseTime]);

  return text;
};