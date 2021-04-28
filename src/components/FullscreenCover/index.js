import './styles.scss';

// Components
import IconPlus from '../icons/IconPlus';
import IconPlay from '../icons/IconPlay';

const FullscreenCover = (props) => {
    let movie = props.data;

    return (
        <section className="fullscreenCover">
            <h3 className="fullscreenCover__subtitle">
                Original de <span>Liteflix</span>
            </h3>
            <h1 className="fullscreenCover__title">{movie.title}</h1>

            <div className="fullscreenCover__actions">
                <button class="fullscreenCover__actions--play">
                    <IconPlay />
                    <span>Reproducir</span>
                </button>
                <button class="fullscreenCover__actions--addToList">
                    <IconPlus />
                    <span>Mi lista</span>
                </button>
            </div>

            <div className="fullscreenCover__description">
                <h4>Descripción</h4>
                <p>{movie.overview}</p>
            </div>

            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className="fullscreenCover__image"
            />
        </section>
    );
};

export default FullscreenCover;
