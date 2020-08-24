// import React from 'react';

// const Poster = ({poster, alt}) => {
//     return (
//         <img src={poster} alt={alt} />
//     );
// };

// export default Poster;

import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({poster, alt}) => {
    return (
       <img src={poster} alt={alt} />
    );
};

Poster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string
};

export default Poster;