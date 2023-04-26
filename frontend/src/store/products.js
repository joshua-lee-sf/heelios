// action constants

const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

//action creators

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  payload: products
})

const receiveProduct = (productId) => ({
  type: RECEIVE_PRODUCT,
  payload: productId
})

// state selectors
export const getProducts = state => {
  return state.products ? Object.values(state.products) : []
}

export const getProduct = productId => state => {
  return state.products ? state.products[productId] : null
}

//data base operations
export const fetchProducts = () => async(dispatch, getState) => {
  let res = await fetch('/api/products')
  let {products} = await res.json()
  dispatch(receiveProducts(products))
}

export const fetchProduct = (productId) => async(dispatch, getState) => {
  let res = await fetch(`/api/products/${productId}`)
  let {product} = await res.json()
  dispatch(receiveProduct(product))
}

const productReducer = (state = {}, action) => {
  const nextState = {...state}
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return {...nextState, ...action.payload}
    case RECEIVE_PRODUCT:
      return {...nextState, [action.payload]: nextState[action.payload]}
    default:
      return state
  }
}

export default productReducer