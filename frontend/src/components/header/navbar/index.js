import NavBarCategories from "../navbarcategories"
import LoginOptions from "../loginoptions"
import { Link, useLocation } from 'react-router-dom'
import {useSelector } from 'react-redux'
import Navigation from '../../authentication/navigation'
import CartFavorite from "./cartfavorite";
import SearchFunction from "../search";
import {FaBars} from 'react-icons/fa'
import './navbar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const location = useLocation();

  const menuClick = () => {
    
  }

  return(
    <>
      <ul className="navbar">
        <Link to='/'><img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2880px-Logo_NIKE.svg.png" alt="logo"/></Link>
        {location.pathname === "/" ? <NavBarCategories /> : null}
        <div className="nav-right">
          <div className="cart-favorite-icons">
            {sessionUser ? <CartFavorite /> : null}
          </div>
          {sessionUser ? <Navigation /> : <LoginOptions />}
          <label className="search-function-container">
            <SearchFunction />
          </label>
          <div className="hamburger-menu">
            <FaBars onClick={() => menuClick()}/>
          </div>
        </div>
      </ul>
    </>
  )
}

export default NavBar