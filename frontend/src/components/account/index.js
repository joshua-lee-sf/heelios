import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import { useHistory } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  function handleClick(e){
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
    history.push('/');
  }
  
  return(
    <button onClick={handleClick}>Log Out</button>
  )
}

export default Account