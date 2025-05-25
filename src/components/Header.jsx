import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const Header = () => {
  const [navOpen, setNavOpen] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setNavOpen(!isMobile);
  }, []);

  const handleReachOutClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    const smoother = ScrollSmoother.get();

    if (target) {
      if (smoother) {
        smoother.scrollTo(target, true);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 items-center h-full">

        {/* Logo kiri */}
        <h1 className="justify-self-start">
          <a href="/" className="logo">
            <img src="/logo.png" width={40} height={40} alt="Zacky Raechan" />
          </a>
        </h1>

        {/* Tombol menu mobile */}
        <div className="justify-self-end md:hidden">
          <button className="menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
            <i className={navOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>

        {/* Navbar desktop */}
        <div className="hidden md:block justify-self-center relative">
          <Navbar navOpen={navOpen} />
        </div>

        {/* Tombol Reach Out untuk desktop */}
        <div className="hidden md:block justify-self-end">
          <button className="btn btn-secondary cursor-pointer" onClick={handleReachOutClick}>
            Reach Out
          </button>
        </div>
      </div>

      {/* Navbar overlay untuk mobile */}
      <div className="md:hidden absolute top-full left-0 w-full">
        <Navbar navOpen={navOpen} />
      </div>
    </header>
  );
};

export default Header;
