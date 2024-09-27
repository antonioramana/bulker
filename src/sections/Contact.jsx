import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaTag, FaCommentDots } from 'react-icons/fa';
import bg from '../assets/contact-bg.png'; // Assurez-vous que ce chemin est correct

const Contact = () => {
  return (
    <section id="contact" className="fall-in bg-white py-12 px-4 md:px-8 lg:px-16">
                {/* Informations de contact */}
                <div className="flex align-center flex-col space-y-4 lg:space-y-6">
                <div className="text-center mb-6 fall-in">
      <h1 className="text-3xl mb-4">
       <span className="font-bold">Contactez-</span>nous
      </h1>
      {/* Tiré gris épais juste en dessous du titre */}
      <hr className="w-1/4 mx-auto border-t-4 opacity-80 border-blue-900 p-2 mb-4" />

      <div className="flex flex-wrap justify-center gap-8 text-xs lg:text-sm">
  {/* Téléphone */}
<div className="flex items-center space-x-2 text-center">
  <FaPhone className="text-blue-900 text-lg lg:text-xl" />
  <div>
    <p className="font-semibold text-gray-800">Téléphone</p>
    <p className="text-gray-600">09 70 70 41 01</p>
  </div>
</div>

{/* E-mail */}
<div className="flex items-center space-x-2 text-center">
  <FaEnvelope className="text-blue-900 text-lg lg:text-xl" />
  <div>
    <p className="font-semibold text-gray-800">E-mail</p>
    <p className="text-gray-600">contact@exnihilo-france.com</p>
  </div>
</div>

{/* Adresse */}
<div className="flex items-center space-x-2 text-center">
  <FaMapMarkerAlt className="text-blue-900 text-lg lg:text-xl" />
  <div>
    <p className="font-semibold text-gray-800">Adresse</p>
    <p className="text-gray-600">9 route de Turin, 06300 Nice, France</p>
  </div>
</div>

</div>

    </div>
           
          </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Colonne gauche : Image ou informations de contact */}
        <div className="flex flex-col justify-between h-full">
          {/* Image */}
          <img 
            src={bg}
            alt="Contact illustration" 
            className="w-full rounded-lg shadow-lg object-cover mb-8 lg:mb-0"
          />
        </div>

        {/* Colonne droite : Formulaire de contact */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
          <h3 className="text-center text-2xl font-semibold text-blue-900 mb-6">Envoyez-nous un Message</h3>
          <form action="#" method="POST" className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Champ Nom avec icône */}
              <div className="relative">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full py-2 border-b border-gray-300 focus:border-blue-500 bg-transparent rounded-none focus:outline-none"
                  />
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                </div>
              </div>

              {/* Champ E-mail avec icône */}
              <div className="relative">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full py-2 border-b border-gray-300 focus:border-blue-500 bg-transparent rounded-none focus:outline-none"
                  />
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Champ Sujet avec icône */}
            <div className="relative">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:border-blue-500 bg-transparent rounded-none focus:outline-none"
                />
                <FaTag className="absolute top-3 left-3 text-gray-400" />
              </div>
            </div>

            {/* Champ Message avec icône */}
            <div className="relative">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:border-blue-500 bg-transparent rounded-none focus:outline-none"
                ></textarea>
                <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
              </div>
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition-all duration-300 mt-4"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
