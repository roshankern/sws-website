import { SiSubstack, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaMediumM } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const SocialLinks = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  const socialLinks = [
    {
      name: 'Email',
      icon: MdEmail,
      url: 'mailto:serena@sciencewithserena.com',
      description: 'Get in touch',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://www.linkedin.com/in/serenakp/',
      description: 'Professional network',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Substack',
      icon: SiSubstack,
      url: 'https://substack.com/@sciencewithserena',
      description: 'Weekly quantum insights',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      name: 'Medium',
      icon: FaMediumM,
      url: 'https://medium.com/@sciencewithserena',
      description: 'In-depth articles',
      color: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'Instagram',
      icon: SiInstagram,
      url: 'https://www.instagram.com/science.with.serena/',
      description: 'Visual science stories',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <section 
      id="connect" 
      ref={sectionRef}
      className={`py-20 bg-white ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${getAnimationClasses(titleVisible, 'fadeUp')}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow my journey in quantum science communication across all platforms
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto ${getAnimationClasses(gridVisible, 'fadeUp')}`}
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{ animationDelay: `${gridVisible ? index * 100 : 0}ms` }}
            >
              <div className={`${link.color} rounded-lg p-8 text-white transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                <div className="flex flex-col items-center text-center">
                  <link.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold">{link.name}</h3>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
