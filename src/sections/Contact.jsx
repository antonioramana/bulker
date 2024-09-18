import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contactez-Nous</h2>
        <p className="text-lg text-gray-600 mb-12">
          Nous serions ravis de répondre à toutes vos questions. N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous ou en utilisant nos coordonnées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-blue-900 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Téléphone</h3>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-900 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">E-mail</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-900 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Adresse</h3>
              <p className="text-gray-600">123 Rue Exemple, 75001 Paris, France</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Envoyez-nous un Message</h3>
          <form
            action="#"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-all duration-300"
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
