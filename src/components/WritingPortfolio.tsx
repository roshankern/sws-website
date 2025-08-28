
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
          title: 'Quantum Chirality: Resolving Quantum Mechanics with Physical Reality',
          url: 'https://drive.google.com/file/d/1GEhqlGARYvdSQFFt8YHtFuAVP1xsyLeF/view?usp=drive_link'
        },
        {
          title: 'Simple Synthesis of 2,6-Dimesitylene iodide as Introductory Laboratory Experience for Undergraduates',
          url: 'https://drive.google.com/file/d/1KcPSZzTpV8K6JzqvpcMqdIWKw4jriwVf/view?usp=sharing'
        },
        {
          title: 'Convenient Pathways for Synthesis and Characterization of Ferrocene... for use in Transition Metal Complexes',
          url: 'https://drive.google.com/file/d/1HoGUqfw72_rCj4dXAgEYpk7ysrgTUgnE/view?usp=sharing'
        },
        {
          title: 'Excited State pKa* Estimation for 2-Napthol using Absorbance and Fluorescence Spectroscopy',
          url: 'https://drive.google.com/file/d/1GGPvpkUw95_BYCmiTDQX0URXJCdRBiNw/view?usp=drive_link'
        },
        {
          title: 'Diffusion Coefficient Determination of Potassium Ferricyanide and Ferrocyanide in Aqueous Solution of Potassium Chloride using Cyclic Voltammetry',
          url: 'https://drive.google.com/file/d/1DFEynd_vhKL6kjcyX_vAIO44Gq6QW35N/view?usp=sharing'
        },
        {
          title: 'Kinetic Analysis and Rate Constant Determiniation of Enzyme-Catalyzed Hydrolysis... using Absorbance Spectroscopy',
          url: 'https://drive.google.com/file/d/1J4RoNRhdd2npr0x7REAWgA43ED5tRTGY/view?usp=sharing'
        },
        {
          title: 'Ferricyanide Standard Reduction Potential Determination using Absorbance Spectroscopy and Electrochemistry',
          url: 'https://drive.google.com/file/d/1KD9LsfZRntkW2ITBdpkwYDv6D2YD3_v8/view?usp=sharing'
        },
        {
          title: 'Proton Affinity of α-aminobutyric acid Estimation using Kinetic Method with Ion Trap Mass Spectrometry',
          url: 'https://drive.google.com/file/d/12np2pcrZBES0Kr7MlSwKOC30aCUJvC-n/view?usp=sharing'
        }
      ]
    },
    visuals: {
      title: 'Science Visuals',
      icon: BookOpen,
      color: 'text-blue-500',
      articles: [
        {
          title: 'Computational Methods for Stereochemical Determination of Trichothilone-B (Poster)',
          url: 'https://drive.google.com/file/d/1rQmKkWVKfuYpv9ZsioQSN32k01xF4ixt/view?usp=drive_link'
        },
        // Removed "Quantum Chirality (Presentation)" per your request
        {
          title: 'Quantum Comics Illustrations',
          url: 'https://drive.google.com/file/d/1KD9LsfZRntkW2ITBdpkwYDv6D2YD3_v8/view?usp=sharing'
        }
        // Placeholder for IQY visuals if allowed:
        // { title: 'International Year of Quantum Visuals', url: '...' }
      ]
    },
    personal: {
      title: 'Personal Writing',
      icon: Heart,
      color: 'text-pink-500',
      articles: [
        {
          title: 'Kendrick Lamar’s Exploration of Desire, Repetition, and Society',
          url: 'https://drive.google.com/file/d/1LPhvjnppwcL8eQdGHyEhwTbNS0Hcs1nO/view?usp=drive_link'
        },
        {
          title: 'Building and Rebuilding: Comparing Democracy in Uruguay, Chile, and Costa Rica',
          url: 'https://drive.google.com/file/d/1vwMgFhQxfOy-qXqjny4W-TW9DMqNrSVk/view?usp=drive_link'
        },
        {
          title: 'Making Sense of the Human-Cat Bond: The Benefits of Training',
          url: 'https://drive.google.com/file/d/1weXuu7hz85tXeGvd7yjiotPY1yPtO2q_/view?usp=drive_link'
        },
        {
          title: 'Anything Else?',
          url: 'https://drive.google.com/file/d/1XQ6ej-wvLpilu-mZw0wnpvlE1_ayB58G/view?usp=drive_link'
        },
        {
          title: 'I See Myself on an Island',
          url: 'https://drive.google.com/file/d/1KD9LsfZRntkW2ITBdpkwYDv6D2YD3_v8/view?usp=sharing'
        }
      ]
    }
  };

  return (
    <section 
      id="writing" 
      ref={sectionRef}
      className={`py-10 ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-10 ${getAnimationClasses(titleVisible, 'fadeUp')}`}
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
