
import React, { useState } from 'react';
import { FileText, BookOpen, Heart, ExternalLink } from 'lucide-react';

const WritingPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const writingCategories = {
    technical: {
      title: 'Technical Writing',
      icon: FileText,
      color: 'text-orange-500',
      articles: [
        {
          title: 'Quantum Entanglement Explained: A Comprehensive Guide',
          description: 'Breaking down the spooky action at a distance for researchers and enthusiasts.',
          publication: 'Quantum Computing Today',
          date: '2024',
          url: '#'
        },
        {
          title: 'Error Correction in Quantum Systems',
          description: 'Deep dive into quantum error correction protocols and their implementations.',
          publication: 'Nature Quantum Information',
          date: '2024',
          url: '#'
        },
        {
          title: 'Variational Quantum Algorithms: Current State and Future',
          description: 'Comprehensive review of VQAs and their applications in quantum chemistry.',
          publication: 'Physical Review Applied',
          date: '2023',
          url: '#'
        }
      ]
    },
    essays: {
      title: 'Essays & Commentary',
      icon: BookOpen,
      color: 'text-black',
      articles: [
        {
          title: 'The Poetry of Quantum Mechanics',
          description: 'Exploring the beautiful intersection of science and art in quantum physics.',
          publication: 'Medium',
          date: '2024',
          url: '#'
        },
        {
          title: 'Why Quantum Computing Matters to Everyone',
          description: 'Making the case for quantum literacy in the digital age.',
          publication: 'Substack',
          date: '2024',
          url: '#'
        },
        {
          title: 'The Ethics of Quantum Technology',
          description: 'Discussing the moral implications of quantum computing advancement.',
          publication: 'The Quantum Ethics Review',
          date: '2023',
          url: '#'
        }
      ]
    },
    personal: {
      title: 'Personal Stories',
      icon: Heart,
      color: 'text-pink-500',
      articles: [
        {
          title: 'My Journey from Physics PhD to Science Communication',
          description: 'The personal story behind my passion for making science accessible.',
          publication: 'Personal Blog',
          date: '2024',
          url: '#'
        },
        {
          title: 'Finding Wonder in the Quantum World',
          description: 'How quantum mechanics changed my perspective on reality and possibility.',
          publication: 'Medium',
          date: '2024',
          url: '#'
        },
        {
          title: 'The Day I Understood Superposition',
          description: 'A personal reflection on that eureka moment we all chase.',
          publication: 'Substack',
          date: '2023',
          url: '#'
        }
      ]
    }
  };

  return (
    <section id="writing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Past <span className="text-orange-500">Writing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From technical papers to short stories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {writingCategories[activeCategory as keyof typeof writingCategories].articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-semibold text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
                  {article.publication}
                </span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-500 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.description}
              </p>
              
              <a
                href={article.url}
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
              >
                Read More
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
