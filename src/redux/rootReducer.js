import { combineReducers } from 'redux';
import userMoviesReducer from './userMovies/movies.reducer';

const rootReducer = combineReducers({
    userMovies: userMoviesReducer,
});

export default rootReducer;
