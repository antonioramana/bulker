// src/pages/CategoryProducts.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Correction : ajout de useParams
import { FiSearch } from 'react-icons/fi'; // Ajout de l'import pour l'icône de recherche
import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';
import ButtonWithHoverIconBack from '../components/ButtonWithIconBack';
import Loader from '../components/Loader';
import { API_URL } from '../config/api';

const CategoryProducts = () => {
  const { cat } = useParams(); // Correction : extraction de cat depuis les params
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/categories/${cat}`); // Correction : utilisation de cat
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      } finally {
        setLoading(false); // Assurez-vous que le loading soit toujours arrêté
      }
    };

    fetchCategories();
  }, [cat]); // Ajout de cat dans les dépendances

  // Gestion de l'événement de recherche
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrage des produits par nom en fonction du terme de recherche
  const filteredProducts = category.products ? category.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className='p-10'>
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Produits</h1>
          <h6 className="text-xl font-bold mb-6">
            <span className='text-blue-900'>
              <Link to="/">Accueil | </Link>
              <Link to="/bulker/produtCategories">Catégories</Link> | 
            </span> 
            {category.name} 
          </h6>
        </div>
        
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Champ de recherche décalé à droite */}
            <div className="flex justify-end p-6 bg-white">
              <div className="relative mb-4 md:w-1/3 ml-auto">
                <input
                  type="text"
                  className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-900 w-full"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <FiSearch className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Filtrage des produits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-6 bg-white">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg overflow-hidden shadow-md min-h-[450px] flex flex-col justify-between"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <h2 className="text-xl font-bold mb-4">{product.name}</h2>
                      <div className="mt-auto" style={{ alignSelf: 'flex-end' }}>
                        <Link
                          to={`/bulker/productDetails/${product.id}`} // Correction : utilisation de to
                          className="opacity-80 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800" // Légère modification de la couleur au survol
                        >
                          Voir le produit
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-4">Aucun produit trouvé.</p>
              )}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center m-8">
        <ButtonWithHoverIconBack path={"/bulker/produtCategories"} />
      </div>      
      <Footer />
    </>
  );
};

export default CategoryProducts;
