import './styles.scss';

// Components
import CardSmall from '../cards/CardSmall';

const ComingSoon = (props) => {
    let movies = props.data;

    console.log(movies);

    return (
        <section className="comingSoon">
            <h2>Próximamente</h2>

            <div className="comingSoon__movies">
                {movies.map((movie, i) => (
                    <CardSmall
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
