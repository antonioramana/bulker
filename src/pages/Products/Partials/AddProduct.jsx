import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Utiliser useNavigate au lieu de useHistory
import axiosInstance from '../../../config/axiosInstance';

const AddProduct = () => {
  const navigate = useNavigate(); // Initialiser useNavigate
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category_id: '',
    price: '',
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès
  const [loading, setLoading] = useState(false); // État pour le chargement

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    setLoading(true); // Démarrer le chargement

    try {
      await axiosInstance.post('/api/products', formDataToSend);
      setSuccessMessage('Produit créé avec succès !'); // Définir le message de succès
      setTimeout(() => {
        navigate('/bulker/admin/products'); // Redirection après un délai
      }, 2000); // Délai de 2 secondes pour permettre à l'utilisateur de voir le message
    } catch (error) {
      console.error('Erreur lors de la création du produit:', error);
      setSuccessMessage('Erreur lors de la création du produit.'); // Message d'erreur
    } finally {
      setLoading(false); // Arrêter le chargement
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-950">Ajouter un produit</h2>
    
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom du produit</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2 h-32 resize-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
          <select
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.length > 0 && categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Prix</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={loading} // Désactiver le bouton pendant le chargement
          className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-950'} text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200`}
        >
          {loading ? 'Chargement...' : 'Créer le produit'}
        </button>
      </form>
      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default AddProduct;
