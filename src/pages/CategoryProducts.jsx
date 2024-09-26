import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';  // Importer l'icône de recherche
import renovationImage from '../assets/fissures/fiss1.jpg';
import protectionImage from '../assets/fissures/fiss2.jpg';
import fissure70 from '../assets/fissures/fiss70.jpg';
import fissure90 from '../assets/fissures/fiss90.jpg';
import Footer from '../layouts/Footer';
import Contact from '../sections/Contact';
import Navbar from '../layouts/NavBar';

const categories = [
  { id: 'renovation', name: 'Fissure Max 70g', image: fissure70 },
  { id: 'protection', name: 'Fissure Max 90g', image: fissure90 },
  // { id: 'nettoyage', name: 'Nettoyage de la surface', image: nettoyageImage },
  // { id: 'evacuation', name: 'Évacuation de déchets', image: evacuationImage },
];

const CategoryProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className="p-10">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">Produits</h1>
          <h6 className="text-xl font-bold mb-6">
            <span className="text-blue-900">Accueil |</span> Produits
          </h6>
        </div>

        {/* Section produits avec recherche */}
        <div className="bg-white p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            {/* Champ de recherche décalé à droite */}
            <div className="relative mb-4 md:mb-0 md:w-1/3 ml-auto">
                <input
                    type="text"
                    className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-900 w-full"
                    placeholder="Rechercher un produit..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {/* Déplacer l'icône à droite */}
                <FiSearch className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>

          </div>

          {/* Filtrage des catégories par nom */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categories
              .filter((category) =>
                category.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((category) => (
                <div
                  key={category.id}
                  className="border rounded-lg overflow-hidden shadow-md min-h-[450px] flex flex-col justify-between"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                    <div className="mt-auto" style={{ alignSelf: 'flex-end' }}>
                      <Link
                        // to={`/products#${category.id}`}
                        to="/bulker/ProductDetails"
                        className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700"
                      >
                        Voir le produit
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default CategoryProducts;
