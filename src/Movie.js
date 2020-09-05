// import React from 'react';
// import PropTypes from 'prop-types';
// import Poster from './Poster';

// const Movie = ({title, poster}) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <Poster poster={poster} alt={title} /> 
//         </div>
//     );
// };

// Movie.protoT





// export default Movie;

import React from 'react';
import PropTypes from 'prop-types';
import Poster from './Poster';

const Movie = ({ title, poster }) => {
    return (
        <div>
            <h1>{title}</h1>
            <Poster poster={poster} alt={title} /> 
        </div>
    );
};

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;