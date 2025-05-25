import React, { useState } from 'react';

const educationList = [
  {
    institution: 'Mataram University',
    major: 'Computer Science',
    date: '2023 – Present',
    logo: '/edu-1.svg',
    description:
      'Focused on core subjects including Programming Algorithms, Data Structures, Database Systems, and Software Engineering. Gained practical experience through project-based learning and actively involved in student organizations. Current GPA: 3.84',
  },
  {
    institution: 'SMAN 10 Mataram',
    major: 'Science',
    date: '2020 – 2023',
    logo: '/work-3.svg',
    description:
      'Graduated as one of the top 10 students in the class. Received admission through the national SNBP program and actively participated in school leadership as a member of the student council (OSIS).',
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-[67rem] mx-auto py-1 px-4">
      <h3 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-white to-black-600 bg-clip-text text-transparent">
        Education
      </h3>

      <div className="space-y-6">
        {educationList.map((edu, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex flex-wrap items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center space-x-4 text-left">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 rounded-full object-contain"
                  />
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold">{edu.institution}</h4>
                    <p className="text-sm md:text-base text-gray-500">{edu.major}</p>
                  </div>
                </div>
                <span className="text-sm md:text-base text-gray-500">{edu.date}</span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isActive ? 'max-h-60 mt-2' : 'max-h-0'
                }`}
              >
                <p className="text-sm md:text-[17px] text-zinc-400 md:px-16 px-4 pt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
