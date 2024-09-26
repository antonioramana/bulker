import React, { useState } from 'react';
import renovationImage from '../assets/fissures/fiss90.jpg';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p>Ceci est la description du produit concernant les fissures...</p>;
      case 'features':
        return <p>Caractéristiques du produit : durable, facile à utiliser, économique...</p>;
      case 'technical':
        return <p>Détails techniques : Résistance aux intempéries, matériaux robustes, etc.</p>;
      case 'downloads':
        return <p>Téléchargez le manuel utilisateur, fiche technique, ou d'autres documents...</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className='p-10'>
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Produits</h1>
          <h6 className="text-xl font-bold mb-6"><span className='text-blue-900'> Accueil | Produits | </span>Fissures</h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-white">
          {/* Section gauche : Image du produit */}
          <div>
            <img
              src={renovationImage}
              alt="Fissures"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Section droite : Détails avec onglets */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Fissure Max 90g</h2>
            <h6 className="text-gray-500 mb-4">Le tissu de rénovation FissureMax, grâce à l’incorporation de fibres 
de verre, assure une consolidation maximale. Son concept permet 
à l’enduit de pénétrer à travers le tissu, créant ainsi un composite 
authentique</h6>

            {/* Tabs */}
            <div className="border-b mb-4 mt-10">
              <button
                className={`mr-4 pb-2 ${activeTab === 'description' ? 'border-blue-900 border-b-2' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`mr-4 pb-2 ${activeTab === 'features' ? 'border-blue-900 border-b-2' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button
                className={`mr-4 pb-2 ${activeTab === 'technical' ? 'border-blue-900 border-b-2' : ''}`}
                onClick={() => setActiveTab('technical')}
              >
                Technical
              </button>
              <button
                className={`pb-2 ${activeTab === 'downloads' ? 'border-blue-900 border-b-2' : ''}`}
                onClick={() => setActiveTab('downloads')}
              >
                Downloads
              </button>
            </div>

            {/* Tab Content */}
            <div className="text-gray-700">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
