import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

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

const NumberCounter = ({ number }) => {
  const controls = useAnimation();
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    controls.start({
      count: number,
      transition: { duration: 2, ease: "easeOut" }
    });

    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = 50; // update every 50ms
    const incrementCount = Math.ceil(number / (duration / incrementTime));

    const interval = setInterval(() => {
      start += incrementCount;
      if (start >= number) {
        setCount(number);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [number, controls]);

  return (
    <motion.span
      className='text-2xl font-[500] md:text-4xl'
      animate={controls}
      // just to keep text smooth, not animating actual number property
    >
      {count}
    </motion.span>
  );
};

const About = () => {
  return (
    <section id='about' className='section'>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zinc-800/50 p-7 rounded-2xl md:p-12"
        >
          <motion.p 
            className="text-zinc-200 mb-4 md:mb-8 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I'am Zacky, a fourth-semester Computer Science student with a strong interest in SaaS solutions, especially in the fields of E-Commerce, EdTech, and HRTech. I specialize in delivering full-stack SaaS solutions from idea to launch, backed by real business insight. My goal is to build my own tech startup focusing on education and B2B sectors.
          </motion.p>

          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {
              aboutItems.map(({label, number}, key) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1 + key * 0.3, duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex items-center md:mb-2">
                    <NumberCounter number={number} />
                    <span className='text-[#2B3EF4] text-4xl ml-1'>+</span>
                  </div>

                  <p className="text-lg text-zinc-300">{label}</p>
                </motion.div>
              ))
            }
            <motion.img 
              src="/logo.png" 
              alt="logo" 
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.1, 1], opacity: 1 }}
              transition={{ delay: 1.8, duration: 2, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
