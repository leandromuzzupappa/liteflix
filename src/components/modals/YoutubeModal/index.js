import './styles.scss';

import { useState, useEffect } from 'react';

const YoutubeModal = ({ onClose, movieId }) => {
    const [video, setVideo] = useState(false);

    useEffect(() => {
        console.log(222);
        setVideo(false);

        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_DB_KEY}&language=en-US`
        )
            .then((res) => res.json())
            .then((data) => {
                let videosArr = data.results;

                if (videosArr && videosArr.length > 0) {
                    let _video = videosArr[Math.floor(Math.random() * videosArr.length)].key;

                    setTimeout(() => {
                        setVideo(_video);
                    }, 2500);
                }
            });
    }, []);

    return (
        <>
            <div className="YoutubeModal">
                <button className="YoutubeModal__close" onClick={onClose} title="cerrar"></button>
                <div className="YoutubeModal__container">
                    <iframe
                        src={`https://www.youtube.com/embed/${video}?autoplay=1&modestbranding=1&autohide=1&rel=0&controls=1&loop=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default YoutubeModal;
