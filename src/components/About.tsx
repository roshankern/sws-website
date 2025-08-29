
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-14 bg-white ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-10">
        <div className="max-w-6xl mx-auto">
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
              className={`${getAnimationClasses(contentVisible, 'fadeUp')}`}
            >
              {/* Image and text layout */}
              <div className="grid lg:grid-cols-5 gap-12 items-center mb-8">
                {/* Image on left - takes 2/5 of space (40%) */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative">
                    <img 
                      src="/images/serena.webp" 
                      alt="Serena with quantum illustration" 
                      className="w-full max-w-md rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Text content on right - takes 3/5 of space (60%) */}
                <div className="lg:col-span-3 text-left space-y-6">

                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a masters student at the University of Barcelona studying theoretical and computational chemistry as a part of the Erasmus Mundus scholarship program. Before, I was at Case Western Reserve University in Cleveland where I got my B.S. in Chemistry and minored in physics. Now, I'm a Science Communication Fellow for the International Year of Quantum 2025.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    I started Science with Serena because I wanted a breath of fresh science. Endless jargon, dense papers and muddled communication makes academia feel so stuffy. At the last quantum conference I attended I was listening to groundbreaking science thinking about when the next snack break would be. I love Quantum science, but I wanted to engage with it in a way that felt human. 
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Science with Serena brought back the joy of learning for me and I hope it offers the same to you!
                  </p>
                </div>
              </div>
              
              {/* Social circles centered under both */}
              <div className="flex justify-center items-center gap-6">
                {/* Email Circle */}
                <a
                  href="mailto:serena@sciencewithserena.com"
                  className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  aria-label="Email Serena"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>

                {/* Kenny Circle */}
                <a
                  href="/kenny"
                  className="w-16 h-16 bg-transparent border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  aria-label="Kenny"
                >
                  <img 
                    src="/images/small_kenny.png" 
                    alt="Kenny" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </a>

                {/* LinkedIn Circle */}
                <a
                  href="https://www.linkedin.com/in/serenakp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
