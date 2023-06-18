import './Navbar.css'
import { Link } from 'react-router-dom'
import AzamonLogo from '../../assets/Azamon.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <img src={AzamonLogo} alt='navbarlogo' className='navbar-logo' />
        <form className='search-form'>
          <input
            type='text'
            placeholder='Search...'
            className='search-input'
          />
          <button type='submit' className='search-button'>Search</button>
        </form>
        <button className='nav-login'>Log In</button>
        <Link className='seeCarrito' to='/cart'>🛒</Link>
      </nav>
    </div>
  )
}

export default Navbar
