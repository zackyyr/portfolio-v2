import React from 'react';
import { FaNodeJs, FaFigma } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiMysql,
  SiPhp,
  SiExpress,
} from 'react-icons/si';
import { RiNotionFill } from 'react-icons/ri'; // ✅ Import dari paket yang benar

const skills = [
  { icon: <SiNextdotjs size={24} />, title: 'Next.js', desc: 'Framework' },
  { icon: <SiPhp size={24} />, title: 'PHP', desc: 'Backend Language' },
  { icon: <SiTailwindcss size={24} />, title: 'Tailwind CSS', desc: 'User Interface' },
  { icon: <FaNodeJs size={24} />, title: 'Node.js', desc: 'Server Environment' },
  { icon: <SiExpress size={24} />, title: 'Express.js', desc: 'Node Framework' },
  { icon: <SiMongodb size={24} />, title: 'MongoDB', desc: 'No SQL Database' },
  { icon: <SiMysql size={24} />, title: 'MySQL', desc: 'Relational Database' },
  { icon: <RiNotionFill size={24} />, title: 'Notion', desc: 'Project Management' },
  { icon: <FaFigma size={24} />, title: 'Figma', desc: 'UI Design' },
];

const Skill = () => {
  return (
    <section id='skills' className="max-w-[67rem] mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-900 bg-clip-text text-transparent">
        Solving Problems with the Right Stack
      </h2>
      <p className="text-gray-400 mb-10 max-w-xl">
        Each of these tools plays a role in turning complex challenges into clean, user-focused web solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] border border-gray-700 rounded-xl px-6 py-4 flex items-center gap-4 hover:bg-[#002fff] transition-all duration-300"
          >
            <div className="text-white">{skill.icon}</div>
            <div>
              <h4 className="text-white font-semibold">{skill.title}</h4>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
