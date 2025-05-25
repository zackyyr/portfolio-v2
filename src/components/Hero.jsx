import React from 'react'
import { motion } from 'framer-motion'
import { ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section id='home' className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          {/* === Badge with slide + blur === */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -50, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-[#2B3EF4]">
                <span className='absolute inset-0 rounded-full bg-[#2B3EF4] animate-ping'></span>
              </span>
              Software Engineer
            </div>
          </motion.div>

          {/* === H2 with blurry reveal animation === */}
          <motion.h2
            className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.8 }}
          >
            Building Web App Solutions for Businesses.
          </motion.h2>

          {/* === Deskripsi dengan fade + lift === */}
          <motion.p
            className="text-zinc-400 text-[20px] max-w-[50ch] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            Specialized in SaaS solutions for E-Commerce, EdTech, and HRTech industries
          </motion.p>

          {/* === Tombol dengan scale pop === */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <ButtonPrimary
              label="Work with me"
              icon="ri-arrow-right-line"
              href="#contact"
            />
          </motion.div>
        </div>

        <div className="hidden lg:block">
          {/* (Optional) Tambahin animasi masuk ke gambar */}
          <motion.figure
            className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-40/40 to-65% rounded-[60px] overflow-hidden'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src="/hero-image.png" alt="" width={656} height={600} className='w-full' />
          </motion.figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
