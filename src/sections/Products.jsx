import React, { useState } from 'react';
import ButtonWithHoverIcon from '../components/ButtonWithIcon';

const Products = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(categories[0]?.id || null);
  console.log(categories);

  return (
    <section id="products" className="fall-in bg-gray-100 w-full mb-20  py-20">
      <div className="text-center mb-6 fall-in">
        <h1 className="text-3xl mb-4">
          Nos <span className="font-bold">Produits</span>
        </h1>
        <hr className="w-1/4 mx-auto border-t-4 opacity-80 border-blue-900 p-2 mb-4" />
        <p className="text-lg text-gray-700 mx-auto max-w-4xl">
          Découvrez notre gamme complète de produits pour vos besoins en rénovation, protection, et plus encore.
        </p>
      </div>

     {/* Onglets des catégories */}
<div className="flex flex-wrap justify-center space-x-4 mb-8">
  {categories.map((category) => (
    <button
      key={category.id}
      onClick={() => setActiveTab(category.id)}
      className={`py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out ${
        activeTab === category.id ? 'bg-blue-900 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } ${categories.length > 3 ? 'm-2' : 'm-1'}`} // Adjust margin based on the number of categories
    >
      {category.name}
    </button>
  ))}
</div>


      {/* Affichage des produits selon la catégorie sélectionnée */}
      <div className="space-y-12">
        {categories
          .filter((category) => category.id === activeTab)
          .map((category) => (
            <div key={category.id} className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-950">{category.name}</h2>
              {category.products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-6 group hover:bg-gray-50 p-4 rounded-lg transition duration-300 ease-in-out`}
                >
                  {/* Image du produit */}
                  <div className="flex-1 flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                  {/* Détails du produit */}
                  <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
                    <h3 className="text-xl font-bold text-blue-950">{product.name}</h3>
                    <p className="text-lg text-gray-700">{product.description}</p>
                    {/* <p className="text-lg font-semibold text-blue-600">{`Prix : ${product.price} €`}</p> */}
                  </div>
                </div>
              ))}
              {/* Bouton pour voir plus de produits */}
              <div className="flex justify-center mt-8">
                <ButtonWithHoverIcon path="/bulker/produtCategories" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
