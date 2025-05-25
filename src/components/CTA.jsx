import React from "react";

const CTA = () => {
  return (
    <section className="text-center py-24 px-6 text-white">
      <div className="inline-block bg-black text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
        Contact
      </div>
      <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
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
    </section>
  );
};

export default CTA;
