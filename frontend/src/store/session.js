import csrfFetch from "./csrf"

//action constants
export const SET_USER_SESSION = 'session/SET_USER_SESSION'
export const DELETE_USER_SESSION = 'session/DELETE_USER_SESSION'

//pojo action creators
export const setUserSession = (user) => ({
  type: SET_USER_SESSION,
  paylod: user
})

export const deleteUserSession = (user) => ({
  type: SET_USER_SESSION,
  payload: user
})

//thunk actions
export const userLogin = (user) => async (dispatch, getState) => {
  const {email, password} = user
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(email, password)
  })
  const data = await res.json()
  dispatch(setUserSession(data.user))
  return res
}

const sessionReducer = (state={ user: null }, action) => {
  const nextState = {...state}
  switch(action.type){
    case SET_USER_SESSION:
      return {...nextState, ...action.user}
    case DELETE_USER_SESSION:
      return {...nextState, user: null}
    default:
      return state
  }
}

export default sessionReducer