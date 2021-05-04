import './styles.scss';
import iconAdd from '../../assets/images/iconAdd.svg';

import { useState } from 'react';

// Components
import ModalFullscreen from '../modals/ModalFullscreen';

const AddMovie = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleAddMovie = () => setShowModal(!showModal);

    return (
        <>
            <button id="addMovie" onClick={handleAddMovie}>
                <img src={iconAdd} alt="add" />
            </button>

            {showModal && <ModalFullscreen onClose={handleAddMovie} />}
        </>
    );
};

export default AddMovie;
