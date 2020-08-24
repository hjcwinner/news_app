import React from 'react';

const Poster = ({poster, alt}) => {
    return (
        <img src={poster} alt={alt} />
    );
};

export default Poster;