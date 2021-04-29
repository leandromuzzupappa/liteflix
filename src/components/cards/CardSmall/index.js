import './styles.scss';

import IconPlay from '../../icons/IconPlay';
import IconPlus from '../../icons/IconPlus';
import IconLike from '../../icons/IconLike';

// Components
import LiteflixLogo from '../../LiteflixLogo';

const CardSmall = ({ title, img, releaseDate }) => {
    return (
        <div className="cardSmall">
            <LiteflixLogo classes="cardSmall--item--logo" />

            <button className="cardSmall--item--play">
                <IconPlay classes="cardSmall--play" />
            </button>

            <button className="cardSmall--item--like">
                <IconLike classes="cardSmall--like" />
            </button>

            <button className="cardSmall--item--add">
                <IconPlus classes="cardSmall--add" />
            </button>

            <img
                src={`https://image.tmdb.org/t/p/w500${img}`}
                alt={title}
                className="cardSmall--item--img"
            />

            <div className="cardSmall--data">
                <h4>{title}</h4>
                <p>
                    Lanzamiento: <strong>{releaseDate}</strong>{' '}
                </p>
            </div>
        </div>
    );
};

export default CardSmall;
