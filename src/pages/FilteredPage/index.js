import './styles.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilteredPage = (props) => {
    const { content } = useParams();

    //`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_DB_KEY}&page=${currentPage}`

    return (
        <>
            <h1>{content}</h1>
        </>
    );
};

export default FilteredPage;
