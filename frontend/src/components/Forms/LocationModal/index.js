import React, { useState} from 'react';
import { Modal } from '../../../context/Modal';
import AddLocationForm from './AddLocationForm';


const AddLocationModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='list-your-spot'>List your Spot</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddLocationForm/>
                </Modal>
            )}
        </>
    )
}

export default AddLocationModal;