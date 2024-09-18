import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">À Propos de Nous</h3>
            <p className="text-gray-400">
              Chez GYGIS, notre équipe jeune et passionnée favorise des possibilités illimitées en fournissant des solutions d'emballage optimales avec un service client exceptionnel.
            </p>
          </div>

          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="text-gray-400">
              <li><a href="#privacy" className="hover:underline">Politique de Confidentialité</a></li>
              <li><a href="#terms" className="hover:underline">Conditions Générales</a></li>
              <li><a href="#about" className="hover:underline">À Propos de Nous</a></li>
              <li><a href="#careers" className="hover:underline">Carrières</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="text-gray-400">
              <li><a href="#home" className="hover:underline">Accueil</a></li>
              <li><a href="#about" className="hover:underline">À Propos</a></li>
              <li><a href="#products" className="hover:underline">Produits</a></li>
              <li><a href="#sustainability" className="hover:underline">Durabilité</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
            <p className="text-gray-400 mb-2">11 rue de Nancy, 75010 Paris, France</p>
            <p className="text-gray-400 mb-4">Info@gygis.co</p>
            <div className="flex space-x-4">
              <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GYGIS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
