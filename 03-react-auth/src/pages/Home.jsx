import { useState, useEffect } from 'react'
import { getAllItems } from '@/services/itemService'
import { Link } from 'react-router-dom'

const Home = () => {
  const placeholderImage =
  'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setItemsData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemsData()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {itemsData.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image || placeholderImage} alt={product.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              <Link to={`/producto/${product.id}`} className='btn btn-primary'>Comprar</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
