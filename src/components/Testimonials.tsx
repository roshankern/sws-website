import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const Testimonials = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "You have a really great writing style and your illustrations are awesome! Thank you for writing this post and making quantum physics more approachable. I'm looking forward to next week's post!",
      username: "@aangelaabraham",
      postTitle: "Schrodinger's Equation Runs the World",
      postLink: "https://substack.com/@sciencewithserena/p-169066520"
    },
    {
      text: "Nicely done, for a layman your clarity is quite refreshing",
      username: "@keithminler",
      postTitle: "Atomic Orbitals: The Origin Story",
      postLink: "https://substack.com/@sciencewithserena/p-163749757"
    },
    {
      text: "Thank you so much Serena, I am glad I found you...this post brought me ever closer to understanding quantum mechanics",
      username: "@dbravko",
      postTitle: "Schrodinger's Equation Runs the World",
      postLink: "https://medium.com/@sciencewithserena/schr%C3%B6dingers-equation-runs-the-world-ed7b4c9e4f78"
    },
    {
      text: "Quantum computing is such a fascinating frontier with huge potential. Thanks for sharing this insight and sparking curiosity about the future!",
      username: "New Trend Computer Networks",
      postTitle: "On Quantum Computing",
      postLink: "https://medium.com/@sciencewithserena/on-quantum-computing-45aa54fabebd"
    },
    {
      text: "Hi Serena! What an educational article you've posted here! Thanks for sharing this information",
      username: "Christiana Churchill",
      postTitle: "Superconductors: Finally, Qubits!",
      postLink: "https://medium.com/@sciencewithserena/superconductors-finally-qubits-0a47445dda5d"
    },
    {
      text: "this is the first time i have ever understood this in my life and it was actually so enjoyable— physics has always been daunting to me, so thank you for sharing and making it fun in the process!",
      username: "@rainadas",
      postTitle: "Schrodinger's Equation Runs the World",
      postLink: "https://substack.com/@sciencewithserena/p-169066520"
    },
    {
      text: "Your way of explaining this is terrific! I love physics but am not a math person. You make it truly accessible and thank you!",
      username: "@cathiecambell",
      postTitle: "Schrodinger's Equation Runs the World",
      postLink: "https://substack.com/@sciencewithserena/p-169066520"
    },
    {
      text: "Loved how you turned quantum mechanics into something that feels like a late-night chat with a clever friend.",
      username: "@madaut",
      postTitle: "Schrodinger's Equation Runs the World",
      postLink: "https://substack.com/@sciencewithserena/p-169066520"
    }
  ];

  // Auto-rotate carousel every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Calculate how many testimonials to show based on screen size
  const getVisibleTestimonials = () => {
    // Show 1 on mobile, 2 on tablet, 3 on desktop
    return testimonials.slice(currentIndex, currentIndex + 3).concat(
      testimonials.slice(0, Math.max(0, (currentIndex + 3) - testimonials.length))
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className={`py-10 ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold text-center text-black mb-10 ${getAnimationClasses(titleVisible, 'fadeUp')}`}
        >
          What People <span className="text-orange-500">Say</span>
        </h2>
        
        <div 
          ref={carouselRef}
          className={`max-w-7xl mx-auto ${getAnimationClasses(carouselVisible, 'fadeUp')}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${carouselVisible ? index * 100 : 0}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Quote text */}
                  <blockquote className="text-gray-700 leading-relaxed mb-4 flex-grow italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Footer with username and post link */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-black text-sm">
                          {testimonial.username}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {testimonial.postTitle}
                        </p>
                      </div>
                      <a
                        href={testimonial.postLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 flex-shrink-0"
                        aria-label={`Read post: ${testimonial.postTitle}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
