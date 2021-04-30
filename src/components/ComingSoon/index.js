import './styles.scss';

// Components
import Card from '../Card';

const ComingSoon = (props) => {
    let movies = props.data;

    return (
        <section className="comingSoon">
            <h2>Próximamente</h2>

            <div className="comingSoon__movies">
                {movies.map((movie, i) => (
                    <Card
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
