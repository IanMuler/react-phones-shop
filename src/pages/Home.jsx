import React from 'react';
import '../assets/styles/Home.css';
import PrincipalNavbar from '../components/PrincipalNavbar';
import Brands from '../components/Brands';
import '../assets/styles/Home.css'

function Home (props){

const brands=[
        {image: 'https://i.ibb.co/jvW5Rbz/nokia-png.png', 
        href:"/Nokia"},
        {image: 'https://i.ibb.co/xFqg3Gz/samsung-png.png', 
        href:"/Samsung"},
        {image: 'https://i.ibb.co/YBMPzFH/xiaomi-png.png', 
        href:"/Xiaomi"} 
      ]
      
const banner = {
    image: 'https://i.ibb.co/4shmp50/mobile-phones-banner.png',
    titleImage: 'https://i.ibb.co/MRRQWDj/Mobile-logo-png.png',
    href:"/All"
}

  return (
    <div className="home">
        <PrincipalNavbar
        toPushUrl={props.history}/>
        <div className="main">
        <Brands brands={brands} banner={banner}/>
        </div>
    </div>
  );
}

export default Home;
