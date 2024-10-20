import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi'; 
import DeleteConfirmation from '../../../components/DeleteConfirmation'; // Assurez-vous que ce chemin est correct
import DangerButton from '../../../components/DangerButton';
import axiosInstance from '../../../config/axiosInstance';

export default function DeleteUser({ user }) {
    const [confirming, setConfirming] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    const confirmDeletion = () => {
        setConfirming(true);
    };

    const closeModal = () => {
        setConfirming(false);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        setProcessing(true); // Indiquer que le traitement a commencé
        setError(null); // Réinitialiser les erreurs

        try {
            // Effectuer la requête DELETE pour supprimer l'utilisateur
            await axiosInstance.delete(`/api/users/${user.id}`);
            
            closeModal(); // Fermer la modal après la suppression
            window.location.reload(); 
        } catch (err) {
            setError('Erreur lors de la suppression de l\'utilisateur');
        } finally {
            setProcessing(false); // Indiquer que le traitement est terminé
        }
    };

    return (
        <span className='m-2'>
            <DangerButton onClick={confirmDeletion}>
                <FiTrash2 className="" />
            </DangerButton>
            <DeleteConfirmation 
                processing={processing} 
                confirmingDeletion={confirming} 
                closeModal={closeModal} 
                handleDelete={handleDelete} 
                name="User"
                error={error} // Passer l'erreur à la modal si nécessaire
            />
        </span>
    );
}
