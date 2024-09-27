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
              Bulker ne se contente pas de distribuer des matériaux de construction, nous façonnons des projets avec intégrité et précision. Nous sommes les partenaires fiables qui transforment chaque projet en une réalisation emblématique, bâtissant des relations durables et un avenir solide.</p>
          </div>

          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="text-gray-400">
              <li><Link to="/bulker/terms" className="hover:underline">Politique de Confidentialité</Link></li>
              <li><Link  to="/bulker/terms" className="hover:underline">Conditions Générales</Link></li>
              <li><Link href="#about" className="hover:underline">À Propos de Nous</Link></li>

            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="text-gray-400">
              <li><a href="/bulker#home" className="hover:underline">Accueil</a></li>
              <li><a href="/bulker#about" className="hover:underline">À Propos</a></li>
              <li><a href="/bulker#products" className="hover:underline">Produits</a></li>
              <li><a href="/bulker#sustainability" className="hover:underline">Durabilité</a></li>
              <li><a href="/bulker#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
            <p className="text-gray-400 mb-2">IDEO<br />9 route de Turin<br />06300 Nice, France</p>
            <p className="text-gray-400 mb-4">
              Téléphone : <a href="tel:0970704101" className="text-gray-400 hover:underline">09 70 70 41 01</a><br />
              E-mail : <a href="mailto:contact@exnihilo-france.com" className="text-gray-400 hover:underline">contact@exnihilo-france.com</a><br />
              Site web : <a href="http://exnihilo-france.com" className="text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">exnihilo-france.com</a>
            </p>
            <p className="text-gray-500 text-sm">IDEO France © 2024. Tous droits réservés. Ne pas jeter sur la voie publique.</p>
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
