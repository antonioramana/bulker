import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">A PROPOS</h3>
            <p className="text-gray-400">
              Expert en négoce de produits de matériaux de construction, notre équipe saura vous accompagner 
              et vous orienter vers les solutions les plus adaptées, tout en vous proposant des tarifs compétitifs.
              <br /><br />
              Qualité <span className="text-blue-900">•</span> Réactivité <span className="text-blue-900">•</span> Fidélité <span className="text-blue-900">•</span> Compétitivité. 
              <br />
              <strong className="text-white">Bulker est l'allié qu'il vous faut.</strong>
            </p>
          </div>

          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="/bulker/terms" className="hover:underline">Politique de Confidentialité</Link></li>
              <li><Link to="/bulker/terms" className="hover:underline">Conditions Générales</Link></li>
              <li><Link to="/bulker#about" className="hover:underline">À Propos de Nous</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="text-gray-400 space-y-2">
            <li><Link to="/bulker#home" className="hover:underline">Accueil</Link></li>
              <li><Link to="/bulker#about" className="hover:underline">À Propos</Link></li>
              <li><Link to="/bulker#products" className="hover:underline">Produits</Link></li>
              <li><Link to="/bulker#sustainability" className="hover:underline">Durabilité</Link></li>
              <li><Link to="/bulker#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
            <p className="text-gray-400 mb-2">
              IDEO<br />
              9 route de Turin<br />
              06300 Nice, France
            </p>
            <p className="text-gray-400 mb-4">
              Téléphone : <a href="tel:0970704101" className="hover:underline">09 70 70 41 01</a><br />
              E-mail : <a href="mailto:contact@exnihilo-france.com" className="hover:underline">hello@bulker.com</a><br />
              Site web : <a href="http://exnihilo-france.com" className="hover:underline" target="_blank" rel="noopener noreferrer">www.bulker.fr</a>
            </p>
            <p className="text-gray-500 text-sm">
              IDEO France © 2024. Tous droits réservés. Ne pas jeter sur la voie publique.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} IDEO France. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
