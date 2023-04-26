import './signinform.css'
import { useState,  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as sessionActions from '../../../store/session'
import { Redirect, Link } from 'react-router-dom'

const SignInForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  if (sessionUser) return <Redirect to="/"/>;

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.userLogin({email, password}))
      .catch(async (res) => {
        let data;
        try{
          data = await res.clone().json();
        } catch{
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors(data);
        else setErrors([res.statusText]);
      });
  }

  const handleDemoUserClick = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.userLogin({email: 'demo@user.io', password: 'password'}))
  }

  return(
    <div className="signin-form">
      <div className="sign-form-items">
        <img className="signin-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2880px-Logo_NIKE.svg.png" alt="logo"/>
        <h1>Enter your email to sign in.</h1>
        <form onSubmit={(handleSubmit)} className="signin-form">
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="signin-input" required></input>
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="signin-input" required></input>
          <ul className="errors">
            {errors.map((error, idx) => {
              return <li key={idx}>{error}</li>
            }) }
          </ul>
          <button className="signin-button">Sign In</button>
        </form>
        <button onClick={(handleDemoUserClick)} className="signin-button">Demo User</button>
        <p>If you do not have an account, <Link to="/account/signup" className="signup-link"> join us</Link></p> 
      </div>
    </div>
  )
}

export default SignInForm