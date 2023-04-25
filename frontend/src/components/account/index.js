import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'

const Account = () => {
  const dispatch = useDispatch();
  
  function handleClick(e){
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  }
  
  return(
    <button onClick={(handleClick)}>Log Out</button>
  )
}

export default Account