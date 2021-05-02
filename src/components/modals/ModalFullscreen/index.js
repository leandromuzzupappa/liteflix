import './styles.scss';

// Components
import { useState, useEffect } from 'react';
import DragAndDrop from '../../DragAndDrop';

const ModalFullscreen = (props) => {
    const [errors, setErrors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [customSelectOpen, setCustomSelectOpen] = useState(false);
    const [optionSelected, setOptionSelected] = useState({});
    const [files, setFiles] = useState({});

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_DB_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres);
            });
    }, [setGenres]);

    const handleMovieName = (e) => setMovieName(e.target.value);
    const handleCustomSelect = () => setCustomSelectOpen(!customSelectOpen);
    const handleSelectedOption = (e) => {
        let optionData = e.target.dataset;

        if (optionData.id === '000') {
            setOptionSelected({});
            return;
        }

        setOptionSelected({
            id: Number(optionData.id),
            name: optionData.name,
        });
    };
    const handleFilesUploaded = (data) => setFiles(data);

    const handleFromSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        /* console.log(e);
        console.log(movieName);
        console.log(optionSelected);
        console.log(files); */

        if (movieName.length < 2) {
            setErrors([...['El nombre de la película no puede estar vacío']]);
            return;
        }

        if (Object.keys(optionSelected).length === 0) {
            setErrors([...['Tenes que seleccionar una categoría']]);
            return;
        }

        if (Object.keys(optionSelected).length === 0) {
            setErrors([...['Tenes que seleccionar una categoría']]);
            return;
        }

        // Creo un objeto movie y lo convierto a json
        let userMovie = {
            id: 'userMovie' + Date.now(),
            name: movieName,
            category: optionSelected,
            //preview: files[0].preview,
        };
        let userMoviesJson = JSON.stringify(userMovie);

        // Traigo las pelis de la db y pusheo la nueva
        let userMovies = localStorage.getItem('userMovies')
            ? localStorage.getItem('userMovies')
            : [];

        if (userMovies) {
            userMovies = JSON.parse(userMovies);

            userMovies.forEach((movie) => {
                movie = JSON.parse(movie);

                if (movie.name === userMovie.name) {
                    setErrors([...['Ya agregaste esta película!']]);
                    return;
                }
            });
        }

        userMovies.push(userMoviesJson);

        let updatedMovies = JSON.stringify(userMovies);

        // Guardo el array nuevo
        localStorage.setItem('userMovies', updatedMovies);

        setFiles({});
        setOptionSelected({});
        setMovieName('');
    };

    return (
        <>
            <div className="modalFullscreen">
                {errors.length > 0 && (
                    <div className="modalFullscreen__errors">
                        <ul>
                            {errors.map((err, i) => (
                                <li key={i}>{err}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <DragAndDrop lennyTest={handleFilesUploaded} />

                <form id="modalFullscreen__container--form" onSubmit={(e) => handleFromSubmit(e)}>
                    <div className="formRow">
                        <label htmlFor="movieTitle">Nombre de la película</label>
                        <input
                            type="text"
                            name="movieTitle"
                            id="movieTitle"
                            placeholder="Ingresá el nombre de la película"
                            onChange={(e) => {
                                handleMovieName(e);
                            }}
                            value={movieName}
                        />
                    </div>
                    <div className="formRow">
                        <label htmlFor="movieCategory">Categoría</label>
                        <div id="movieCategory" className="customSelect__wrapper">
                            <div
                                className={`customSelect ${customSelectOpen && 'open'}`}
                                onClick={handleCustomSelect}
                            >
                                <div className="customSelect__trigger">
                                    <span name="movieCategory">
                                        {Object.entries(optionSelected).length > 0
                                            ? optionSelected.name
                                            : 'Seleccioná una categoria'}
                                    </span>
                                    <div className="customSelect__trigger--arrow"></div>
                                </div>

                                <div className="customSelect__options">
                                    <div className="customSelect__options--wrapper">
                                        <span
                                            className="customOption"
                                            data-id="000"
                                            data-name="Seleccionar"
                                            onClick={(e) => handleSelectedOption(e)}
                                        >
                                            Seleccionar
                                        </span>
                                        {genres.map((genre) => (
                                            <span
                                                key={genre.id}
                                                className={`customOption ${
                                                    Object.entries(optionSelected).length > 0 &&
                                                    optionSelected.id === genre.id
                                                        ? 'selected'
                                                        : ''
                                                }`}
                                                data-id={genre.id}
                                                data-name={genre.name}
                                                onClick={(e) => handleSelectedOption(e)}
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formRow">
                        <button type="submit">Subir película</button>
                    </div>
                </form>
            </div>
            <div className="modalFullscreen__overlay"></div>
        </>
    );
};

export default ModalFullscreen;