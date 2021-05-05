import './styles.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import FullscreenCover from '../../components/FullscreenCover';

const NotFoundPage = (props) => {
    const [coverData, setCoverData] = useState({});
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_DB_KEY}&language=en-US&query=star%20wars&page=1&include_adult=false`
        )
            .then((res) => res.json())
            .then((data) => {
                let allMovies = data.results.filter((movie) => movie.backdrop_path !== null);

                let movie = allMovies[Math.floor(Math.random() * allMovies.length)];
                setCoverData(movie);
                setMovies(allMovies);
            });
    }, [setCoverData]);

    useEffect(() => {
        if (movies.length > 0) {
            setInterval(() => {
                setCoverData(movies[Math.floor(Math.random() * movies.length)]);
            }, 50000);
        }
    }, [movies]);

    return (
        <>
            <FullscreenCover data={coverData} noInfo={true} />
            <div className="notFound__info">
                <h2>Pedido estas?</h2>
                <p>
                    Encontrar la página no pudimos. Bondades en la home encontrar, si el link botón
                    debajo clickear.
                </p>
                <Link to="/">
                    <strong>Liteflix</strong> Home
                </Link>
            </div>
        </>
    );
};

export default NotFoundPage;
