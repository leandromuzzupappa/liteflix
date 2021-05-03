const INITIAL_STATE = {
    userMovies: [],
};

const userMoviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                {
                    ...state,
                    userMovies: action.payload,
                },
            ];
        default:
            return state;
    }
};

export default userMoviesReducer;
