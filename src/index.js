import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import headerReducer from './component/contant/header/header-reducer'

const rootReducers = combineReducers({
  headerReducer :  headerReducer
})
const store = createStore(rootReducers)

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
