import React from 'react';
import '../assets/styles/BrandBanner.css';
import { connect } from 'react-redux';

function BrandBanner(props) {

const { image } = props;

      return(
            <div className={`brand-banner ${props.brand}-banner`}>
            <img src={image} alt=""/>
            </div>
  );
}

const mapStateToProps = (state,props) => {
    return{
        image: state.media?.brands[props.brand].image
    }
}

export default connect(mapStateToProps, null)(BrandBanner);