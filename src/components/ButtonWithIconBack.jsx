import React, { useState } from 'react';
import { FaArrowLeft, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ButtonWithHoverIconBack = ({path}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center opacity-80">
      <Link
        to={path}
        className="inline-flex items-center text-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white transition-colors duration-300 max-w-max mx-auto"
        onMouseEnter={() => setHovered(true)} // Changer l'état lors du survol
        onMouseLeave={() => setHovered(false)} // Remettre l'état par défaut
      >
        <span className="bg-blue-900 text-white p-4 rounded-3xl flex items-center justify-center">
          {hovered ? (
            <FaArrowLeft className="w-5 h-5" /> // Icône sur hover
          ) : (
            <FaChevronLeft className="w-5 h-5" /> // Icône par défaut
          )}
        </span>
        <span className="ml-3 font-bold px-5">Retour</span>
      </Link>
    </div>
  );
};

export default ButtonWithHoverIconBack;
