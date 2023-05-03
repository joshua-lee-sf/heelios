import { receiveProducts } from './products'
import csrfFetch from './csrf'

//action constants

const RECEIVE_FAVORITES = "favorites/RECEIVE_FAVORITES"
const RECEIVE_FAVORITE = "favorites/RECEIVE_FAVORITE"
const REMOVE_FAVORITE = "favorites/REMOVE_FAVORITE"

//action creators
export const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  payload: favorites
})

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  payload: favorite
})

export const removeFavorite = (favoriteId) => ({
  type: REMOVE_FAVORITE,
  payload: favoriteId
})

//state selectors/updators

export const getFavorites = (state) => {
  return state.favorites ? Object.values(state.favorites) : []
}

export const getFavorite = (favoriteId) => state => {
  return state.favorites ? state.favorites[favoriteId] : null ;
}

// thunk dispatchers

export const fetchFavorites = () => async (dispatch, getState) => {
  const res = await fetch('/api/favorites')
  const {favorites, products} = await res.json()
  dispatch(receiveFavorites(favorites))
  dispatch(receiveProducts(products)) 
}

export const fetchFavorite = (favoriteId) => async (dispatch, getState) => {
  const res = await fetch(`/api/favorites/${favoriteId}`)
  const favorite = await res.json()
  dispatch(receiveFavorite(favorite))
}

export const createFavorite = (favorite) => async (dispatch, getState) => {
  const res = await csrfFetch(`/api/favorites`,{
    method: "POST",
    body: JSON.stringify({favorite})
  })
  const data = await res.json()
  dispatch(receiveFavorite(data))
}

export const deleteFavorite = (favoriteId) => async(dispatch, getState) => {
  const res = await fetch(`/api/favorites/${favoriteId}`, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": sessionStorage.getItem('X-CSRF-Token')
    }
  })  
  dispatch(removeFavorite(favoriteId))
}


//favorite reducer
const favoriteReducer = (state={}, action) => {
  let nextState = {...state}
  switch (action.type){
    case RECEIVE_FAVORITES:
      return {...nextState, ...action.payload}
    case RECEIVE_FAVORITE:
      return {...nextState, [action.payload.id]: action.payload}
    case REMOVE_FAVORITE:
      delete nextState[action.payload]
      return nextState
    default:
      return state;
  }
}

export default favoriteReducer