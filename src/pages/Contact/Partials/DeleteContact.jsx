import { useState } from 'react';
import DangerButton from '../../../components/DangerButton';
import DeleteConfirmation from '../../../components/DeleteConfirmation';
import { FiTrash2 } from 'react-icons/fi'; 
import axiosInstance from '../../../config/axiosInstance'; // Assure-toi que le chemin est correct

export default function DeleteContact({ contact,fetchcontacts: onRefresh }) {
    const [confirmingContactDeletion, setConfirmingContactDeletion] = useState(false);   
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    const confirmContactDeletion = () => {
        setConfirmingContactDeletion(true);
    };

    const closeModal = () => {
        setConfirmingContactDeletion(false);
        setError(null); // Réinitialiser l'erreur lorsque la modal se ferme
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        setProcessing(true); // Indiquer que le traitement a commencé
        setError(null); // Réinitialiser les erreurs

        try {
            // Effectuer la requête DELETE pour supprimer le contact
            await axiosInstance.delete(`/api/contacts/${contact.id}`);
            closeModal(); // Fermer la modal après la suppression
            window.location.reload(); 
            onRefresh();
        } catch (err) {
            setError('Erreur lors de la suppression du contact');
        } finally {
            setProcessing(false); // Indiquer que le traitement est terminé
        }
    };

    return (
        <span className='m-2'>
            <DangerButton onClick={confirmContactDeletion} className="ms-3" disabled={processing}>
                <FiTrash2 className="" />
            </DangerButton>
            <DeleteConfirmation 
                processing={processing} 
                confirmingDeletion={confirmingContactDeletion} 
                closeModal={closeModal} 
                handleDelete={handleDelete} 
                name="Contact"
                error={error} // Passer l'erreur à la modal si nécessaire
            />
        </span>
    );
}
