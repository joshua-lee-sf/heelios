import { Link } from "react-router-dom"
import './loginoptions.css'

const LoginOptions = () => {
  return(
    <ul className="loginoptions-container">
      <li className="loginoptions"><Link to="/account/signup">Join Us</Link></li>
      <li className="loginoptions"><Link to="/account/signin">Sign In</Link></li>
    </ul>
  )
}

export default LoginOptions