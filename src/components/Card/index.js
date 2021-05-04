import './styles.scss';

import IconPlay from '../icons/IconPlay';
import IconPlus from '../icons/IconPlus';
import IconLike from '../icons/IconLike';

// Components
import LiteflixLogo from '../LiteflixLogo';

const Card = ({ title, img, releaseDate, category, isBase64 }) => {
    let imgBasePath = !isBase64 ? 'https://image.tmdb.org/t/p/w500' : '';

    return (
        <div className="cards">
            <LiteflixLogo classes="card--item--logo" />

            <button className="card--item--play">
                <IconPlay classes="card--play" />
            </button>

            <button className="card--item--like">
                <IconLike classes="card--like" />
            </button>

            <button className="card--item--add">
                <IconPlus classes="card--add" />
            </button>

            <img src={imgBasePath + img} alt={title} className="card--item--img" />

            <div className="card--data">
                <h4>{title}</h4>

                {releaseDate && (
                    <p>
                        Lanzamiento: <strong>{releaseDate}</strong>
                    </p>
                )}
                {category && <p>{category.name}</p>}
            </div>
        </div>
    );
};

export default Card;
