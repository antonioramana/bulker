import React, { useState } from 'react';
import fissure1 from '../assets/fissures/fiss1.jpg';
import fissure2 from '../assets/fissures/fiss2.jpg';
import fissure3 from '../assets/fissures/fiss3.jpg';
import polyane1 from '../assets/polyanes/pol1.jpg';
import polyane2 from '../assets/polyanes/pol2.jpg';
import polyane3 from '../assets/polyanes/pol3.jpg';
import sac1 from '../assets/sacs/sac1.jpg';
import sac2 from '../assets/sacs/sac2.jpg';
import sac3 from '../assets/sacs/sac3.jpg';
import chiff1 from '../assets/chiffons/chiff1.jpg';
import chiff2 from '../assets/chiffons/chiff2.jpg';
import chiff3 from '../assets/chiffons/chiff3.jpg';

const Products = () => {
  const [activeTab, setActiveTab] = useState('renovation');

  const tabs = [
    {
      id: 'renovation',
      title: 'Rénovation',
      content: (
        <div className="space-y-6">
          <div className="text-marronBlaire text-center py-4 rounded-t-lg shadow-md"> 
            <h2 className="text-3xl font-bold">Fissure Max</h2>
            <p className="text-lg">Fissure Max 70g/90g</p>
          </div>
          <div className="flex gap-2">
            {/* Image principale */}
            <div className="flex-1 flex items-start">
              <img
                src={fissure1}
                alt="Fissure 70g"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: 'calc(2 * 200px)' }} // Ajuster en fonction de la hauteur des images secondaires
              />
            </div>
            {/* Deux images à droite */}
            <div className="flex flex-col gap-2">
              <img
                src={fissure2}
                alt="Produit 1"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
              <img
                src={fissure3}
                alt="Produit 2"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
            </div>
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">
              Voir Détail
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'protection',
      title: 'Protection de surface',
      content: (
        <div className="space-y-6">
          <div className="text-marronBlaire text-center py-4 rounded-t-lg shadow-md"> 
            <h2 className="text-3xl font-bold">Polyane en bobineau</h2>
            <p className="text-lg">Protection polyane en plastique à trois couches</p>
          </div>
          <div className="flex gap-2">
            {/* Image principale */}
            <div className="flex-1 flex items-start">
              <img
                src={polyane1}
                alt="Polyane en bobineau"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: 'calc(2 * 200px)' }} // Ajuster en fonction de la hauteur des images secondaires
              />
            </div>
            {/* Deux images à droite */}
            <div className="flex flex-col gap-2">
              <img
                src={polyane2}
                alt="Produit 1"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
              <img
                src={polyane3}
                alt="Produit 2"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
            </div>
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">
              Voir Détail
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'evacuation',
      title: 'Évacuation de déchets',
      content: (
        <div className="space-y-6">
          <div className="text-marronBlaire text-center py-4 rounded-t-lg shadow-md"> 
            <h2 className="text-3xl font-bold">Évacuation de déchets</h2>
            <p className="text-lg">Sacs à gravats et Sac poubelle polyéthylène noir</p>
          </div>
          <div className="flex gap-2">
            {/* Image principale */}
            <div className="flex-1 flex items-start">
              <img
                src={sac1}
                alt="Sac à gravats"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: 'calc(2 * 200px)' }} // Ajuster en fonction de la hauteur des images secondaires
              />
            </div>
            {/* Deux images à droite */}
            <div className="flex flex-col gap-2">
              <img
                src={sac2}
                alt="Sac poubelle polyéthylène noir"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
              <img
                src={sac3}
                alt="Sac poubelle polyéthylène noir"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
            </div>
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">
              Voir Détail
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'nettoyage',
      title: 'Nettoyage de la surface',
      content: (
        <div className="space-y-6">
          <div className="text-marronBlaire text-center py-4 rounded-t-lg shadow-md"> 
            <h2 className="text-3xl font-bold">Chiffons blancs et couleur</h2>
            <p className="text-lg">Tissus uniformes neufs, jamais utilisés</p>
          </div>
          <div className="flex gap-2">
            {/* Image principale */}
            <div className="flex-1 flex items-start">
              <img
                src={chiff1}
                alt="Chiffon blanc"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: 'calc(2 * 200px)' }} // Ajuster en fonction de la hauteur des images secondaires
              />
            </div>
            {/* Deux images à droite */}
            <div className="flex flex-col gap-2">
              <img
                src={chiff2}
                alt="Produit 1"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
              <img
                src={chiff3}
                alt="Produit 2"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                style={{ maxHeight: '200px' }} // Hauteur des images secondaires
              />
            </div>
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">
              Voir Plus
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="products" className="w-full p-6 bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl text-blue-900 font-bold mb-2">Nos Produits</h1>
        <p className="text-lg text-gray-700">
          Découvrez notre gamme complète de produits pour la rénovation, la protection des surfaces, l’évacuation des déchets, et le nettoyage. Cliquez sur les onglets ci-dessous pour en savoir plus.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Tab Headers */}
        <div className="flex flex-wrap md:flex-nowrap bg-gray-200 p-2 rounded-t-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-center py-2 px-4 font-medium ${
                activeTab === tab.id ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="p-6">
          {tabs.map(
            (tab) =>
              tab.id === activeTab && (
                <div key={tab.id}>
                  {tab.content}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
