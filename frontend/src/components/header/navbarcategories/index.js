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
        <li className="navbar-categories-options"><Link to="/products/category/men" onClick={()=> dispatch(fetchProductsByCategory("men"))}>Men</Link></li>
        <li className="navbar-categories-options"><Link to="/products/category/women" onClick={()=> dispatch(fetchProductsByCategory("women"))}>Women</Link></li>
        <li className="navbar-categories-options"><Link to="/products/category/kids" onClick={()=> dispatch(fetchProductsByCategory("kids"))}>Kids</Link></li>
      </ul>
    </>
  )
}

export default NavBarCategories