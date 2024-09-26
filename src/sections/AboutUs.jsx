import React from 'react';
import aboutImage from '../assets/about.jpg';

const AboutUs = () => {
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
          <p className="text-lg text-gray-700 mb-4">
            Au cœur de l’industrie de la construction, Bulker émerge comme bien plus qu’une simple entreprise de distribution de matériaux de construction. Nous sommes les artisans de votre vision, les partenaires de votre projet, et les gardiens de l’intégrité dans chaque brique, chaque poutre et chaque liaison.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Ensemble, ces valeurs forment le socle sur lequel Bulker se dresse, guidant notre entreprise vers l’excellence et nous permettant de bâtir un avenir solide, pièce par pièce, projet par projet.
          </p>
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
