import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({
    handleClick, id, flipped, type, matchedImages
}) {
    const flippedCardStyle = flipped ? flipped: '';
    const cardView = matchedImages || flipped ? 'card-front-view' : 'card-back-view';
    return(
        <div
        className={`card-container ${flippedCardStyle}`}
        onClick={() => handleClick(id)}
    >
        <div className="card-flipper">
            <img
                className={`card ${cardView}`}
                alt=""
                src={flipped || matchedImages ? `/svg/${type}.svg` : '/svg/default.svg'}
            />
        </div>
    </div>
    ) 
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    matchedImages: PropTypes.bool.isRequired
}

