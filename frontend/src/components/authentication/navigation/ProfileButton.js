import { useState, useEffect } from "react"
import * as sessionActions from '../../../store/session'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './profilebutton.css'

const ProfileButton = ({user}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const handleProfileClick = () => {
    setShowMenu(true);
  }


  const closeMenu = () => {
    setShowMenu(false)
  }

  useEffect(()=>{
    if (!showMenu) return;
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu)
  }, [showMenu])

  const logout = (e) => {
    e.preventDefault()
    dispatch(sessionActions.logoutUser())
      .then(history.push('/'))
  }

  return(
    <div className="menu-container">
      <i className="fa-solid fa-user profile-button" onMouseEnter={(handleProfileClick)} ></i>
      {showMenu && (
        <ul className='profile-dropdown'>
          <li>Hi, {user.email}</li>
          <li onClick={(logout)} className="logout-button">Log Out</li>
        </ul>
      )}
    </div>
  )
}

export default ProfileButton;