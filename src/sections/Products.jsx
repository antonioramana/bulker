import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('renovation');

  const tabs = [
    {
      id: 'renovation',
      title: 'Rénovation',
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://via.placeholder.com/250x250?text=Fissure+70g" alt="Fissure 70g" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Fissure max 70 g</h2>
              <p className="text-gray-700 mb-4">Description pour Fissure max 70 g. Ce produit est parfait pour des réparations légères. Il offre une bonne adhérence et durabilité.</p>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">Voir Détail</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://via.placeholder.com/250x250?text=Fissure+90g" alt="Fissure 90g" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Fissure max 90 g</h2>
              <p className="text-gray-700 mb-4">Description pour Fissure max 90 g. Idéal pour des réparations plus importantes, avec une meilleure couverture pour les fissures plus larges.</p>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">Voir Détail</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'protection',
      title: 'Protection de surface',
      content: (
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://via.placeholder.com/250x250?text=Polyane" alt="Polyane en bobineau" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Polyane en bobineau</h2>
              <p className="text-gray-700 mb-4">Description pour polyane en bobineau. Parfait pour protéger les surfaces des salissures et dommages pendant les travaux de rénovation.</p>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">Voir Détail</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'evacuation',
      title: 'Évacuation de déchets',
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://via.placeholder.com/250x250?text=Sac+à+Gravats" alt="Sac à gravats" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Sac à gravats</h2>
              <p className="text-gray-700 mb-4">Description pour sac à gravats. Résistant et idéal pour l’évacuation des déchets de construction, pratique et fiable.</p>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">Voir Plus</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://via.placeholder.com/250x250?text=Sac+Poubelle" alt="Sac poubelle polyéthylène" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Sac poubelle polyéthylène noir</h2>
              <p className="text-gray-700 mb-4">Description pour sac poubelle polyéthylène noir. Robuste et parfait pour gérer les déchets de manière efficace.</p>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">Voir Plus</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'nettoyage',
      title: 'Nettoyage de la surface',
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://via.placeholder.com/250x250?text=Chiffon+Blanc" alt="Chiffon blanc" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Chiffon blanc</h2>
              <p className="text-gray-700 mb-4">Description pour chiffon blanc. Idéal pour un nettoyage délicat des surfaces avec une finition propre.</p>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600">Voir Plus</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://via.placeholder.com/250x250?text=Chiffon+Couleur" alt="Chiffon couleur" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Chiffon couleur</h2>
              <p className="text-gray-700 mb-4">Description pour chiffon couleur. Parfait pour différents types de nettoyage tout en apportant une touche de couleur.</p>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-800">Voir Plus</button>
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
        <p className="text-lg text-gray-700">Découvrez notre gamme complète de produits pour la rénovation, la protection des surfaces, l’évacuation des déchets, et le nettoyage. Cliquez sur les onglets ci-dessous pour en savoir plus.</p>
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
