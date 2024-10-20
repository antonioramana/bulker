import React, { useEffect, useState } from 'react';
import { useColumns } from './Hooks/useColumns';
import Authenticated from '../../layouts/authenticatedLayout';
import Datagrid from '../../components/Datagrid'; // Assure-toi que ce chemin est correct
import axiosInstance from '../../config/axiosInstance'; // Importer ton instance Axios
import Loader from '../../components/Loader';

export default function CategoriesIndex() {
    const columns = useColumns();
    const [categories, setcategories] = useState([]); // État pour stocker les utilisateurs
    const [loading, setLoading] = useState(true); // État pour le chargement
    const [error, setError] = useState(null); // État pour les erreurs

    // Utiliser useEffect pour récupérer les utilisateurs lors du montage du composant
    useEffect(() => {
        const fetchcategories = async () => {
            try {
                const response = await axiosInstance.get('/api/categories'); // Assure-toi que l'URL est correcte
                setcategories(response.data); // Mettre à jour l'état avec les utilisateurs reçus
            } catch (err) {
                setError('Erreur lors de la récupération des catégories'); // Gérer l'erreur
            } finally {
                setLoading(false); // Mettre à jour l'état de chargement
            }
        };

        fetchcategories();
    }, []);

    if (error) {
        return <div>{error}</div>; // Afficher une erreur si nécessaire
    }
    useEffect(()=>{
        console.log("ccccc",categories);
    }
,[categories])
    return (
        <Authenticated>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            {loading ? (
                <Loader />
                ):(
                <Datagrid
                    columns={columns}
                    rows={categories} // Passer la liste des utilisateurs à Datagrid
                    canCreate={true}
                    href={'/bulker/admin/categories/create'}
                    filter={true} 
                />)}
            </div>
        </Authenticated>
    );
}
