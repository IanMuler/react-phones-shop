import React from 'react';
import '../assets/styles/Banner.css'
import { Link } from 'react-router-dom'

function Banner(props) {
      return(
          <Link to={props.banner.href} className="banner">
            <div className="banner__title">
            <h1>PHONES</h1>
            </div>
          <img className="banner__img" src={props.banner.image} alt=""/>
          </Link>
  );
}

export default Banner;