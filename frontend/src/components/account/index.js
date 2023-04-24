import { deleteUserSession } from "../../store/session"
import { useDispatch } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();
  
  function handleClick(e){
    e.preventDefault();
    dispatch(deleteUserSession)
  }
  
  return(
    <button onClick={(handleClick)}>Log Out</button>
  )
}

export default Account