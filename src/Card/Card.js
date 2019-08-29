import React from 'react';
import '../Card/Card.css'

const Card = ({id, img, name, description, price}) => {
  return (
    <article>
      <img src={img} alt='' />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
      <button> Remove From History </button>
    </article>
  )
}

export default Card