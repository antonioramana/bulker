import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Importer useParams
import { FiSearch } from 'react-icons/fi';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';
import fissure70 from '../assets/fissures/fiss70.jpg';
import fissure90 from '../assets/fissures/fiss90.jpg';
import polyane1 from '../assets/polyanes/pol1.jpg';
import sac1 from '../assets/sacs/sac1.jpg';
import sac3 from '../assets/sacs/sac3.jpg';
import chiff1 from '../assets/chiffons/chiff1.jpg';
import chiff3 from '../assets/chiffons/chiff3.jpg';
import ButtonWithHoverIconBack from '../components/ButtonWithIconBack';
import Loader from '../components/Loader';
import { useEffect } from 'react';


const categories = [
  { id: 'renovation1', name: 'Fissure Max 70g', image: fissure70, cat: 'renovation' },
  { id: 'renovation2', name: 'Fissure Max 90g', image: fissure90, cat: 'renovation' },
  { id: 'protection1', name: 'Polyane en bobineau', image: polyane1, cat: 'protection' },
  { id: 'evacuation1', name: 'Sacs à gravats', image: sac1, cat: 'evacuation' },
  { id: 'evacuation2', name: 'Sac poubelle en polyéthylène noir', image: sac3, cat: 'evacuation' },
  { id: 'nettoyage1', name: 'Chiffons blancs', image: chiff1, cat: 'nettoyage' },
  { id: 'nettoyage2', name: 'Chiffons couleurs', image: chiff3, cat: 'nettoyage' },
];

const CategoryProducts = () => {
  const [loading, setLoading] = useState(true);
  const { cat } = useParams(); // Récupérer la catégorie depuis les paramètres d'URL
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrer les produits par catégorie et par terme de recherche
  const filteredProducts = categories
    .filter((category) => category.cat === cat) // Filtrer selon la catégorie passée en paramètre
    .filter((category) => category.name.toLowerCase().includes(searchTerm.toLowerCase()));
    useEffect(() => {
      // Simulez un temps de chargement avant de terminer le chargement

      const timer = setTimeout(() => setLoading(false), 3000); // 3 secondes
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className="p-10">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">Produits </h1>
          <h6 className="text-xl font-bold mb-6">
            <span className="text-blue-900">Accueil |</span> Produits {cat}</h6>
        </div>
        {loading ? (
        <Loader />
      ) : (
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((category) => (
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
                        to={`/bulker/productDetails/${category.id}`}
                        className=" opacity-80 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700"
                      >
                        Voir le produit
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-4">Aucun produit trouvé dans cette catégorie.</p>
            )}
          </div>
        </div>)}
      </div>
      <div className="flex justify-center m-8">
          <ButtonWithHoverIconBack path={"/bulker/produtCategories/"} />
      </div>
      <Footer />
    </>
  );
};

export default CategoryProducts;
