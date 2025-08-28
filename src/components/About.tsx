
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
              className={`text-center mb-12 ${getAnimationClasses(contentVisible, 'fadeUp')}`}
            >
              {/* Image first */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <img 
                    src="/images/ba8eea36-a176-41f6-af05-a35d97496170.png" 
                    alt="Serena with quantum illustration" 
                    className="w-full max-w-md rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
              
              {/* Text content below */}
              <div className="max-w-3xl mx-auto text-left space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hi! Welcome to Science with Serena. I'm Serena.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a masters student at the University of Barcelona studying theoretical and computational chemistry as a part of the Erasmus Mundus scholarship program. Before, I was at Case Western Reserve University in Cleveland where I got my B.S. in Chemistry and minored in physics. Now, I'm a Science Communication Fellow for the International Year of Quantum 2025.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  I started Science with Serena because I wanted a breath of fresh science. Endless jargon, dense papers and muddled communication makes academia feel so stuffy. At the last quantum conference I attended I was listening to groundbreaking science thinking about when the next snack break would be. I love Quantum science, but I wanted to engage with it in a way that felt human. 
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  So I created a platform where I could put all the fun into science that I wanted. My newsletter the Quantum Notebook uses comics and cartoons to visualize complex science topics in a way that is approachable for everybody. My social networks give the behind the scenes look into my masters studies. 
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Science with Serena brought back the joy of learning for me and I hope it offers the same to you.
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
