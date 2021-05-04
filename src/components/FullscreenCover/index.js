import './styles.scss';

import { useState, useEffect } from 'react';

// Hoc
import { esDesktop } from '../../hoc/windowSizes';

// Components
import IconPlus from '../icons/IconPlus';
import IconPlay from '../icons/IconPlay';
import ModalFullscreen from '../modals/ModalFullscreen';

const FullscreenCover = (props) => {
    let movie = props.data;
    const [showModal, setShowModal] = useState(false);
    const [video, setVideo] = useState(false);

    useEffect(() => {
        setVideo(false);

        if (esDesktop()) {
            fetch(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_DB_KEY}&language=en-US`
            )
                .then((res) => res.json())
                .then((data) => {
                    let videosArr = data.results;

                    if (videosArr) {
                        let _video = videosArr[Math.floor(Math.random() * videosArr.length)].key;
                        setTimeout(() => {
                            setVideo(_video);
                        }, 2500);
                    }
                });
        }
    }, [movie.id]);

    const handleAddMovie = () => setShowModal(!showModal);

    return (
        <section className="fullscreenCover">
            <h3 className="fullscreenCover__subtitle">
                Original de <span>Liteflix</span>
            </h3>
            <h1 className="fullscreenCover__title">{movie.title}</h1>

            <div className="fullscreenCover__actions">
                <button className="fullscreenCover__actions--play">
                    <IconPlay />
                    <span>Reproducir</span>
                </button>
                <button className="fullscreenCover__actions--addToList" onClick={handleAddMovie}>
                    <IconPlus />
                    <span>Mi lista</span>
                </button>
            </div>

            <div className="fullscreenCover__description">
                <h4>Descripción</h4>
                <p>{movie.overview}</p>
            </div>

            {video ? (
                <>
                    <iframe
                        className="fullscreenCover__iframe"
                        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&modestbranding=1&showinfo=0&autohide=1&rel=0&controls=0&loop=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </>
            ) : (
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                    className="fullscreenCover__image"
                />
            )}
            {showModal && <ModalFullscreen onClose={handleAddMovie} />}
        </section>
    );
};

export default FullscreenCover;
