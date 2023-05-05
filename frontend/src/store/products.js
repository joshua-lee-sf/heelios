import csrfFetch from './csrf'

// action constants

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'
export const RECEIVE_SEARCH_PRODUCTS = "products/RECEIVE_SEARCH_PRODUCTS"

//action creators

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  payload: products
})

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  payload: product
})

export const receiveSearchProducts = (products) => ({
  type: RECEIVE_SEARCH_PRODUCTS,
  payload: products
})

// state selectors
export const getProducts = state => {
  return state.products ? Object.values(state.products) : []
}

export const getProduct = productId => state => {
  return state.products ? state.products[productId] : null
}

export const getProductBySku = productId => state => {
  return getProducts(state).filter((product) => product.sku.includes(productId.split("-")[0])) 
}


//data base operations
export const fetchProducts = () => async(dispatch, getState) => {
  let res = await fetch('/api/products')
  let products = await res.json()
  dispatch(receiveProducts(products))
}

export const fetchProduct = (productId) => async(dispatch, getState) => {
  let res = await fetch(`/api/products/${productId}`)
  let product = await res.json()
  dispatch(receiveProduct(product))
}

export const fetchProductsBySku = (productId) => async(dispatch, getState) => {
  let res = await fetch(`/api/products?sku=${productId}`)
  let products = await res.json()
  dispatch(receiveProducts(products))
}

export const fetchProductsByCategory = (category) => async(dispatch, getState) => {
  let res = await fetch(`/api/products?category=${category}`)
  let products = await res.json()
  dispatch(receiveProducts(products))
}

export const fetchProductsByQuery = (query) => async (dispatch, getState) => {
  const res = await csrfFetch(`/api/search${query}`)
  const products = await res.json();
  dispatch(receiveSearchProducts(products))
}

export const fetchProductsByLimitandOffset = (limit, offset=0) => async (dispatch, getState) => {
  const res = await csrfFetch(`/api/products?limit=${limit}&offset=${offset}`)
  const products = await res.json()
  dispatch(receiveProducts(products))
}

const productReducer = (state = {}, action) => {
  const nextState = {...state};
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return {...nextState, ...action.payload?.products};
    case RECEIVE_PRODUCT:
      return {...nextState, [action.payload.products.sku]: action.payload};
    case RECEIVE_SEARCH_PRODUCTS:
      return{...action.payload.products};
    default:
      return state
  }
}

export default productReducer;