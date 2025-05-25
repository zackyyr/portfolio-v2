import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const CTA = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto text-white py-12 px-6 md:px-20 grid md:grid-cols-2 gap-12"
    >
      {/* Left Side - Contact Text and Socials */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-semibold leading-tight mb-4">
          Let's Build Something <br />
          <span className="text-[#8a92dd]">Great Together.</span>
        </h2>
        <p className="text-gray-300 mb-6 text-md">
          Have a project in mind or need a tech partner? Let’s collaborate and
          turn your ideas into impactful digital solutions.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            {
              href: "#",
              icon: <FaInstagram />,
              label: "Instagram",
            },
            {
              href: "#",
              icon: <FaLinkedinIn />,
              label: "LinkedIn",
            },
            {
              href: "#",
              icon: <FaYoutube />,
              label: "YouTube",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center border-[0.5px] text-white text-xl rounded-sm transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <form className="bg-[#212121] p-8 rounded-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Hey, I would like to discuss..."
            className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#2B3EF4] hover:bg-blue-600 text-white py-2 rounded cursor-pointer"
        >
          Reach Out
        </button>
      </form>
    </section>
  );
};

export default CTA;
