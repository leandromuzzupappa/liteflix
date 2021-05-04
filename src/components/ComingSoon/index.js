import './styles.scss';

// Components
import Card from '../Card';

const ComingSoon = (props) => {
    let movies = props.data;

    return (
        <section className={props.sectionClass}>
            <h2>{props.sectionTitle}</h2>

            <div className="comingSoon__movies">
                {movies.map((movie, i) => (
                    <Card
                        key={i}
                        title={movie.title}
                        img={movie.backdrop_path}
                        releaseDate={movie.release_date}
                        category={movie.category}
                        isBase64={props.sectionClass === 'myMovies' ? true : false}
                    />
                ))}
            </div>
        </section>
    );
};

export default ComingSoon;
