import React from 'react'
import Modal from './Modal'
import SecondaryButton from './SecondaryButton'
import DangerButton from './DangerButton'

function DeleteConfirmation({processing, confirmingDeletion,closeModal, name,handleDelete}) {
  return (
    <div>
        <Modal show={confirmingDeletion} onClose={closeModal}>
                <form onSubmit={handleDelete} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                       Voulez-vous supprimer {name}?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Une fois supprimée, Toutes ses ressources et données seront définitivement supprimées.
                    </p>



                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Annuler</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Supprimer
                        </DangerButton>
                    </div>
                </form>
            </Modal>
    </div>
  )
}

export default DeleteConfirmation
