import React from 'react';
import '../Card/Card.css'

const Card = ({id, img, name, description, price}) => {
  return (
    <article>
      <img src={img} alt='' />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
      <button> Remove From History </button>
    </article>
  )
}

export default Card