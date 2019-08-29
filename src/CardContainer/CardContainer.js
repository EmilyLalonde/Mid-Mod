import React from 'react';
import Card from '../Card/Card.js'
import '../CardContainer/CardContainer.css'

const CardContainer = ({data, deletePurchaseCard}) => {
  const allPurchases = data.map(purchase => {
    return (
      <Card 
      key = {purchase.name + Date.now()}
      id = {purchase.id}
      img = {purchase.img}
      name = {purchase.name}
      description = {purchase.description}
      price = {purchase.price }
      deletePurchaseCard = {deletePurchaseCard}
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