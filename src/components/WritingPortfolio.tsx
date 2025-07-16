
import React, { useState } from 'react';
import { FileText, BookOpen, Heart, ExternalLink } from 'lucide-react';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const WritingPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 });

  const writingCategories = {
    technical: {
      title: 'Technical Writing',
      icon: FileText,
      color: 'text-orange-500',
      articles: [
        {
          title: 'Computational Method for Determining Stereocenters of Trichothilone-B',
          url: 'https://drive.google.com/file/d/1u74qdcgeNaGFdouZmgsImpJWxSudNO0M/view?usp=drive_link'
        },
        {
          title: 'Error Correction in Quantum Systems',
          url: '#'
        },
        {
          title: 'Variational Quantum Algorithms: Current State and Future',
          url: '#'
        }
      ]
    },
    visuals: {
      title: 'Science Visuals',
      icon: BookOpen,
      color: 'text-blue-500',
      articles: [
        {
          title: 'Quantum State Visualization Diagrams',
          url: '#'
        },
        {
          title: 'Molecular Interaction Infographics',
          url: '#'
        },
        {
          title: 'Physics Concepts Animation Series',
          url: '#'
        }
      ]
    },
    personal: {
      title: 'Personal Writing',
      icon: Heart,
      color: 'text-pink-500',
      articles: [
        {
          title: 'My Journey from Physics PhD to Science Communication',
          url: '#'
        },
        {
          title: 'Finding Wonder in the Quantum World',
          url: '#'
        },
        {
          title: 'The Day I Understood Superposition',
          url: '#'
        }
      ]
    },
    fiction: {
      title: 'Short Fiction',
      icon: BookOpen,
      color: 'text-purple-500',
      articles: [
        {
          title: 'The Quantum Detective',
          url: '#'
        },
        {
          title: 'Conversations with Schrödinger\'s Cat',
          url: '#'
        },
        {
          title: 'Time Loops and Coffee Shops',
          url: '#'
        }
      ]
    }
  };

  return (
    <section 
      id="writing" 
      ref={sectionRef}
      className={`py-20 ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${getAnimationClasses(titleVisible, 'fadeUp')}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Past <span className="text-orange-500">Writing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From technical papers to short stories
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          ref={tabsRef}
          className={`flex flex-wrap justify-center gap-4 mb-12 ${getAnimationClasses(tabsVisible, 'fadeUp')}`}
        >
          {Object.entries(writingCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ${getAnimationClasses(gridVisible, 'fadeUp')}`}
        >
          {writingCategories[activeCategory as keyof typeof writingCategories].articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${gridVisible ? index * 100 : 0}ms` }}
            >
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors">
                {article.title}
              </h3>
              
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
              >
                Open
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingPortfolio;
