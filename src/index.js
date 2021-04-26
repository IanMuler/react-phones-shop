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

  actualUser:{},

  media:{
    brands:{
     Nokia: {image: 'https://i.ibb.co/jvW5Rbz/nokia-png.png', 
             href:"/Nokia",},
     Samsung: {image: 'https://i.ibb.co/xFqg3Gz/samsung-png.png', 
              href:"/Samsung"},
     Xiaomi: {image: 'https://i.ibb.co/YBMPzFH/xiaomi-png.png', 
              href:"/Xiaomi"} 
    },
    homeBanner:{
      image: 'https://i.ibb.co/4shmp50/mobile-phones-banner.png',
      href:"/All"
      },
    phones:[{
        id:"1",  
        brand:"Nokia",
        model: "7.2", 
        price: 309.31,
        imgurl: "https://images.ctfassets.net/wcfotm6rrl7u/1ePYJvxS7QH0mEhCkssf0D/c2858edf33d2f97c2619ddb50bd30c6d/nokia_7_2-front_back-cyan_green.png?w=230&h=230&fit=pad&bg=rgb:fff"
        },
        {
        id:"2",  
        brand:"Nokia", 
        model: "6.2", 
        price: 249.00, 
        imgurl:"https://images.ctfassets.net/wcfotm6rrl7u/21STLirH16JPA0KmAq2blL/c688e4d3f50e50c57ffd62e3ee214e32/nokia_6_2-front_back-ice.png?w=230&h=230&fit=pad&bg=rgb:fff"
        },
        {  
        id:"3",
        brand:"Nokia", 
        model: "5.3", 
        price: 199.00, 
        imgurl:"https://images.ctfassets.net/wcfotm6rrl7u/2Obq6PBk4Itttstt47qoG4/0caca27b1e3ff118f9580420650a57b6/nokia_5_3-front_back-Cyan.png?w=230&h=230&fit=pad&bg=rgb:fff"
        },
        {  
        id:"4",
        brand:"Samsung",
        model: "Galaxy Z Flip", 
        price: 199.00, 
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_794686-MLA41702680420_052020-O.webp"
        },
        {        
        id:"5",
        brand:"Samsung", 
        model: "Galaxy S10+", 
        price: 250.00, 
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_998561-MLA43684142816_102020-V.webp"
        },
        {           
        id:"6",
        brand:"Samsung", 
        model: "Galaxy S20+", 
        price: 350.00, 
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_672070-MLA43136011463_082020-V.webp"
        },
        {         
        id:"7",
        brand:"Xiaomi", 
        model: "Redmi 9a", 
        price: 350.00, 
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_955855-MLA43167718739_082020-V.webp"
        },
        { 
        id:"8",
        brand:"Xiaomi", 
        model: "Redmi Note 9",
        price: 450.00, 
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_929863-MLA42643560788_072020-V.webp"
        },
        { 
        id:"9",
        brand:"Xiaomi", 
        model: "Redmi Note 8", 
        price: 250.00, 
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_796078-MLA40021979706_122019-V.webp"
        }],             
  }
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
