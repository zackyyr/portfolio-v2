import React from 'react'

const aboutItems = [
  { 
    label: "Project done", 
    number: 30
  },
  { 
    label: 'Years of experience',
    number: 3
  }
];

const About = () => {
  return (
    <section id='about' className='section'>
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-200 mb-4 md:mb-8 md:text-xl">
            I'am Zacky, a fourth-semester Computer Science student with a strong interest in SaaS solutions, especially in the fields of E-Commerce, EdTech, and HRTech. I specialize in delivering full-stack SaaS solutions from idea to launch, backed by real business insight. My goal is to build my own tech startup focusing on education and B2B sectors.
          </p>

          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
              {
              aboutItems.map(({label,number}, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className='text-2xl font-[500] md:text-4xl'>{number}</span>
                    <span className='text-[#2B3EF4] text-4xl '>+</span>
                  </div>

                  <p className="text-lg text-zinc-300">{label}</p>
                </div>
              ))
            }
            <img 
              src="/logo.png" 
              alt="" 
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About