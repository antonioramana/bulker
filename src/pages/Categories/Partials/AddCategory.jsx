import React, { useState } from 'react';
import { FiImage } from 'react-icons/fi'; // Importation d'une icône pour l'image
import InputError from '../../../components/InputError';
import InputLabel from '../../../components/InputLabel';
import PrimaryButton from '../../../components/PrimaryButton';
import TextInput from '../../../components/TextInput';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../config/axiosInstance';
import { Link } from 'react-router-dom';

export default function AddCategory() {
    const [data, setData] = useState({
        name: '',
        description: '',
        image: null,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('image', data.image);

        try {
            const response = await axiosInstance.post('/api/categories', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                setRecentlySuccessful(true);
                setTimeout(() => {
                    navigate('/bulker/admin/categories');
                }, 2000);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data.errors || { error: 'Erreur lors de la création de la catégorie' });
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="mt-10 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-cyan-700 text-center mb-6">Ajouter une catégorie</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                    <InputLabel htmlFor="name" value="Nom de la catégorie" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        required
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="description" value="Description de la catégorie" />
                    <TextInput
                        id="description"
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={data.description}
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        required
                        autoComplete="description"
                    />
                    <InputError className="mt-2" message={errors.description} />
                </div>

                <div>
                    <InputLabel htmlFor="image" value="Image de la catégorie" />
                    <div className="flex items-center mt-1">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-indigo-500 rounded-lg shadow-md border border-indigo-500 cursor-pointer hover:bg-indigo-100">
                            <FiImage className="w-8 h-8" />
                            <span className="mt-2 text-base leading-normal">Choisir un fichier</span>
                            <input
                                id="image"
                                type="file"
                                className="hidden"
                                onChange={(e) => setData({ ...data, image: e.target.files[0] })}
                                required
                            />
                        </label>
                    </div>
                    <InputError className="mt-2" message={errors.image} />
                </div>

               {/* Boutons */}
            <div className="flex justify-between items-center gap-4 mt-6">
                {/* Bouton Annuler à gauche */}
                <Link
                    type="button"
                    to='/bulker/admin/categories' // Action pour annuler
                    className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100"
                >
                    Annuler
                </Link>

                {/* Bouton Ajouter à droite */}
                <PrimaryButton disabled={processing}>Ajouter</PrimaryButton>
            </div>

            {recentlySuccessful && <p className="text-sm text-gray-600 mt-4">Enregistré avec succès.</p>}
   
            </form>
        </div>
    );
}
