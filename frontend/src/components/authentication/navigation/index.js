import './navigation.css'
import ProfileButton from './ProfileButton'
import { useSelector } from 'react-redux'

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user)

  if(sessionUser) return <ProfileButton user={sessionUser}/>
}

export default Navigation;