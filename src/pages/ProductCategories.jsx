// src/pages/ProductCategories.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';
import ButtonWithHoverIconBack from '../components/ButtonWithIconBack';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../components/Loader';
import { API_URL } from '../config/api';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]); // État pour stocker les catégories
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Appel API pour récupérer les catégories
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };

    fetchCategories();

    // Simuler un temps de chargement avant d'afficher les composants
    const timer = setTimeout(() => setLoading(false), 3000); // 3 secondes
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className='p-10'>
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Produits</h1>
        <h6 className="text-xl font-bold mb-6"><span className='text-blue-900'><Link to="/">Accueil |</Link></span>Catégories</h6>
        </div>
        {loading ? (
        <Loader />
      ) : ( 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-6 bg-white">
          {categories.map((category) => (
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
                <h2 className="text-xl font-bold mb-1">{category.name}</h2>
                <p className="mb-4">{category.description}</p>
                <div className="mt-auto"  style={{ alignSelf: 'flex-end' }} >
                <Link
                   to={`/bulker/categoryProducts/${category.id}`}
                  className=" opacity-80 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"                
                >
                  Voir les produits
                </Link>
              </div>

              </div>
            </div>
          ))}
        </div>)}
      </div>
      {/* <Contact /> */}
      <div className="flex justify-center m-8">
          <ButtonWithHoverIconBack path={"/bulker"} />
      </div>
      
      <Footer />
    </>
  );
};

export default ProductCategories;
