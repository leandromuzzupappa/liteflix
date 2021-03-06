import './styles.scss';

// Components
import Card from '../Card';

const PopularMovies = (props) => {
    let movies = props.data;
    return (
        <section className="popular">
            <h2>Populares de liteflix</h2>

            <div className="popular__movies">
                {movies.map((movie, i) => (
                    <Card
                        key={i}
                        id={movie.id}
                        title={movie.title}
                        img={movie.poster_path}
                        releaseDate={movie.release_date}
                    />
                ))}
            </div>
        </section>
    );
};

export default PopularMovies;
