import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const linkRefs = useRef([]);
  const activeBox = useRef();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  const updateActiveBox = () => {
    const currentLink = linkRefs.current[activeIndex];
    if (
      currentLink &&
      activeBox.current &&
      !isMobile &&
      currentLink.offsetParent !== null
    ) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = currentLink;
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `${offsetLeft}px`;
      activeBox.current.style.width = `${offsetWidth}px`;
      activeBox.current.style.height = `${offsetHeight}px`;
    }
  };

  useEffect(() => {
    updateActiveBox();
    window.addEventListener('resize', updateActiveBox);
    return () => window.removeEventListener('resize', updateActiveBox);
  }, [activeIndex, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Project', link: '#project' },
    { label: 'Certificates', link: '#certificates' }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, i) => (
        <a
          href={link}
          key={label}
          ref={(el) => (linkRefs.current[i] = el)}
          className={`nav-link ${i === activeIndex ? 'active' : ''} ${className || ''}`}
          onClick={() => setActiveIndex(i)}
        >
          {label}
        </a>
      ))}

      {/* Contact hanya tampil di mobile, tanpa active dan tanpa setActiveIndex */}
      {isMobile && (
        <a
          href="#contact"
          className="nav-link" // tanpa 'active' class
          onClick={(e) => {
          }}
        >
          Contact
        </a>
      )}

      {/* highlight box (desktop only) */}
      {!isMobile && <div className="active-box" ref={activeBox} />}
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
