import { Link, useLocation } from "react-router-dom"
import './loginoptions.css'

const LoginOptions = () => {
  const {pathname} = useLocation();

  return(
    <ul className="loginoptions-container">
      {pathname.includes('signup') ? null : <li className="loginoptions"><Link to="/account/signup">Join Us</Link></li> }
      {pathname.includes('signin') ? null : <li className="loginoptions"><Link to="/account/signin">Sign In</Link></li> }
    </ul>
  )
}

export default LoginOptions