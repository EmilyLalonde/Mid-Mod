import React from 'react';
import Card from '../Card/Card.js'
import '../CardContainer/CardContainer.css'

const CardContainer = ({data}) => {
  const allPurchases = data.map(purchase => {
    return (
      <Card 
      id = {purchase.id}
      img = {purchase.img}
      name = {purchase.name}
      description = {purchase.description}
      price = {purchase.price }
      />
    )
  })
  return (
    <div>
      {allPurchases}
    </div>
  )
  
}

export default CardContainer