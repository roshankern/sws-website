
import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';
import WritingPortfolio from '@/components/WritingPortfolio';
import About from '@/components/About';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div id="home">
        <Header />
      </div>
      
      <About />
      <SocialLinks />
      <WritingPortfolio />
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/images/bb6bb47c-17e6-43b2-b52e-9e540d98d148.png" 
              alt="Science with Serena" 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">
              Science with <span className="text-orange-500">Serena</span>
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Making quantum science accessible and fun for everyone
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Science with Serena. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
