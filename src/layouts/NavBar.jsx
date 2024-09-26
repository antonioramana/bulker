import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5'; // Icône de langue
import img from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [language, setLanguage] = useState('fr'); // Langue par défaut
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // État pour ouvrir/fermer le dropdown

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Ouvrir/Fermer le dropdown
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Mettre à jour la langue sélectionnée
    setIsDropdownOpen(false); // Fermer le dropdown après la sélection
  };

  const links = [
    { label: 'Accueil', id: 'home' },
    { label: 'Produits', id: 'products' },
    { label: 'Durabilité', id: 'sustainability' },
    { label: 'À propos de nous', id: 'about' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#home">
              <img 
                src={img} 
                alt="Logo" 
                className="h-10 w-auto sm:h-12 lg:h-14" // Adjust sizes for mobile, tablet, and desktop
              />
            </a>
          </div>

          {/* Liens du centre */}
          <div className="hidden md:flex items-center ml-10 space-x-6">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-lg font-semibold relative group ${
                  activeLink === id
                    ? 'text-blue-900'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                <span className="mb-2">{label}</span>
                <span
                  className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] mt-2 h-2 w-2 rounded-full bg-blue-900 transition-all duration-300 ${
                    activeLink === id ? 'block' : 'hidden'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Sélecteur de langue et Contact */}
          <div className="ml-auto hidden md:flex items-center space-x-6">
            {/* Sélecteur de langue */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-blue-900"
              >
                <span className="text-lg">
                  {language === 'fr' ? 'Français' : 'English'}
                </span>
                <IoLanguageOutline className="text-xl" />
              </button>

              {/* Dropdown de sélection de langue */}
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white border rounded-md shadow-lg focus:outline-none focus:ring focus:border-blue-300">
                  <ul className="py-1">
                    <li
                      onClick={() => handleLanguageChange('fr')}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      Français
                    </li>
                    <li
                      onClick={() => handleLanguageChange('en')}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      English
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button className="bg-blue-900 opacity-80 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Contact
            </button>
          </div>

          {/* Menu mobile */}
          <div className="ml-auto md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-900 hover:text-blue-700">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
                className={`text-lg font-semibold relative ${
                  activeLink === id ? 'text-blue-900' : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                <span className="mb-2">{label}</span>
                <span
                  className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] mt-2 h-2 w-2 rounded-full bg-blue-900 transition-all duration-300 ${
                    activeLink === id ? 'block' : 'hidden'
                  }`}
                ></span>
              </a>
            ))}

            {/* Sélecteur de langue pour mobile */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-blue-900"
              >
                <IoLanguageOutline className="text-xl" />
                <span className="text-lg">
                  {language === 'fr' ? 'Français' : 'English'}
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white border rounded-md shadow-lg focus:outline-none focus:ring focus:border-blue-300">
                  <ul className="py-1">
                    <li
                      onClick={() => handleLanguageChange('fr')}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      Français
                    </li>
                    <li
                      onClick={() => handleLanguageChange('en')}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      English
                    </li>
                  </ul>
                </div>
              )}
            </div>

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
