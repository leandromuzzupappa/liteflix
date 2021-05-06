import './styles.scss';

import { useState, useEffect } from 'react';

// Get from local storage all user movies and
// returns an array of objects
function getUserMovies() {
    let lsUserMovies = localStorage.getItem('userMovies')
        ? JSON.parse(localStorage.getItem('userMovies'))
        : [];

    let userMoviesParsed = [];
    if (lsUserMovies.length > 0) {
        userMoviesParsed = lsUserMovies.map((movie) => {
            return JSON.parse(movie);
        });
    }

    return userMoviesParsed;
}

const UserMoviesList = (props) => {
    const [userMovies, setUserMovies] = useState(getUserMovies());

    useEffect(() => {
        console.log(2);
        setUserMovies(userMovies);
    }, [userMovies]);

    const handleEdiMovie = (movieId) => {
        // Terminar otro dia
        alert('Pendiente por terminar', movieId);
    };

    const handleDeleteMovie = (movieId) => {
        let userMovies = getUserMovies();
        let userMoviesUpdated = [];

        userMovies.map((movie) => {
            if (movie.id !== movieId) {
                userMoviesUpdated.push(JSON.stringify(movie));
            }
        });

        localStorage.setItem('userMovies', JSON.stringify(userMoviesUpdated));

        setUserMovies(getUserMovies());
    };

    return (
        <>
            <div className="userMoviesList">
                <h1>Mi lista</h1>

                <div className="userMoviesList__content">
                    {userMovies.map((movie, i) => (
                        <div className="userMoviesList__items" key={i}>
                            <img src={movie.backdrop_path} alt={movie.title} />
                            <p>{movie.title}</p>
                            <p>{movie.category.name}</p>
                            <div className="userMoviesList__items--actions">
                                <button id="movieEdit" onClick={() => handleEdiMovie(movie.id)}>
                                    Editar
                                </button>
                                <button
                                    id="movieDelete"
                                    onClick={() => handleDeleteMovie(movie.id)}
                                >
                                    Borrar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserMoviesList;
