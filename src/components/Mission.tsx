import { MessageSquare, Target, Heart, Sparkles } from 'lucide-react';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/use-scroll-animation';

const Mission = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });

  const mission = [
    {
      icon: MessageSquare,
      title: 'Readable',
      description: 'Writing in clear, approachable language that welcomes everyone in.'
    },
    {
      icon: Target,
      title: 'Relevant',
      description: 'Creating diverse content that addresses different audiences, experiences, and perspectives.'
    },
    {
      icon: Heart,
      title: 'Resonant',
      description: 'Conveying what people actually care about - translating discoveries into stories.'
    },
    {
      icon: Sparkles,
      title: 'Fun',
      description: 'Bringing back the fun and enjoyment science deserves.'
    }
  ];

  return (
    <section 
      id="mission" 
      ref={sectionRef}
      className={`py-14 bg-white ${getAnimationClasses(sectionVisible, 'fadeIn')}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-center text-black mb-10 ${getAnimationClasses(titleVisible, 'fadeUp')}`}
          >
            My <span className="text-orange-500">Mission</span>
          </h2>
          
          <div 
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${getAnimationClasses(gridVisible, 'fadeUp')}`}
          >
            {mission.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${gridVisible ? index * 100 : 0}ms` }}
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
    </section>
  );
};

export default Mission;
