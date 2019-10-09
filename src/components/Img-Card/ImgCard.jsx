import React from 'react';
import './ImgCard.css';
import PropTypes from 'prop-types';

function ImgCard(props) {
    return (
        <figure>

            <img src={props.URL} />

            <figcaption>

                <h4>{props.heading}</h4>
                <p>{props.text}</p>
                <a>Read more <span>→</span></a>

            </figcaption>

        </figure>
    );
}

ImgCard.propTypes = {
    URL: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
}

export default ImgCard;