import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import sessionReducer from './session';
import productReducer from './products';
import cartItemReducer from './cartItem';
import favoriteReducer from './favorite';
import reviewReducer from './reviews';

const rootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer,
  cartItems: cartItemReducer,
  favorites: favoriteReducer,
  reviews: reviewReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;