import React from 'react';
import '../assets/styles/Home.css';
import PrincipalNavbar from '../components/PrincipalNavbar';
import Brands from '../components/Brands';
import '../assets/styles/Home.css';
import { connect } from 'react-redux';

function Home (props){

const { brands, banner } = props;

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

const mapStateToProps = state => {
  return{
    brands: state.media.brands,
    banner: state.media.homeBanner,
  }
}

export default connect(mapStateToProps, null)(Home);
