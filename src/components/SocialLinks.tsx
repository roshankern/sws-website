import { SiSubstack, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaMediumM } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
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
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://www.linkedin.com/in/serenakp/',
      description: 'Professional network',
      color: 'bg-blue-600 hover:bg-blue-700'
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
    <section id="connect" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow my journey in quantum science communication across all platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              className="group relative block"
              style={{ animationDelay: `${index * 0.1}s` }}
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
