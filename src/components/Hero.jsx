import React from 'react'
import { ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section id='home' className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-[#2B3EF4]">
                <span className='absolute inset-0 rounded-full bg-[#2B3EF4] animate-ping'></span>
              </span>
              Software Engineer
            </div>
          </div>

          <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
            Building Web App Solutions for Businesses.
          </h2>
          <p className="text-zinc-400 text-[20px] max-w-[50ch] mb-5">
            Specialized in SaaS solutions for E-Commerce, EdTech, and HRTech industries
         </p>

          <div className="flex items-center gap-3">
                <ButtonPrimary
                    label="Work with me"
                    icon="ri-arrow-right-line"
                    href="#contact"
                />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-40/40 to-65% rounded-[60px] overflow-hidden'>
            <img src="/hero-image.png" alt="" width={656} height={600} className='w-full' />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
