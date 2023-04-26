import './navbarcategories.css'
import {Link} from 'react-router-dom'

const NavBarCategories = () => {
  return(
    <>
      <ul className="navbar-categories">
        <li className="navbar-categories-options"><Link to="/products">All Products</Link></li>
        <li className="navbar-categories-options">Men</li>
        <li className="navbar-categories-options">Women</li>
        <li className="navbar-categories-options">Kids</li>
      </ul>
    </>
  )
}

export default NavBarCategories