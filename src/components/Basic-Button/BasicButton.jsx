import React from 'react';
import './BasicButton.css';
import PropTypes from 'prop-types';

function BasicButton(props) {
    return (

        <button className="btn">{props.btnText}<span>→</span></button>

    );
}

BasicButton.propTypes = {
    btnText: PropTypes.string.isRequired
}

export default BasicButton;