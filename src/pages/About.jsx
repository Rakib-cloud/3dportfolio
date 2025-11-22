import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useState, useEffect } from "react";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className={`max-container bg-transparent dark:bg-[#0a0a0a] min-h-screen transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className='head-text text-gray-900 dark:!text-white animate-fadeInUp'>
        Hello, I'm{" "}
        <span className='blue-gradient_text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent font-semibold'>
          Rakibul Islam
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-600 dark:text-gray-300'>
        <p>
          A Frontend Engineer with <strong>3.5+ years of experience</strong> in React, Next.js, TypeScript, and Tailwind CSS, 
          delivering scalable, user-focused solutions with strong knowledge of modern front-end and backend integration practices.
        </p>
        <p>
          Experienced in <strong>requirement analysis</strong>, <strong>scalable UI architecture</strong>, <strong>REST API integration</strong>, 
          and <strong>enterprise-level software development</strong> at ACI Limited.
        </p>
        <p>
          Contributed to <strong>in-house test automation</strong>, <strong>product optimization</strong>, and <strong>cross-team collaboration</strong> 
          to enhance business workflows. Previously involved in <strong>nationwide HIS deployments</strong> through projects like 
          <strong> Shukhee</strong>, <strong>Lifespring</strong>, <strong>Grameen Kallayn</strong>, and <strong>Grameen Eye Hospital</strong>, 
          building intuitive platforms that enhanced digital healthcare systems.
        </p>
        <p>
          Passionate about creating seamless user experiences and bridging <strong>frontend innovation</strong> with <strong>backend performance</strong>.
        </p>
        <p>
          <strong>Education:</strong> Bachelor of Science (BSc) in Computer Science & Engineering from United International University 
          (GPA: First Class). HSC: Science from SHOHID SYED NAZRUL ISLAM COLLEGE (CGPA: 5 out of 5).
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-gray-900 dark:text-white'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill, index) => (
            <div 
              className='block-container w-20 h-20 group animate-float cursor-pointer' 
              key={skill.name}
              style={{
                animationDelay: `${index * 0.05}s`,
                animationDuration: `${3 + (index % 3)}s`
              }}
            >
              <div className='btn-back rounded-xl transition-all duration-300 group-hover:scale-110' />
              <div className='btn-front rounded-xl flex justify-center items-center bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl group-hover:rotate-12'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain transition-transform duration-300 group-hover:scale-125'
                />
              </div>
              {/* Tooltip */}
              <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none'>
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-gray-900 dark:text-white'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-600 dark:text-gray-300'>
          <p>
            Throughout my career, I've had the privilege to work with innovative companies, 
            building enterprise solutions and contributing to healthcare transformation in Bangladesh. 
            From IOT solutions to nationwide hospital information systems, here's my professional journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  background: "var(--timeline-bg, white)",
                  transition: "all 0.3s ease",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--timeline-bg, white)",
                }}
                className='group'
              >
                <div className='transition-all duration-300 group-hover:translate-x-2'>
                  <h3 className='text-black dark:text-white text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 dark:text-gray-300 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/70 dark:text-gray-400 font-normal pl-1 text-sm transition-all duration-300 hover:text-black dark:hover:text-white hover:translate-x-1'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 dark:border-gray-700' />

      <CTA />
    </section>
  );
};

export default About;
