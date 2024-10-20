import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../config/axiosInstance';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category_id: '',
    price: '',
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Récupérer les catégories
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };

    // Récupérer le produit et assigner la catégorie
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/api/products/${id}`);
        setFormData({
          ...response.data,
          category_id: response.data.category_id || '', // Conserver la catégorie actuelle
        });
      } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
      }
    };

    fetchCategories();
    fetchProduct();
  }, [id]);

  // Gestion du changement de champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Gestion du changement de fichier
  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) { // Vérifie que la valeur n'est pas null
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      await axiosInstance.put(`/api/products/${id}`, formDataToSend);
      setSuccessMessage('Produit mis à jour avec succès !');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/bulker/admin/products');
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du produit:', error);
      setSuccessMessage('Erreur lors de la mise à jour du produit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-950">Modifier le produit</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nom du produit</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
            placeholder="Entrez le nom du produit"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out resize-none"
            placeholder="Décrivez le produit"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category_id" className="block text-lg font-medium text-gray-700">Catégorie</label>
          <select
            id="category_id"
            name="category_id"
            value={formData?.category_id || ''} // Sélectionne la catégorie ou un ID vide
            onChange={handleChange}
            required
            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
          >
            <option value="" disabled>Sélectionnez une catégorie</option>
            {categories.length > 0 && categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-lg font-medium text-gray-700">Prix</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
            placeholder="Prix du produit"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">Image du produit</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="w-auto bg-gray-300 text-black  py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
            onClick={() => navigate('/bulker/admin/products')}
          >
            Retour
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`w-auto bg-blue-950 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Mise à jour...' : 'Mettre à jour'}
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default EditProduct;
