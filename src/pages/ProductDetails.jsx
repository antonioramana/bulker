import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';
import ButtonWithHoverIconBack from '../components/ButtonWithIconBack';
import Loader from '../components/Loader';
import { API_URL } from '../config/api';

const ProductDetails = () => {
  const { productId } = useParams();  // Récupérer l'ID du produit
  const [product, setProduct] = useState(null);  // Initialiser l'état du produit à null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du produit');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
      } finally {
        setLoading(false); // Assurez-vous que le loading soit toujours arrêté
      }
    };

    fetchProduct();
  }, [productId]);  // Ajout de productId comme dépendance pour éviter les avertissements

  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className='p-10'>
          {product && (
            <>
              <h1 className="text-3xl font-bold mb-6 text-blue-900">{product.name}</h1>
              <h6 className="text-xl font-bold mb-6">
                <span className='text-blue-900'>
                  <Link to="/">Accueil | </Link>
                  <Link to="/bulker/produtCategories">Catégorie</Link> |
                  <Link to={`/bulker/CategoryProducts/${product.category.id}`}>{product.category.name}</Link> |
                </span>
                {product.name}
              </h6>
            </>
          )}
        </div>
        {loading ? (
          <Loader />
        ) : product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-white rounded-lg shadow-lg">
          <div>
            <img
              src={product.image} // Utilisation de l'URL correcte
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '500px' }} 
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-950">Détails du produit</h2>
            <p className="mb-2 text-lg"><strong>Description :</strong> {product.description}</p>
            {/* <p className="mb-2 text-lg"><strong>Prix :</strong> {product.price} €</p> */}
            <p className="mb-2 text-lg"><strong>Catégorie :</strong> {product.category.name}</p>
            
            <Link to="/bulker#contact" className=" text-center bg-blue-900 opacity-90 text-white py-2 px-6 rounded mt-6 hover:bg-blue-700 transition duration-300 ease-in-out shadow hover:shadow-lg">
              Intéressé
            </Link>
          </div>
        </div>        
        ) : (
          <p className="text-center">Produit introuvable.</p>
        )}
      </div>

      <div className="flex justify-center m-8">
        {product && (
          <ButtonWithHoverIconBack path={`/bulker/categoryProducts/${product.category.id}`} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
