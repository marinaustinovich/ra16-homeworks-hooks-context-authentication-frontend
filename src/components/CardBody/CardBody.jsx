import React from 'react'
import PropTypes from 'prop-types';
import './CardBody.css';

function CardBody({ children }) {
    const { title, content } = children;
    return (
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    )
}

CardBody.propTypes = {
    children: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired
}

export default CardBody
