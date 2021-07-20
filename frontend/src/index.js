import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { restoreCSRF, csrfFetch } from './store/csrf';

import configureStore from './store';

//import fonts
import './fonts/AirbnbCerealBlack.ttf';
// import './fonts/AirbnbCerealBold.tff';
// import './fonts/AirbnbCerealBook.tff';
// import './fonts/AirbnbCerealExtraBold.tff';
// import './fonts/AirbnbCerealLight.tff';
// import './fonts/AirbnbCerealMedium.tff';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
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

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
