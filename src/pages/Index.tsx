
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
          <p className="text-sm text-gray-500">
            © 2025 Science with Serena. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
