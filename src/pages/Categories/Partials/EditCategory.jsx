import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InputLabel from '../../../components/InputLabel';
import TextInput from '../../../components/TextInput';
import PrimaryButton from '../../../components/PrimaryButton';
import InputError from '../../../components/InputError';
import axiosInstance from '../../../config/axiosInstance';
import { Link } from 'react-router-dom';

export default function EditCategory() {
    const { id } = useParams(); // Obtenez l'ID de la catégorie à modifier
    const [data, setData] = useState({
        name: '',
        description: '',
        image: null,
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    // Fonction pour récupérer la catégorie à modifier
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axiosInstance.get(`/api/categories/${id}/edit`);
                setData({
                    name: response.data.name,
                    description: response.data.description,
                    image: response.data.image,
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };

        fetchCategory();
    }, [id]);

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('description', data.description);

            // Si une nouvelle image a été sélectionnée, ajoutez-la au formData
            if (data.image instanceof File) {
                formData.append('image', data.image);
            }

            await axiosInstance.put(`/api/categories/${id}`, formData);

            navigate('/bulker/admin/categories'); // Rediriger vers la liste des catégories après la mise à jour
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data.errors || { error: 'Erreur lors de la mise à jour de la catégorie' });
            }
        } finally {
            setProcessing(false);
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleFileChange = (e) => {
        setData({ ...data, image: e.target.files[0] });
    };

    if (loading) return <p>Chargement...</p>;

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-6 max-w-lg mx-auto">
                        <h1 className="text-2xl font-semibold text-cyan-700 text-center mb-6">Modifier une catégorie</h1>

            {/* Champ Nom */}
            <div>
                <InputLabel htmlFor="name" value="Nom" />
                <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={handleChange}
                    required
                />
                <InputError className="mt-2" message={errors.name} />
            </div>

            {/* Champ Description */}
            <div>
                <InputLabel htmlFor="description" value="Description" />
                <TextInput
                    id="description"
                    className="mt-1 block w-full"
                    value={data.description}
                    onChange={handleChange}
                    required
                />
                <InputError className="mt-2" message={errors.description} />
            </div>

            {/* Champ Image */}
            <div>
                <InputLabel htmlFor="image" value="Changer l'image" />
                <input
                    id="image"
                    type="file"
                    onChange={handleFileChange}
                    className="mt-1 block w-full"
                />
                <InputError className="mt-2" message={errors.image} />
            </div>

            {/* Boutons */}
            <div className="flex justify-between items-center gap-4 mt-6">
                <Link
                    to='/bulker/admin/categories' // Action pour annuler
                    className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100"
                >
                    Annuler
                </Link>

                <PrimaryButton disabled={processing}>Mettre à jour</PrimaryButton>
            </div>
        </form>
    );
}
