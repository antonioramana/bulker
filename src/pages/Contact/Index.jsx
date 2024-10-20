import React, { useEffect, useState } from 'react';
import { useColumns } from './Hooks/useColumns';
import Authenticated from '../../layouts/authenticatedLayout';
import Datagrid from '../../components/Datagrid'; // Assure-toi que ce chemin est correct
import axiosInstance from '../../config/axiosInstance'; // Importer ton instance Axios
import Loader from '../../components/Loader';

export default function ContactsIndex() {
    const [contacts, setcontacts] = useState([]); // État pour stocker les utilisateurs
    const [loading, setLoading] = useState(true); // État pour le chargement
    const [error, setError] = useState(null); // État pour les erreurs
    const fetchcontacts = async () => {
        try {
            const response = await axiosInstance.get('/api/contacts'); // Assure-toi que l'URL est correcte
            setcontacts(response.data); // Mettre à jour l'état avec les utilisateurs reçus
        } catch (err) {
            setError('Erreur lors de la récupération des contacts'); // Gérer l'erreur
        } finally {
            setLoading(false); // Mettre à jour l'état de chargement
        }
    };
    
    const columns = useColumns(fetchcontacts);
    // Utiliser useEffect pour récupérer les utilisateurs lors du montage du composant
    useEffect(() => {

        fetchcontacts();
    }, []);
    if (error) {
        return <div>{error}</div>; // Afficher une erreur si nécessaire
    }

    return (
        <Authenticated>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            {loading ? (
                    <Loader />
                ):(
                <Datagrid
                    columns={columns}
                    rows={contacts} // Passer la liste des utilisateurs à Datagrid
                    canCreate={false}
                    href={'/bulker/admin/user/create'}
                    filter={true} 
                />
            )}

            </div>      
              </Authenticated>
    );
}
