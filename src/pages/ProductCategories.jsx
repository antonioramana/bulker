// src/pages/ProductCategories.js
import React from 'react';
import { Link } from 'react-router-dom';

// Importer les images de vos catégories
import renovationImage from '../assets/fissures/fiss1.jpg';
import protectionImage from '../assets/polyanes/pol1.jpg';
import nettoyageImage from '../assets/sacs/sac2.jpg';
import evacuationImage from '../assets/chiffons/chiff1.jpg';
import Footer from '../layouts/Footer';
import Contact from '../sections/Contact';
import Navbar from '../layouts/NavBar';
import ButtonWithHoverIconBack from '../components/ButtonWithIconBack';

const categories = [
  { id: 'renovation', name: 'Rénovation', image: renovationImage },
  { id: 'protection', name: 'Protection de surface', image: protectionImage },
  { id: 'nettoyage', name: 'Nettoyage de la surface', image: evacuationImage },
  { id: 'evacuation', name: 'Évacuation de déchets', image:  nettoyageImage},
];

const ProductCategories = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className='p-10'>
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Produits</h1>
        <h6 className="text-xl font-bold mb-6"><span className='text-blue-900'> Accueil |</span>Catégories</h6>
        </div>
        
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
                <h2 className="text-xl font-bold mb-4">{category.name}</h2>
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
        </div>
      </div>
      {/* <Contact /> */}
      <div className="flex justify-center m-8">
          <ButtonWithHoverIconBack path={"/bulker/"} />
      </div>
      <Footer />
    </>
  );
};

export default ProductCategories;
