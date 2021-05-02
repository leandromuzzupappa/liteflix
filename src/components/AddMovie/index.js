import './styles.scss';
import iconAdd from '../../assets/images/iconAdd.svg';

// Components
import ModalFullscreen from '../modals/ModalFullscreen';

const AddMovie = (props) => {
    const handleAddMovie = () => {
        alert(1);
    };

    return (
        <>
            <button id="addMovie" onClick={handleAddMovie}>
                <img src={iconAdd} alt="add" />
            </button>

            <ModalFullscreen />
        </>
    );
};

export default AddMovie;
