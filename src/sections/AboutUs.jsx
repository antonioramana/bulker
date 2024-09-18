import React from 'react';
//import aboutImage from '../assets/about-image.jpg'; // Remplacez par le chemin réel de votre image

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            // src={aboutImage}
            src={""}
            alt="À propos de nous"
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">À Propos de Nous</h2>
          <p className="text-lg text-gray-700 mb-6">
            Chez GYGIS, nous croyons en la puissance de l'innovation et de la passion pour offrir des solutions d'emballage de premier ordre. Notre équipe dynamique travaille sans relâche pour créer des produits qui non seulement répondent aux besoins de nos clients mais les surpassent.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Avec un engagement profond envers la durabilité et la responsabilité, nous intégrons des pratiques éco-responsables dans chaque étape de notre processus. Découvrez comment notre expertise et notre dévouement transforment chaque défi en une opportunité pour faire la différence.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-900 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-800 transition-all duration-300"
          >
            Contactez-Nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
