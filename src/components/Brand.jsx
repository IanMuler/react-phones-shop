import React from 'react';
import '../assets/styles/Brand.css'
import { Link } from 'react-router-dom'

function Brand(props) {

const brandStyle = {
  background: `url(${props.background})`,
}

      return(
          <Link to={props.href} style={brandStyle}>
          <img src={props.image} alt="Hola"/>
          </Link>
  );
}

export default Brand;

