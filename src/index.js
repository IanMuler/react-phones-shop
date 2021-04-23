import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import {loadState, saveState} from './scripts/LocalStorage'
import './index.css';
import App from './App';

const immutableState = {
  "usersData":[
        { 
          login:{
            username:"admin",
            password:"12345"
          },
          cart:[]
        },
  ],
  "actualUser":{}
}
let initialState;

if(!loadState()){
  initialState = immutableState;
} else {
  initialState = loadState();
}

const store = createStore(reducer, initialState)

store.subscribe( () => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
