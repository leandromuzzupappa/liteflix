import { useState, useEffect } from 'react';

// Components
import FullscreenCover from '../../components/FullscreenCover';

const HomePage = (props) => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [coverData, setCoverData] = useState({});

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_DB_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                let movies = data.results;
                let movie = movies[Math.floor(Math.random() * movies.length)];

                setNowPlaying(movies);
                setCoverData(movie);
            });
    }, [setCoverData]);

    useEffect(() => {
        if (nowPlaying.length > 0) {
            setInterval(() => {
                setCoverData(nowPlaying[Math.floor(Math.random() * nowPlaying.length)]);
            }, 30000);
        }
    }, [nowPlaying]);

    return (
        <>
            <FullscreenCover data={coverData} />
        </>
    );
};

export default HomePage;
