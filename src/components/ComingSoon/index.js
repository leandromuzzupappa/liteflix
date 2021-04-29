import './styles.scss';
import IconPlay from '../icons/IconPlay';

// Components
import LiteflixLogo from '../LiteflixLogo';

const ComingSoonItem = ({ title, img, releaseDate }) => {
    return (
        <div className="comingSoon__movies--item">
            <LiteflixLogo classes="comingSoon__movies--item--logo" />

            {/* <button>
                <IconPlay classes="comingSoon__movies--play" />
            </button> */}

            <img
                src={`https://image.tmdb.org/t/p/w500${img}`}
                alt={title}
                className="comingSoon__movies--item--img"
            />

            <div className="comingSoon__movies--data">
                <h4>{title}</h4>
                <p>
                    Lanzamiento: <strong>{releaseDate}</strong>{' '}
                </p>
            </div>
        </div>
    );
};

const ComingSoon = (props) => {
    let movies = props.data;

    console.log(movies);

    return (
        <section className="comingSoon">
            <h2>Próximamente</h2>

            <div className="comingSoon__movies">
                {movies.map((movie, i) => (
                    <ComingSoonItem
                        key={i}
                        title={movie.title}
                        img={movie.backdrop_path}
                        releaseDate={movie.release_date}
                    />
                ))}
            </div>
        </section>
    );
};

export default ComingSoon;
