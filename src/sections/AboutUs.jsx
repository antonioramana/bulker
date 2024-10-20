import React from 'react';
import { FaCheckCircle, FaClock, FaHeart, FaTrophy } from 'react-icons/fa'; // Import des icônes
import aboutImage from '../assets/about.jpg';

const AboutUs = () => {
  // Map des valeurs avec leurs icônes respectives
  const values = [
    { name: "Qualité", icon: <FaCheckCircle className="text-blue-900 text-2xl mr-2" /> },
    { name: "Réactivité", icon: <FaClock className="text-blue-900 text-2xl mr-2" /> },
    { name: "Fidélité", icon: <FaHeart className="text-blue-900 text-2xl mr-2" /> },
    { name: "Compétitivité", icon: <FaTrophy className="text-blue-900 text-2xl mr-2" /> },
  ];

  return (
    <section id="about" className="fall-in bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Image */}
        <div className="w-full md:w-1/2 h-[400px] flex-shrink-0">
          <img
            src={aboutImage}
            alt="À propos de Bulker"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center h-[400px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">À Propos de Bulker</h2>
          <p className="text-lg text-gray-700 mb-6">
            Expert en négoce de produits de matériaux de constructions, notre équipe saura vous accompagner 
            et vous orienter vers les solutions les plus adaptées, tout en vous proposant des  <span className="text-lg font-bold text-blue-900">tarifs compétitifs.</span>
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 text-center transition transform hover:scale-105 flex items-center justify-center"
              >
                {/* Icon + Title on the same line */}
                {value.icon}
                <h3 className="text-xl font-semibold text-blue-900">{value.name}</h3>
              </div>
            ))}
          </div>

          {/* Styled Sentence */}
          <p className="text-lg font-bold text-blue-900 text-center mb-6">
            Bulker est l'allié qu'il vous faut.
          </p>

          {/* Contact Button */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="bg-blue-900 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-800 transition-all duration-300"
            >
              Contactez-Nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
