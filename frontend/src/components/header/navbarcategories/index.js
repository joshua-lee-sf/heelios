import './navbarcategories.css'
import {Link} from 'react-router-dom'
import { fetchProductsByCategory } from '../../../store/products'
import { useDispatch } from 'react-redux'

const NavBarCategories = () => {
  const dispatch = useDispatch();
  
  return(
    <>
      <ul className="navbar-categories">
        <li className="navbar-categories-options"><Link to="/products">All Products</Link></li>
        <li className="navbar-categories-options" onClick={()=> dispatch(fetchProductsByCategory("men"))}><Link to="/products/category/men">Men</Link></li>
        <li className="navbar-categories-options" onClick={()=> dispatch(fetchProductsByCategory("women"))}><Link to="/products/category/women" >Women</Link></li>
        <li className="navbar-categories-options"><Link to="/products/category/kids" onClick={()=> dispatch(fetchProductsByCategory("kids"))}>Kids</Link></li>
      </ul>
    </>
  )
}

export default NavBarCategories