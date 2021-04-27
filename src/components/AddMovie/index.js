import './styles.scss';
import iconAdd from '../../assets/images/iconAdd.svg';

const AddMovie = (props) => {
    const handleAddMovie = () => {
        alert(1);
    };

    return (
        <button id="addMovie" onClick={handleAddMovie}>
            <img src={iconAdd} alt="add" />
        </button>
    );
};

export default AddMovie;
