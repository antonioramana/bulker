import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('renovation');

  const handleImageClick = (productId) => {
    console.log(`Voir plus d'infos sur le produit ${productId}`);
  };

  const tabs = [
    {
      id: 'renovation',
      title: 'Rénovation',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="relative cursor-pointer"
            onClick={() => handleImageClick('Fissure70g')}
          >
            <img
              src="https://via.placeholder.com/180x180?text=Fissure+70g"
              alt="Fissure 70g"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-lg px-6 py-2 rounded-tl-lg rounded-br-lg shadow-lg">
              Fissure max 70 g
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
              <p>Description pour Fissure max 70 g. Parfait pour des réparations légères.</p>
            </div>
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => handleImageClick('Fissure90g')}
          >
            <img
              src="https://via.placeholder.com/180x180?text=Fissure+90g"
              alt="Fissure 90g"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-lg px-6 py-2 rounded-tl-lg rounded-br-lg shadow-lg">
              Fissure max 90 g
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
              <p>Description pour Fissure max 90 g. Idéal pour des réparations plus importantes.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'protection',
      title: 'Protection de surface',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="relative cursor-pointer"
            onClick={() => handleImageClick('Polyane')}
          >
            <img
              src="https://via.placeholder.com/180x180?text=Polyane"
              alt="Polyane en bobineau"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-lg px-6 py-2 rounded-tl-lg rounded-br-lg shadow-lg">
              Polyane en bobineau
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
              <p>Parfait pour protéger les surfaces pendant les travaux de rénovation.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'evacuation',
      title: 'Évacuation de déchets',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="relative cursor-pointer"
            onClick={() => handleImageClick('SacGravats')}
          >
            <img
              src="https://via.placeholder.com/180x180?text=Sac+à+Gravats"
              alt="Sac à gravats"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-lg px-6 py-2 rounded-tl-lg rounded-br-lg shadow-lg">
              Sac à gravats
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
              <p>Résistant, idéal pour l’évacuation des déchets de construction.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id='products' className="w-full p-6 bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl text-blue-900 font-bold mb-2">Nos Produits</h1>
        <p className="text-lg text-gray-700">Découvrez notre gamme complète de produits pour la rénovation, la protection des surfaces, et l’évacuation des déchets.</p>
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
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default Products;
