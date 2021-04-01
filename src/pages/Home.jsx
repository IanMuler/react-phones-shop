import React from 'react';
import '../assets/Home.css';
import PrincipalNavbar from '../components/PrincipalNavbar';
import Brands from '../components/Brands';

function Home (props){

const brands=[
        {image: 'https://cnet1.cbsistatic.com/img/loW_hBqDVLptH40dbsOyy35sYPQ=/940x0/2017/01/11/2ef16f2d-3dfb-44f4-8d6c-f41cc18c43a9/nokia-logo.png', 
        href:"/Nokia"},
        {image: 'https://cdn.worldvectorlogo.com/logos/samsung-1.svg', 
        href:"/Samsung"},
        {image: 'https://tentulogo.com/wp-content/uploads/2018/12/xiaomi-logo-startup.jpg', 
        href:"/Xiaomi"} 
      ]

  return (
    <div className="home">
        <PrincipalNavbar
        toPushUrl={props.history}/>
        <div className="main">
        <Brands brands={brands}/>
        </div>
    </div>
  );
}

export default Home;
