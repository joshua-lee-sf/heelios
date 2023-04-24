import NavBarCategories from "../navbarcategories"
import LoginOptions from "../loginoptions/loginoptions"
import {AiOutlineSearch} from 'react-icons/ai';
import './index.css'

const NavBar = () => {
  return(
    <>
      <ul className="navbar">
        <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2880px-Logo_NIKE.svg.png" alt="logo"/>
        <NavBarCategories />
        <div className="nav-right">
          <LoginOptions />
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