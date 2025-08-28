
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-10 bg-white ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main About Section */}
          <div className="text-center">
            <h2 
              ref={titleRef}
              className={`text-4xl md:text-5xl mb-10 font-bold text-black ${getAnimationClasses(titleVisible, 'fadeUp')}`}
            >
              About <span className="text-orange-500">Serena</span>
            </h2>
            
            <div 
              ref={contentRef}
              className={`text-center ${getAnimationClasses(contentVisible, 'fadeUp')}`}
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
                  Science with Serena brought back the joy of learning for me and I hope it offers the same to you!
                </p>
                
                {/* Email button */}
                <div className="flex justify-center mt-8">
                  <a
                    href="mailto:serena@sciencewithserena.com"
                    className="inline-block bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
