import { Link } from "react-router-dom"
import './index.css'

const LoginOptions = () => {
  return(
    <ul className="loginoptions-container">
      <li><Link to="/accounts/signup">Sign Up</Link></li>
      <li><Link to="/accounts/login">Log In</Link></li>
    </ul>
  )
}

export default LoginOptions