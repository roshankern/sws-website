
import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';
import WritingPortfolio from '@/components/WritingPortfolio';
import About from '@/components/About';
import Mission from '@/components/Mission';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const Index = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div id="home">
        <Header />
      </div>
      
      <About />
      <Mission />
      <SocialLinks />
      <WritingPortfolio />
      
      {/* Footer */}
      <footer 
        ref={footerRef}
        className={`bg-black text-white py-12 ${getAnimationClasses(footerVisible, 'fadeUp')}`}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Science with Serena. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
