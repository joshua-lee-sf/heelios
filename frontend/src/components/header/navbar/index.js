import NavBarCategories from "../navbarcategories"
import LoginOptions from "../loginoptions"
import {AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux'
import { useEffect } from "react";
import Navigation from '../../authentication/navigation'
import './navbar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);


  return(
    <>
      <ul className="navbar">
        <Link to='/'><img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2880px-Logo_NIKE.svg.png" alt="logo"/></Link>
        <NavBarCategories />
        <div className="nav-right">
          {sessionUser ? <Navigation />: <LoginOptions />}
        <label className="search-function">
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
          <input type="search" placeholder="Search"></input>
        </label>
        </div>
      </ul>
    </>
  )
}

export default NavBar