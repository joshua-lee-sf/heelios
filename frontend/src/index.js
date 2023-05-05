import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import * as productActions from './store/products';
import './reset.css';
import './index.css';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.productActons = productActions;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}


const renderApplication = () => {
  return(
    ReactDOM.render(
      <React.StrictMode>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico"></link>
        <Root />
      </React.StrictMode>,
      document.getElementById('root')
    )
  )
}

if (sessionStorage.getItem("X-CSRF-Token") === null || sessionStorage.getItem('currentUser') === null) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
