import { Link } from "react-router-dom"
import './index.css'

const LoginOptions = () => {
  return(
    <ul className="loginoptions-container">
      <li><Link to="/account/signup">Sign Up</Link></li>
      <li><Link to="/account/login">Sign In</Link></li>
    </ul>
  )
}

export default LoginOptions