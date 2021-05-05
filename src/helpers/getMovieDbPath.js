export const getMovieDbPath = (str) => {
    return `https://api.themoviedb.org/3/movie/${str}?api_key=${process.env.REACT_APP_DB_KEY}`;
};
