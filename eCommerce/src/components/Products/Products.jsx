import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import './Products.css'

const Products = () => {
  const { products, cart, setCart } = useContext(DataContext)

  const buyProducts = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  return products.map((product) => {
    return (
      <div className='card' key={product.id}>
        <img src={product.image} alt='img-product-card' />
        <h3>{product.product_name}</h3>
        <h4>${product.price}</h4>
        <button onClick={() => buyProducts(product)}>Add to cart</button>
      </div>
    )
  })
}

export default Products
