import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/items')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return (
    <DataContext.Provider value={{ products, cart, setCart }}>
      {children}
    </DataContext.Provider>
  )
}

export default ProductProvider
