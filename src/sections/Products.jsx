import React, { useState } from 'react';
import fissure70 from '../assets/fissures/fiss70.jpg';
import fissure90 from '../assets/fissures/fiss90.jpg';
import polyane1 from '../assets/polyanes/pol1.jpg';
import sac1 from '../assets/sacs/sac1.jpg';
import sac3 from '../assets/sacs/sac3.jpg';
import chiff1 from '../assets/chiffons/chiff1.jpg';
import chiff3 from '../assets/chiffons/chiff3.jpg';
import ButtonWithHoverIcon from '../components/ButtonWithIcon';

const Products = () => {
  const [activeTab, setActiveTab] = useState('renovation');

  const tabs = [
    {
      id: 'renovation',
      title: 'Rénovation',
      content: (
        <div className="space-y-12">
        {/* Premier produit */}
        <div className="flex flex-col md:flex-row gap-6 group">
          {/* Image en premier sur mobile */}
          <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src={fissure70}
              alt="Fissure 70g"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px' }} // Ajuster en fonction de la hauteur désirée
            />
          </div>
      
          {/* Titre et description ensuite */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
            <h2 className="text-3xl font-bold">Fissure Max 70g</h2>
            <p className="text-lg text-gray-700">
              Découvrez notre produit Fissure Max en format 70g, idéal pour les réparations durables et efficaces.
            </p>
          </div>
        </div>
      
        {/* Deuxième produit (image et description inversées sur grands écrans) */}
        <div className="flex flex-col md:flex-row-reverse gap-6 group">
          {/* Image en premier sur mobile */}
          <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src={fissure90}
              alt="Fissure 90g"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px' }} // Ajuster en fonction de la hauteur désirée
            />
          </div>
      
          {/* Titre et description ensuite */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
            <h2 className="text-3xl font-bold">Fissure Max 90g</h2>
            <p className="text-lg text-gray-700">
              Découvrez notre produit Fissure Max en format 90g, parfait pour les petites réparations.
            </p>
          </div>
        </div>
      
        {/* Bouton centré (unique pour les deux produits) */}
        <div className="flex justify-center mt-8">
          <ButtonWithHoverIcon path={"/bulker/produtCategories"} />
        </div>
      </div>
      ),
    },
    {
      id: 'protection',
      title: 'Protection de surface',
      content: (
        <div className="space-y-12">
        {/* Premier produit */}
        <div className="flex flex-col md:flex-row gap-6 group">
          {/* Image en premier sur mobile */}
          <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src={polyane1}
              alt="Polyane en bobineau"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px' }} // Ajuster en fonction de la hauteur désirée
            />
          </div>
      
          {/* Titre et description ensuite */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
            <h2 className="text-3xl font-bold">Polyane en bobineau</h2>
            <p className="text-lg text-gray-700">
            Ce film de protection polyane en plastique à trois couches est robuste et se présente dans un format pratique : il se déploie d’un seul 
            mouvement, s’installe facilement et est facile à transporter </p>
          </div>
        </div>
      
        {/* Bouton centré (unique pour les deux produits) */}
        <div className="flex justify-center mt-8">
          <ButtonWithHoverIcon path={"/bulker/produtCategories"} />
        </div>
      </div>
      ),
    },
    {
      id: 'evacuation',
      title: 'Évacuation de déchets',
      content: (
        <div className="space-y-12">
        {/* Premier produit */}
        <div className="flex flex-col md:flex-row gap-6 group">
          {/* Image en premier sur mobile */}
          <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src={sac3}
              alt="Fissure 70g"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px' }} // Ajuster en fonction de la hauteur désirée
            />
          </div>
      
          {/* Titre et description ensuite */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
            <h2 className="text-3xl font-bold">Sacs à gravats</h2>
            <p className="text-lg text-gray-700">
            Sacs blancs en polypropylène tissé conçus pour l’évacuation et le 
transport des déchets lourds. D’une contenance de 60 litres, il présente une grande robustesse face aux déchirures et aux perforations            </p>
          </div>
        </div>
      
        {/* Deuxième produit (image et description inversées sur grands écrans) */}
        <div className="flex flex-col md:flex-row-reverse gap-6 group">
          {/* Image en premier sur mobile */}
          <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src={sac1}
              alt="Sacs à gravats"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px' }} // Ajuster en fonction de la hauteur désirée
            />
          </div>
      
          {/* Titre et description ensuite */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
            <h2 className="text-3xl font-bold">Sac poubelle en polyéthylène noir</h2>
            <p className="text-lg text-gray-700">
            Sac poubelle en polyéthylène noir, résistant et hermétique. 
            Sa conception durable garantit lui garantit une résistante et 
            polyvalence.
            </p>
          </div>
        </div>
      
        {/* Bouton centré (unique pour les deux produits) */}
        <div className="flex justify-center mt-8">
          <ButtonWithHoverIcon path={"/bulker/produtCategories"} />
        </div>
      </div>
      ),
    },
    {
      id: 'nettoyage',
      title: 'Nettoyage de la surface',
      content: (
        <div className="space-y-12">
        {/* Premier produit */}
        <div className="flex flex-col md:flex-row gap-6 group">
          {/* Image en premier sur mobile */}
          <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src={chiff1}
              alt="Fissure 70g"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px' }} // Ajuster en fonction de la hauteur désirée
            />
          </div>
      
          {/* Titre et description ensuite */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
            <h2 className="text-3xl font-bold">Chiffons blancs </h2>
            <p className="text-lg text-gray-700">
            Chiffons blancs, réalisés à partir de tissus uniformes neufs, jamais utilisés.     </p>
          </div>
        </div>
      
        {/* Deuxième produit (image et description inversées sur grands écrans) */}
        <div className="flex flex-col md:flex-row-reverse gap-6 group">
          {/* Image en premier sur mobile */}
          <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src={chiff3}
              alt="Sacs à gravats"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px' }} // Ajuster en fonction de la hauteur désirée
            />
          </div>
      
          {/* Titre et description ensuite */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
          <h2 className="text-3xl font-bold">Chiffons couleurs</h2>
            <p className="text-lg text-gray-700">
            Chiffons de couleur, multi-usages. Réalisés à partir de tricots et tee-shirts. 
            </p>
          </div>
        </div>
      
        {/* Bouton centré (unique pour les deux produits) */}
        <div className="flex justify-center mt-8">
          <ButtonWithHoverIcon path={"/bulker/produtCategories"} />
        </div>
      </div>
      ),
    },
  ];

  return (
    <section id="products" className="fall-in bg-gray-100 w-full mb-20 pt-20">
  <div className="text-center mb-6 fall-in">
      <h1 className="text-3xl mb-4">
        Nos <span className="font-bold">Produits</span>
      </h1>
      {/* Tiré gris épais juste en dessous du titre */}
      <hr className="w-1/4 mx-auto border-t-4 opacity-80 border-blue-900 p-2 mb-4" />
      <p className="text-lg text-gray-700 mx-auto max-w-4xl">
        Découvrez notre gamme complète de produits pour la rénovation, la protection des surfaces, l’évacuation des déchets, et le nettoyage. Cliquez sur les onglets ci-dessous pour en savoir plus.
      </p>
    </div>



      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        {/* Tab Headers */}
        <div className="flex flex-wrap md:flex-nowrap p-2 rounded-t-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-center py-2 px-4 font-medium ${
                activeTab === tab.id ? 'bg-blue-900 opacity-80 text-white' : ' border-b-2 text-gray-600'
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
