import './navbarcategories.css'
import {Link} from 'react-router-dom'
import { fetchProductsByCategory } from '../../../store/products'
import { useDispatch } from 'react-redux'

const NavBarCategories = () => {
  const dispatch = useDispatch();
  
  return(
    <>
      <ul className="navbar-categories">
        <Link to="/products"><li className="navbar-categories-options">All Products</li></Link>
        <Link to="/products/category/men" onClick={()=> dispatch(fetchProductsByCategory("men"))}><li className="navbar-categories-options">Men</li></Link>
        <Link to="/products/category/women" onClick={()=> dispatch(fetchProductsByCategory("women"))}><li className="navbar-categories-options">Women</li></Link>
        <Link to="/products/category/kids" onClick={()=> dispatch(fetchProductsByCategory("kids"))}><li className="navbar-categories-options">Kids</li></Link>
      </ul>
    </>
  )
}

export default NavBarCategories