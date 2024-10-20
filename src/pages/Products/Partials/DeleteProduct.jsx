import { useState } from 'react';
import DangerButton from '../../../components/DangerButton';
import DeleteConfirmation from '../../../components/DeleteConfirmation';
import { FiTrash2 } from 'react-icons/fi'; 
import axiosInstance from '../../../config/axiosInstance'; // Assure-toi que le chemin est correct

export default function DeleteProduct({ product }) {
    const [confirmingProductDeletion, setConfirmingProductDeletion] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    const confirmProductDeletion = () => {
        setConfirmingProductDeletion(true);
    };

    const closeModal = () => {
        setConfirmingProductDeletion(false);
        setError(null); // Réinitialiser l'erreur lorsque la modal se ferme
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        setProcessing(true); // Indiquer que le traitement a commencé
        setError(null); // Réinitialiser les erreurs

        try {
            // Effectuer la requête DELETE pour supprimer le produit
            await axiosInstance.delete(`/api/products/${product.id}`);
            closeModal(); // Fermer la modal après la suppression
            window.location.reload(); 
        } catch (err) {
            setError('Erreur lors de la suppression du produit');
        } finally {
            setProcessing(false); // Indiquer que le traitement est terminé
        }
    };

    return (
        <span className='m-2'>
            <DangerButton onClick={confirmProductDeletion} className="ms-3" disabled={processing}>
                <FiTrash2 className="" />
            </DangerButton>
            <DeleteConfirmation 
                processing={processing} 
                confirmingDeletion={confirmingProductDeletion} 
                closeModal={closeModal} 
                handleDelete={handleDelete} 
                name="Product"
                error={error} // Passer l'erreur à la modal si nécessaire
            />
        </span>
    );
}
