import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

render(
  <Provider store={store}  basename="/travis_example">
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
   document.getElementById('root')
);
