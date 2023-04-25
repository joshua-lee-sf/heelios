import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'
import * as sessionActions from '../../store/session'
import './signupform.css'

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const sessionUser = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);

  const newUser = {email, password}

  if(sessionUser) return <Redirect to="/"/>

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === confirmPassword){
      setErrors([]);
      return dispatch(sessionActions.signUpUser(newUser))
        .catch(async (res) => {
          let data;
          try{
            data = await res.clone().json();
          } catch{
            data = await res.text()
          }
          if(data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password Field'])
  }

  return(
    <div className="signup-form">
      <div className="signup-form-items">
        <img className="signup-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2880px-Logo_NIKE.svg.png" alt="logo"/>
        <h1>Enter your information to join us!</h1>
        <form className="signup-form" onSubmit={(handleSubmit)}>
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="signup-input"></input>
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required className="signup-input"></input>
          <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required className="signup-input"></input>
          <button className="signin-button">Sign Up</button>
        </form>
        <div className="errors">
            <ul>
              {errors.map(error => {
                return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default SignUpForm;