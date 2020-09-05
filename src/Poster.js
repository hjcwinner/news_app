// import React from 'react';

// const Poster = ({poster, alt}) => {
//     return (
//         <img src={poster} alt={alt} />
//     );
// };

// export default Poster;

import React from 'react';
import PropTypes from 'prop-types';
import './movie.css'

const Poster = ({poster, alt}) => {
    return (
       <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={alt} className="Movie__Poster"/>
    );
};

Poster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string
};

export default Poster;