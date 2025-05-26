import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const CTA = () => {
  return (
    <section id="contact" className="text-center py-24 px-6 text-white">
      <div className="inline-block bg-black text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
        Contact
      </div>
      <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-6">
        Have something on your mind? Send me a DM on{" "}
        <a
          href="https://instagram.com/zackyraechan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline hover:text-pink-600"
        >
          Instagram
        </a>{" "}
        — I’d love to hear from you and chat about your ideas!
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="https://instagram.com/zackyraechan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white p-3 rounded-full text-white hover:bg-white hover:text-black transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/zacky-raechan-a889b225a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white p-3 rounded-full text-white hover:bg-white hover:text-black transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/zackyyr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white p-3 rounded-full text-white hover:bg-white hover:text-black transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.youtube.com/@zackyraechann"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white p-3 rounded-full text-white hover:bg-white hover:text-black transition"
        >
          <FaYoutube size={20} />
        </a>
      </div>
    </section>
  );
};

export default CTA;
