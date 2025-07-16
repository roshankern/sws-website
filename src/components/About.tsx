
import React from 'react';
import { Atom, Users, Lightbulb, Target } from 'lucide-react';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 });

  const mission = [
    {
      icon: Atom,
      title: 'Demystify Quantum Science',
      description: 'Breaking down complex quantum concepts into digestible, engaging content for all audiences.'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Creating spaces where curious minds can explore the wonders of quantum physics together.'
    },
    {
      icon: Lightbulb,
      title: 'Inspire Wonder',
      description: 'Sharing the beauty and excitement of quantum discoveries that shape our future.'
    },
    {
      icon: Target,
      title: 'Bridge Academia & Public',
      description: 'Translating cutting-edge research into stories that resonate with everyone.'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 bg-white ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main About Section */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className={`text-4xl md:text-5xl font-bold text-black mb-16 ${getAnimationClasses(titleVisible, 'fadeUp')}`}
            >
              About <span className="text-orange-500">Serena</span>
            </h2>
            
            <div 
              ref={contentRef}
              className={`grid md:grid-cols-2 gap-12 items-center mb-12 ${getAnimationClasses(contentVisible, 'fadeUp')}`}
            >
              <div className="relative">
                <img 
                  src="/images/ba8eea36-a176-41f6-af05-a35d97496170.png" 
                  alt="Serena with quantum illustration" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="text-left">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hi! I'm Serena, a quantum physicist turned science communicator with a passion for making the impossible seem possible. 
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With a background in quantum computing and chemistry, I've spent years diving deep into the quantum realm. Now, I'm dedicated to bringing these mind-bending concepts to everyone – from curious students to seasoned professionals looking to understand quantum's impact on their field.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  My mission is simple: transform the complex world of quantum science into engaging, accessible stories that inspire wonder and understanding. Because the quantum future belongs to all of us.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Grid */}
          <div 
            ref={missionRef}
            className={getAnimationClasses(missionVisible, 'fadeUp')}
          >
            <h3 className="text-3xl font-bold text-center text-black mb-12">
              My <span className="text-orange-500">Mission</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mission.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${missionVisible ? index * 100 : 0}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-xl p-3 text-white">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
