import { useState } from 'react';
import DangerButton from '../../../components/DangerButton';
import DeleteConfirmation from '../../../components/DeleteConfirmation';
import { FiTrash2 } from 'react-icons/fi'; 
import axiosInstance from '../../../config/axiosInstance'; // Assure-toi que le chemin est correct

export default function DeleteCategory({ category }) {
    const [confirmingCategoryDeletion, setConfirmingCategoryDeletion] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    const confirmCategoryDeletion = () => {
        setConfirmingCategoryDeletion(true);
    };

    const closeModal = () => {
        setConfirmingCategoryDeletion(false);
        setError(null); // Réinitialiser l'erreur lorsque la modal se ferme
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        setProcessing(true); // Indiquer que le traitement a commencé
        setError(null); // Réinitialiser les erreurs

        try {
            // Effectuer la requête DELETE pour supprimer la catégorie
            await axiosInstance.delete(`/api/categories/${category.id}`);
            closeModal(); // Fermer la modal après la suppression
            window.location.reload(); 
        } catch (err) {
            setError('Erreur lors de la suppression de la catégorie');
        } finally {
            setProcessing(false); // Indiquer que le traitement est terminé
        }
    };

    return (
        <span className='m-2'>
            <DangerButton onClick={confirmCategoryDeletion} className="ms-3" disabled={processing}>
                <FiTrash2 className="" />
            </DangerButton>
            <DeleteConfirmation 
                processing={processing} 
                confirmingDeletion={confirmingCategoryDeletion} 
                closeModal={closeModal} 
                handleDelete={handleDelete} 
                name="Category"
                error={error} // Passer l'erreur à la modal si nécessaire
            />
        </span>
    );
}
