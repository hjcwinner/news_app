import React from 'react';
import Poster from './Poster';

const Movie = ({title, poster}) => {
    return (
        <div>
            <h1>{title}</h1>
            <Poster poster={poster} alt={title} /> 
        </div>
    );
};

export default Movie;