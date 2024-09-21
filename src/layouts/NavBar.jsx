import React, { useState, useEffect } from 'react';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import img from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100; // Offset pour un meilleur alignement

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveLink(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour définir le lien actif au montage

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Correspondance entre libellés en français et IDs en anglais
  const links = [
    { label: 'Accueil', id: 'home' },
    { label: 'Produits', id: 'products' },
    { label: 'Durabilité', id: 'sustainability' },
    { label: 'À propos de nous', id: 'about' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <a href="#home">
              <img src={img} alt="Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex items-center ml-8 space-x-8">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-gray-600 relative group ${
                  activeLink === id || window.location.hash === `#${id}`
                    ? 'text-blue-900'
                    : 'hover:text-blue-900'
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-1 bg-blue-900 transition-all duration-300 ${
                    activeLink === id || window.location.hash === `#${id}`
                      ? 'w-full'
                      : 'group-hover:w-full'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Right: Contact and Language Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-blue-900 flex items-center space-x-1">
              <span>Traduction</span>
              <FaGlobe className="inline-block" />
            </a>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-900 hover:text-blue-700">
              {isOpen ? <FaTimes size={24} /> : <FaBars className='text-blue-900' size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-gray-600 relative ${
                  activeLink === id ? 'text-blue-900' : 'hover:text-blue-900'
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-1 bg-blue-900 transition-all duration-300 ${
                    activeLink === id ? 'w-full' : ''
                  }`}
                ></span>
              </a>
            ))}
            <a href="#" className="text-blue-900">
              Traduction <FaGlobe className="inline-block" />
            </a>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
