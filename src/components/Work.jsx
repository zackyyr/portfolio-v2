import React, { useState } from 'react';

const experiences = [
  {
    company: 'Archpleagic',
    role: 'Software Engineer',
    date: 'April 2025 – Present',
    logo: '/work-1.svg',
    description:
      'Leading the development of a research-focused social platform designed to share findings on mangrove ecosystems and marine environments. Currently expanding the platform with a built-in crowdfunding feature to support conservation initiatives.',
  },
  {
    company: 'Webshift Agency',
    role: 'Entrepreneur',
    date: 'May 2023 – March 2024',
    logo: '/work-2.svg',
    description:
      'Founded and operated a digital agency focused on delivering custom website solutions for small businesses. Gained hands-on experience in client acquisition, project management, and leading development teams to build company profile websites.',
  },
  {
    company: 'SMAN 10 Mataram',
    role: 'Web Developer',
    date: 'January 2022 – February 2023',
    logo: '/work-3.svg',
    description:
      'Developed and maintained the official website for SMAN 10 Mataram and its student organization. The site provided centralized access to announcements, events, and school news, improving internal communication and public engagement.',
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-[67rem] mx-auto py-13 px-4">
      <h3 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-white to-zinc-900 bg-clip-text text-transparent">
        Work Experience
      </h3>

      <div className="space-y-10">
        {experiences.map((exp, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex flex-wrap items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center space-x-4 text-left">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 rounded-full object-contain"
                  />
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold">{exp.company}</h4>
                    <p className="text-sm md:text-base text-gray-500">{exp.role}</p>
                  </div>
                </div>
                <span className="text-sm md:text-base text-gray-500">{exp.date}</span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isActive ? 'max-h-60 mt-2' : 'max-h-0'
                }`}
              >
                <p className="text-sm md:text-[17px] text-zinc-400 md:px-16 px-4 pt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
