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
import LinesEllipsis from 'react-lines-ellipsis'
import './movie.css'

const Movie = ({ title, poster, genres, synopsis }) => {
    return (
        <div className="Movie">
           <div className="Movie__Column">
                <Poster poster={poster} alt={title} />
           </div>
           <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => 
                        <h1 key={index}>{genre}</h1>
                    )}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />

                </div>
           </div>
        </div>
    );
};

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
};

export default Movie;