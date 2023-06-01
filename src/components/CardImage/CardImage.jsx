import React from 'react'
import PropTypes from 'prop-types'

function CardImage({children}) {
    const { image } = children;
    console.log(children)
    return (
        <img src={image} className="card-img-top" alt={image} />
    )
}

CardImage.propTypes = {
    children: PropTypes.shape({
        image: PropTypes.string.isRequired,
    }).isRequired
}

export default CardImage
