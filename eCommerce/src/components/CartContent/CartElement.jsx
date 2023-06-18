import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

import React from 'react'

const CartElement = () => {

  const {cart} = useContext(DataContext)

  return cart.map(product) => {
    return (
        <div className='cartcontent' key={product.id}>
            <img src={product.image} alt='product-card' />
            <h3 className='name'>{product.name}</h3>
            <h4 className='price'>{product.price}</h4>
        </div>
    )
  }
}

export default CartElement