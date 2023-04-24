import csrfFetch from "./csrf"

//action constants
export const SET_USER_SESSION = 'session/SET_USER_SESSION'
export const DELETE_USER_SESSION = 'session/DELETE_USER_SESSION'

//pojo action creators
export const setUserSession = (user) => ({
  type: SET_USER_SESSION,
  payload: user
})

export const deleteUserSession = (user) => ({
  type: SET_USER_SESSION,
  payload: user
})

//thunk actions
export const userLogin = (user) => async (dispatch, getState) => {
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  })
  const data = await res.json()
  storeCurrentUser(data.user)
  dispatch(setUserSession(data.user))
  return res
}

export const restoreSession = () => async (dispatch, getState) => {
  const res = await csrfFetch('/api/session')
  storeCSRFToken(res)
  const data = await res.json()
  storeCurrentUser(data.user)
  dispatch(setUserSession(data.user))
  return res;
}

export const signUpUser = (user) => async (dispatch, getState) =>{
  const res = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  })
  const data = await res.json()
  storeCurrentUser(data.user);
  dispatch(setUserSession(data.user));
  return res;
}

export const logoutUser = (user) => async (dispatch, getState) => {
  const res = await csrfFetch('/api/session',{
    method: 'DELETE'
  })
  dispatch(deleteUserSession)
}

// helper methods

const storeCurrentUser = (user) => {
  const data = JSON.stringify(user)
  if (user) sessionStorage.setItem('currentUser', data);
  else sessionStorage.removeItem('currentUser');
}

const storeCSRFToken = (response) => {
  const token = response.headers.get('X-CSRF-Token');
  if(token) sessionStorage.setItem('X-CSRF-Token', token);
}


const initialState = {user: JSON.parse(sessionStorage.getItem("currentUser"))}

//reducer
const sessionReducer = (state = initialState, action) => {
  const nextState = {...initialState}
  switch(action.type){
    case SET_USER_SESSION:
      return {...nextState, user: action.payload}
    case DELETE_USER_SESSION:
      return {...nextState, user: null}
    default:
      return state
  }
}

export default sessionReducer