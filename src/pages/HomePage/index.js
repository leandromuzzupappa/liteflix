import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Components
import FullscreenCover from '../../components/FullscreenCover';
import ComingSoon from '../../components/ComingSoon';
import PopularMovies from '../../components/PopularMovies';

const HomePage = (props) => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [coverData, setCoverData] = useState({});
    const [comingSoon, setComingSoon] = useState([]);
    const [popular, setPopular] = useState([]);
    const [userMovies, setUserMovies] = useState([]);
    const moviesData = useSelector((state) => state.userMovies);

    useEffect(() => {
        const getMovieDbPath = (str) =>
            `https://api.themoviedb.org/3/movie/${str}?api_key=${process.env.REACT_APP_DB_KEY}`;

        Promise.all([
            fetch(getMovieDbPath('now_playing')).then((res) => res.json()),
            fetch(getMovieDbPath('upcoming')).then((res) => res.json()),
            fetch(getMovieDbPath('popular')).then((res) => res.json()),
        ]).then(([_nowplaying, _comingsoon, _popular]) => {
            let nowPlayinArr = _nowplaying.results;
            setNowPlaying(nowPlayinArr);
            setCoverData(nowPlayinArr[1]); // No me gusta la portada del mortak kombat, perdon!

            let comingSoonArr = _comingsoon.results;
            setComingSoon(comingSoonArr.slice(0, 4));

            let popularArr = _popular.results;
            setPopular(popularArr.slice(4, 8));
        });
    }, [setCoverData, setComingSoon, setNowPlaying]);

    /* useEffect(() => {
        if (nowPlaying.length > 0) {
            setInterval(() => {
                setCoverData(nowPlaying[Math.floor(Math.random() * nowPlaying.length)]);
            }, 50000);
        }
    }, [nowPlaying]); */

    useEffect(() => {
        let lsUserMovies = localStorage.getItem('userMovies')
            ? JSON.parse(localStorage.getItem('userMovies'))
            : [];

        let userMoviesParsed = lsUserMovies.map((movie) => {
            return JSON.parse(movie);
        });

        setUserMovies(userMoviesParsed);
    }, [moviesData]);

    return (
        <>
            <FullscreenCover data={coverData} />
            <ComingSoon data={comingSoon} />
            <PopularMovies data={popular} />
            {userMovies.length > 0 && (
                <>
                    <ul>
                        {userMovies.map((movie, i) => (
                            <li key={i}>
                                <img src={movie.image} alt="dsadsadsa" width="100" />
                                {movie.name}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default HomePage;
