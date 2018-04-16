import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducers';
import { userLoggedIn } from './actions/auth';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.simpleLogin){
  const payload = decode(localStorage.simpleLogin);
  const user = {
    token: localStorage.simpleLogin,
    email: payload.email,
   };
  setAuthorizationHeader(localStorage.simpleLogin);
  store.dispatch(userLoggedIn(user));
}

// App is enclosed in route to pass history to it
ReactDOM.render(
  <BrowserRouter>
    <Provider store= {store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
