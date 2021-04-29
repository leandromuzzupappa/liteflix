import { useState, useEffect } from 'react';

// Components
import FullscreenCover from '../../components/FullscreenCover';
import ComingSoon from '../../components/ComingSoon';

const HomePage = (props) => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [coverData, setCoverData] = useState({});
    const [comingSoon, setComingSoon] = useState([]);
    const [popular, setPopular] = useState([]);

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
            setComingSoon(popularArr.slice(0, 4));
        });
    }, [setCoverData, setComingSoon, setNowPlaying]);

    useEffect(() => {
        if (nowPlaying.length > 0) {
            setInterval(() => {
                setCoverData(nowPlaying[Math.floor(Math.random() * nowPlaying.length)]);
            }, 50000);
        }
    }, [nowPlaying]);

    return (
        <>
            <FullscreenCover data={coverData} />

            <ComingSoon data={comingSoon} />

            <h1>lenny</h1>
        </>
    );
};

export default HomePage;
