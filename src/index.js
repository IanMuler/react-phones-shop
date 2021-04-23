import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import {loadState, saveState} from './scripts/LocalStorage'
import './index.css';
import App from './App';

const immutableState = {
  usersData:[
        { 
          login:{
            username:"admin",
            password:"12345"
          },
          cart:[
            {
            id:"1",  
            brand:"Nokia",
            model: "7.2", 
            price: 309.31,
            imgurl: "https://images.ctfassets.net/wcfotm6rrl7u/1ePYJvxS7QH0mEhCkssf0D/c2858edf33d2f97c2619ddb50bd30c6d/nokia_7_2-front_back-cyan_green.png?w=230&h=230&fit=pad&bg=rgb:fff"
            },
            ]
        },
        { 
          login:{
            username:"admin1",
            password:"12345"
          },
          cart:[
            {
            id:"1",  
            brand:"Nokia",
            model: "7.2", 
            price: 309.31,
            imgurl: "https://images.ctfassets.net/wcfotm6rrl7u/1ePYJvxS7QH0mEhCkssf0D/c2858edf33d2f97c2619ddb50bd30c6d/nokia_7_2-front_back-cyan_green.png?w=230&h=230&fit=pad&bg=rgb:fff"
            },
            ]
        },
        { 
          login:{
            username:"admin2",
            password:"12345"
          },
          cart:[
            {
            id:"1",  
            brand:"Nokia",
            model: "7.2", 
            price: 309.31,
            imgurl: "https://images.ctfassets.net/wcfotm6rrl7u/1ePYJvxS7QH0mEhCkssf0D/c2858edf33d2f97c2619ddb50bd30c6d/nokia_7_2-front_back-cyan_green.png?w=230&h=230&fit=pad&bg=rgb:fff"
            },
            ]
        },
        { 
          login:{
            username:"admin3",
            password:"12345"
          },
          cart:[
            {
            id:"1",  
            brand:"Nokia",
            model: "7.2", 
            price: 309.31,
            imgurl: "https://images.ctfassets.net/wcfotm6rrl7u/1ePYJvxS7QH0mEhCkssf0D/c2858edf33d2f97c2619ddb50bd30c6d/nokia_7_2-front_back-cyan_green.png?w=230&h=230&fit=pad&bg=rgb:fff"
            },
            ]
        },
        
  ],
  actualUser:{}
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
