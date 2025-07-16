import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, delay]);

  return { ref, isVisible };
};

export const getAnimationClasses = (isVisible: boolean, animationType: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' = 'fadeUp') => {
  const baseClasses = 'transition-all duration-1000 ease-out';
  
  const animations = {
    fadeUp: isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8',
    fadeIn: isVisible 
      ? 'opacity-100' 
      : 'opacity-0',
    slideLeft: isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8',
    slideRight: isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8'
  };

  return `${baseClasses} ${animations[animationType]}`;
};
