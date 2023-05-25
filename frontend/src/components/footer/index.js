import { Link } from "react-router-dom"
import './footer.css'

const Footer = () => {
  return(
    <div className="footer-container">
      <div className="footer-left">
        <p>Made By: Joshua Lee</p>
        <p>This app was made for educational purposes only</p>
        <p>© Heelios 2023</p>
      </div>
        <ul className="footer-right">
          <h1>Contact Me: </h1>
          <a href="https://github.com/joshua-lee-sf/heelios" target="blank">
            <li className="github-logo">
              <i class="fa-brands fa-github footer-logo"></i>            
            </li>
          </a>
          <a href="https://www.linkedin.com/in/joshualee011995/" target="blank">
            <li>
              <i class="fa-brands fa-linkedin-in footer-logo"></i>
            </li>
          </a>
          <a href="mailto:joshua.lee0195@gmail.com" target="blank">
            <li>
              <i class="fa-solid fa-envelope footer-logo"></i>
            </li>
          </a>
        </ul>
      </div>
  )
}

export default Footer;