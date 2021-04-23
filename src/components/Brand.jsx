import React from 'react';
import '../assets/styles/Brand.css'
import { Link } from 'react-router-dom'

function Brand(props) {
      return(
          <Link to={props.href}>
          <img src={props.image} alt="Hola"/>
          </Link>
  );
}

export default Brand;

