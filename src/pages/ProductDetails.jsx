import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';
import fissure90 from '../assets/fissures/fiss90.jpg';
import fissure70 from '../assets/fissures/fiss70.jpg';
import polyane1 from '../assets/polyanes/pol1.jpg';
import sac1 from '../assets/sacs/sac1.jpg';
import sac3 from '../assets/sacs/sac3.jpg';
import chiff1 from '../assets/chiffons/chiff1.jpg';
import chiff3 from '../assets/chiffons/chiff3.jpg';
import ButtonWithHoverIconBack from '../components/ButtonWithIconBack';
import { useEffect } from 'react';
import Loader from '../components/Loader';

const products = [
  { id: 'renovation1', name: 'Fissure Max 70g', description: '...', image: fissure70 , cat:'renovation'},
  { id: 'renovation2', name: 'Fissure Max 90g', description: '...', image: fissure90, cat:'renovation' },
  { id: 'protection1', name: 'Polyane en bobineau', description: '...', image: polyane1, cat:'protection' },
  { id: 'evacuation1', name: 'Sacs à gravats', description: '...', image: sac1 , cat:'evacuation'},
  { id: 'evacuation2', name: 'Sac poubelle', description: '...', image: sac3 , cat:'evacuation'},
  { id: 'nettoyage1', name: 'Chiffons blancs', description: '...', image: chiff1, cat:'nettoyage' },
  { id: 'nettoyage2', name: 'Chiffons couleurs', description: '...', image: chiff3, cat:'nettoyage' },
];

const ProductDetails = () => {
  const { productId } = useParams();  // Récupérer l'ID du produit
  const product = products.find((item) => item.id === productId);  // Trouver le produit correspondant
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulez un temps de chargement avant de terminer le chargement
    const timer = setTimeout(() => setLoading(false), 3000); // 3 secondes
    return () => clearTimeout(timer);
  }, []);
  const [activeTab, setActiveTab] = useState('description');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p>{product.description}</p>;
      case 'features':
        return <p>Caractéristiques du produit...</p>;
      case 'technical':
        return <p>Détails techniques...</p>;
      case 'downloads':
        return <p>Téléchargez les documents...</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className='p-10'>
          <h1 className="text-3xl font-bold mb-6 text-blue-900">{product.name}</h1>
          <h6 className="text-xl font-bold mb-6"><span className='text-blue-900'> Accueil | Produits | </span>{product.name}</h6>
        </div>
        {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-white">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '500px' }} 
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

            {/* Tabs */}
            <div className="border-b mb-4 mt-10">
              <button
                className={`mr-4 pb-2 ${activeTab === 'description' ? 'border-blue-900 border-b-2 text-blue-900 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`mr-4 pb-2 ${activeTab === 'features' ? 'border-blue-900 border-b-2 text-blue-900 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('features')}
              >
                Caractéristiques
              </button>
              <button
                className={`mr-4 pb-2 ${activeTab === 'technical' ? 'border-blue-900 border-b-2 text-blue-900 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('technical')}
              >
                Fiche technique
              </button>
              <button
                className={`pb-2 ${activeTab === 'downloads' ? 'border-blue-900 border-b-2 text-blue-900 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('downloads')}
              >
                Téléchargements
              </button>
            </div>

            {/* Contenu des tabs */}
            <div>{renderTabContent()}</div>

            <button className="bg-blue-900  opacity-80 text-white py-2 px-4 rounded mt-6 hover:bg-blue-700">
              Intérressé
            </button>
          </div>
        </div>)}
      </div>
      <div className="flex justify-center m-8">
          <ButtonWithHoverIconBack path={"/bulker/categoryProducts/"+product.cat} />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
