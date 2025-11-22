import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { arrow } from "../assets/icons";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const techStack = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js", color: "#61DAFB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React Native", color: "#61DAFB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg", name: "Next.js", color: "#000000" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript", color: "#3178C6" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS", color: "#06B6D4" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js", color: "#339933" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", color: "#3776AB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", name: "Django", color: "#092E20" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL", color: "#4479A1" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", name: "MS SQL", color: "#CC2927" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB", color: "#47A248" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", color: "#F05032" },
  ];

  const stats = [
    { value: "3.5+", label: "Years Experience" },
    { value: "20+", label: "Live Applications" },
    { value: "5+", label: "Healthcare Projects" },
    { value: "10+", label: "Enterprise Solutions" },
  ];

  // Auto-play carousel - always running
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % techStack.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + techStack.length) % techStack.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get visible cards (current + 1 on each side = 3 cards total)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + techStack.length) % techStack.length;
      cards.push({ tech: techStack[index], position: i, index });
    }
    return cards;
  };

  return (
    <section className='w-full min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#0a0a0a] dark:to-[#0d0d0d] overflow-hidden'>

      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-8 pt-32 pb-16 relative z-10'>
        <div className='animate-fadeInUp'>
          {/* Main Heading */}
          <div className='text-center mb-8'>
            <h1 className='text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-4'>
              Hi, I'm <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Rakibul Islam</span>
            </h1>
            <h2 className='text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6'>
              Software Engineer @ ACI Limited
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed'>
              Full-Stack Developer with <strong>3.5+ years</strong> of experience building scalable enterprise solutions. 
              Specialized in <strong>Healthcare Tech</strong>, delivering intuitive platforms that enhance digital healthcare systems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-wrap justify-center gap-4 mb-16'>
            <Link 
              to='/projects' 
              className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 flex items-center gap-2 animate-pulse-glow'
            >
              View My Work
              <img src={arrow} alt='arrow' className='w-5 h-5 object-contain animate-bounce' />
            </Link>
            <Link 
              to='/contact' 
              className='px-8 py-4 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white rounded-lg font-semibold text-lg border-2 border-gray-900 dark:border-gray-700 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-800 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300'
            >
              Get In Touch
            </Link>
          </div>

          {/* Stats Section */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className='bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-center border-2 border-gray-100 dark:border-gray-800'
              >
                <div className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-600 dark:text-gray-300 font-medium'>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className='card-3d bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-xl mb-16 border-2 border-gray-100 dark:border-gray-800 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10'></div>
            <div className='relative z-10'>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center'>Key Highlights</h3>
              <div className='grid md:grid-cols-4 gap-6'>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#151515] dark:to-[#1a1a1a] rounded-xl border border-transparent dark:border-gray-800'>
                  <div className='text-4xl mb-3'>🏥</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Healthcare Innovation</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Contributed to nationwide platforms like Shukhee, Lifespring & Grameen Eye Hospital
                  </p>
                </div>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-purple-50 to-blue-50 dark:from-[#151515] dark:to-[#1a1a1a] rounded-xl border border-transparent dark:border-gray-800'>
                  <div className='text-4xl mb-3'>🏢</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Enterprise Solutions</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Building in-house enterprise software at ACI Limited with Django & FastAPI
                  </p>
                </div>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-[#151515] dark:to-[#1a1a1a] rounded-xl border border-transparent dark:border-gray-800'>
                  <div className='text-4xl mb-3'>⚡</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Performance Focused</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Building scalable, intuitive, and high-performance user experiences
                  </p>
                </div>
                <div className='text-center p-4 card-3d bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#151515] dark:to-[#1a1a1a] rounded-xl border border-transparent dark:border-gray-800'>
                  <div className='text-4xl mb-3'>🚀</div>
                  <h4 className='font-semibold text-lg mb-2 text-gray-900 dark:text-white'>Full-Stack Expertise</h4>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    React, Next.js, TypeScript, React Native, Django, FastAPI & SQL Databases
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack - 3D Carousel */}
          <div className='text-center mb-12'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>Technologies I Work With</h3>
            
            {/* 3D Carousel Container */}
            <div className='relative w-full h-[250px] flex items-center justify-center perspective-1000' style={{ perspective: '1000px' }}>
              {/* Cards */}
              <div className='relative w-full h-full flex items-center justify-center'>
                {getVisibleCards().map(({ tech, position, index }) => {
                  const isCenter = position === 0;
                  const distance = Math.abs(position);
                  
                  // Calculate 3D transformations
                  const rotateY = position * 40; // Rotate cards
                  const translateZ = isCenter ? 0 : -120; // Push non-center cards back
                  const translateX = position * 220; // Spread cards horizontally
                  const scale = isCenter ? 1.1 : 0.75; // Scale center card larger
                  const opacity = isCenter ? 1 : 0.5; // Fade non-center cards
                  
                  return (
                    <div
                      key={index}
                      onClick={() => !isCenter && goToSlide(index)}
                      className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                        isCenter ? 'z-30' : 'z-10'
                      }`}
                      style={{
                        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                        opacity: opacity,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div 
                        className={`relative bg-white dark:bg-[#1a1a1a] rounded-xl p-6 shadow-2xl border-2 transition-all duration-500 ${
                          isCenter 
                            ? 'border-blue-500 dark:border-blue-400 shadow-blue-500/50' 
                            : 'border-gray-200 dark:border-gray-800'
                        }`}
                        style={{
                          width: '160px',
                          height: '160px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '12px',
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        {/* Tech Icon */}
                        <div className={`transition-all duration-500 ${isCenter ? 'scale-110' : 'scale-90'}`}>
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className='w-16 h-16 object-contain'
                            style={{
                              filter: isCenter ? 'none' : 'grayscale(60%)',
                            }}
                          />
                        </div>
                        
                        {/* Tech Name */}
                        <div className={`text-center transition-all duration-500 ${
                          isCenter ? 'opacity-100' : 'opacity-60'
                        }`}>
                          <h4 className='font-bold text-base text-gray-900 dark:text-white mb-1'>
                            {tech.name}
                          </h4>
                          {isCenter && (
                            <div 
                              className='h-0.5 w-10 mx-auto rounded-full transition-all duration-500'
                              style={{ backgroundColor: tech.color }}
                            ></div>
                          )}
                        </div>

                        {/* Glow Effect for Center Card */}
                        {isCenter && (
                          <div 
                            className='absolute inset-0 rounded-xl opacity-20 blur-xl'
                            style={{ backgroundColor: tech.color }}
                          ></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className='absolute left-0 md:left-8 z-40 p-2.5 bg-white dark:bg-[#1a1a1a] rounded-full shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 group'
                aria-label='Previous'
              >
                <svg 
                  className='w-5 h-5 text-gray-700 dark:text-white transition-transform group-hover:-translate-x-1' 
                  fill='none' 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth='2' 
                  viewBox='0 0 24 24' 
                  stroke='currentColor'
                >
                  <path d='M15 19l-7-7 7-7'></path>
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className='absolute right-0 md:right-8 z-40 p-2.5 bg-white dark:bg-[#1a1a1a] rounded-full shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 group'
                aria-label='Next'
              >
                <svg 
                  className='w-5 h-5 text-gray-700 dark:text-white transition-transform group-hover:translate-x-1' 
                  fill='none' 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth='2' 
                  viewBox='0 0 24 24' 
                  stroke='currentColor'
                >
                  <path d='M9 5l7 7-7 7'></path>
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className='flex justify-center gap-2 mt-6'>
              {techStack.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className='mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white rounded-3xl p-8 shadow-xl'>
            <h3 className='text-2xl font-bold mb-3'>Currently Building</h3>
            <p className='text-lg mb-4'>
              Enterprise software solutions at ACI Limited using Django, FastAPI & modern web technologies
            </p>
            <p className='text-sm opacity-90'>
              Passionate about creating seamless user experiences and bridging frontend innovation with backend performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
