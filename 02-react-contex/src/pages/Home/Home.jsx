import SongDetails from '@/components/SongDetails'
import SongList from '@/components/SongList'
import './Home.css'

const Home = () => {
  return (
    <div className='Home-container'>
      <div className='izquierdo'>
        <h2>Lado Izquierdo</h2>
        <SongList />
      </div>
      <div className='derecho'>
        <h2>Lado Derecho</h2>
        <SongDetails />
      </div>
    </div>
  )
}

export default Home
