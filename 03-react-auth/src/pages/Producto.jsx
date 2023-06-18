import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '@/services/itemService'

const Producto = () => {
  const [itemData, setItemData] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getSingleItem(id)
        if (response.status === 200) {
          setItemData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemsData()
  }, [id])

  return (
    <>
      <div>Producto</div>
      {itemData
        ?
          (
            <>
              <p>Product Name: {itemData.product_name}</p>
              <p>Description: {itemData.description}</p>
              <p>Price: {itemData.price}</p>
            </>
          )
        :
          (
            <p>Loading...</p>
          )}
    </>
  )
}

export default Producto
