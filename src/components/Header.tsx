
import React from 'react';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const Header = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLElement>({ delay: 200 });
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 600 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ delay: 800 });

  return (
    <header 
      ref={headerRef}
      className={`relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100 min-h-screen flex items-center justify-center ${getAnimationClasses(headerVisible, 'fadeIn')}`}
    >
      {/* Quantum-inspired background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-orange-300/30 rounded-full orbit-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-orange-400/20 rounded-full orbit-animation" style={{animationDelay: '-10s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-orange-500/25 rounded-full orbit-animation" style={{animationDelay: '-5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div 
          ref={logoRef}
          className={`float-animation mb-8 ${getAnimationClasses(logoVisible, 'fadeUp')}`}
        >
          <img 
            src="/images/kenny_no_bg.png" 
            alt="Science with Serena Logo" 
            className="w-64 h-64 mx-auto mb-6"
          />
        </div>
        
        <h1 
          ref={titleRef}
          className={`text-6xl md:text-8xl font-bold text-black mb-4 ${getAnimationClasses(titleVisible, 'fadeUp')}`}
        >
          Science With <span className="text-orange-500">Serena</span>
        </h1>
        
        <p 
          ref={descRef}
          className={`text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses(descVisible, 'fadeUp')}`}
        >
          Making quantum science accessible and fun for everyone. 
          <br />
          Bridging the gap between complex quantum concepts and curious minds.
        </p>
      </div>
    </header>
  );
};

export default Header;
