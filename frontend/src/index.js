import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import './reset.css';
import * as sessionActions from './store/session';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
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
        <Root />
      </React.StrictMode>,
      document.getElementById('root')
    )
  )
}

if (sessionStorage.getItem("X-CSRF-Token") === null) {
  const response = restoreCSRF();
  response.then(renderApplication());
} else {
  renderApplication();
}
