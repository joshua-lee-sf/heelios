import { receiveProduct, receiveProducts } from './products'
import csrfFetch from './csrf'
// action constants

const RECEIVE_CART_ITEMS = "cart_items/RECEIVE_CART_ITEMS"
const RECEIVE_CART_ITEM = "cart_items/RECEIVE_CART_ITEM"
const REMOVE_CART_ITEM = "cart_items/REMOVE_CART_ITEM"

// action creators
const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  payload: cartItems
})

const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  payload: cartItem
})

const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  payload: cartItemId
})

// state selectors
export const getCartItems = state => {
  return state.cartItems ? Object.values(state.cartItems) : [];
}

export const getCartItem = cartItemId => state => {
  return state.cartItems ? state.cartItems[cartItemId] : null;
}

//thunk action creators

export const fetchCartItems = () => async (dispatch, getState) => {
  const res = await fetch('/api/cart_items');
  const {cartItems, products} = await res.json();
  dispatch(receiveCartItems(cartItems))
  dispatch(receiveProducts(products))
}

export const fetchCartItem = (cartItemId) => async(dispatch, getState) => {
  const res = await fetch(`/api/cart_items/${cartItemId}`)
  const cartItem = await res.json()
  dispatch(receiveCartItem(cartItem))
}

export const createCartItem = (cartItem) => async(dispatch, getState) => {
  const res = await csrfFetch('/api/cart_items',{
    method: "POST",
    body: JSON.stringify(cartItem)
  })
  const data = await res.json()
  dispatch(receiveCartItem(data))
}

export const updateCartItem = cartItem => async(dispatch, getState) => {
  const res = await csrfFetch(`/api/cart_items/${cartItem.id}`,{
    method: "PATCH",
    // headers: {"Content-Type": "application/json",
    //           "X-CSRF-TOKEN": sessionStorage.getItem('X-CSRF-Token')
    //           },
    body: JSON.stringify(cartItem)
  })
  const data = await res.json()
  dispatch(receiveCartItem(data))
}

export const deleteCartItem = cartItemId => async (dispatch, getState) => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`,{
    method: "DELETE",
    })
  dispatch(removeCartItem(cartItemId))
}

export const deleteAllCartItems = () => async (dispatch, getState) => {
  const res = await csrfFetch('/api/cart_items',{
    method: "Delete",
  });
  dispatch(removeCartItem)
}

//cartitem reducer

const cartItemReducer = (state={}, action) => {
  const nextState = {...state}
  switch(action.type){
    case RECEIVE_CART_ITEMS:
      return {...nextState, ...action.payload}
    case RECEIVE_CART_ITEM:
      return {...nextState, [action.payload.id]: action.payload}
    case REMOVE_CART_ITEM:
      delete nextState[action.payload]
      return nextState
    default:
      return state
  }
}

export default cartItemReducer