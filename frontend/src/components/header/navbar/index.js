import NavBarCategories from "../navbarcategories"
import LoginOptions from "../loginoptions"
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux'
import Navigation from '../../authentication/navigation'
import CartFavorite from "./cartfavorite";
import SearchFunction from "../search";
import './navbar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  return(
    <>
      <ul className="navbar">
        <Link to='/'><img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2880px-Logo_NIKE.svg.png" alt="logo"/></Link>
        <NavBarCategories />
        <div className="nav-right">
        <div className="cart-favorite-icons">
          {sessionUser ? <CartFavorite /> : null}
        </div>
          {sessionUser ? <Navigation /> : <LoginOptions />}
        <label className="search-function">
          <SearchFunction />
        </label>
        </div>
      </ul>
    </>
  )
}

export default NavBar