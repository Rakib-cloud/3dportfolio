import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { CTA } from "../components";
import { projectsByCompany } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ACI Limited");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const companies = Object.keys(projectsByCompany);

  return (
    <section className={`max-container bg-transparent dark:bg-[#000000] min-h-screen transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className='head-text text-gray-900 dark:!text-white animate-fadeInUp'>
        My{" "}
        <span className='blue-gradient_text dark:!bg-gradient-to-r dark:!from-blue-400 dark:!to-purple-400 dark:!bg-clip-text dark:!text-transparent drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-600 dark:!text-gray-200 mt-2 leading-relaxed'>
        Throughout my career, I've contributed to impactful projects that transform 
        healthcare delivery and enterprise operations in Bangladesh. From nationwide 
        hospital information systems to scalable e-commerce platforms and ERP solutions, 
        here are some of the key projects I've worked on, organized by company.
      </p>

      {/* Company Tabs */}
      <div className='flex flex-wrap gap-4 my-12 justify-center'>
        {companies.map((company, index) => (
          <button
            key={company}
            onClick={() => setActiveTab(company)}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden ${
              activeTab === company
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/50'
                : 'bg-white dark:bg-[#0f0f0f] text-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg'
            }`}
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
            }}
          >
            {activeTab === company && (
              <span className='absolute inset-0 animate-pulse bg-white/20'></span>
            )}
            <span className='relative z-10'>{company}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className='flex flex-wrap my-20 gap-16'>
        {projectsByCompany[activeTab]?.map((project, index) => (
          <div 
            className='lg:w-[400px] w-full group animate-fadeInUp' 
            key={project.name}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
            }}
          >
            <div className='block-container w-12 h-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col bg-white dark:bg-[#0f0f0f] p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-900 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-blue-500 dark:group-hover:border-blue-600'>
              <h4 className='text-2xl font-poppins font-semibold text-gray-900 dark:!text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:!text-blue-400'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-600 dark:!text-gray-300'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                {project.link !== '#' ? (
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group/link'
                  >
                    <span>Live Link</span>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain transition-transform duration-300 group-hover/link:translate-x-1'
                    />
                  </Link>
                ) : (
                  <span className='font-semibold text-gray-400 dark:text-gray-600'>
                    Internal Project
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200 dark:border-gray-700' />

      <CTA />
    </section>
  );
};

export default Projects;
