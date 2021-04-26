import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import LoginNavbar from '../components/LoginNavbar'
import '../assets/styles/OrderConfirmed.css'
import { deleteCart } from '../actions'
 
function OrderConfirmed (props) {

const { actualUser } = props;

    return(
        <>
        <LoginNavbar/>
        <div className="order-container">
            <section className="hero">
            <div className="container">
            <div className="hero-content pb-5 text-center">
                <h1 className="hero-heading h1">ORDER CONFIRMED</h1>
            </div>
            </div>
            </section>
            <section className="pb-5">
                <div className="container text-center">
                <div className="icon-rounded bg-primary mb-3 mx-auto text-white">
                <svg viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
                    </svg>      
                </div>     
                <h4 className="mb-3 ff-base">Thank you, {actualUser.login.username}. Your order is confirmed.</h4>
                <p className="text-muted mb-5">Your order hasn't shipped yet but we will send you ane email when it does.</p>
                <p> <Link onClick={()=>{props.deleteCart(actualUser)}} className="btn btn-outline-dark" to="/">Return to Home</Link></p>
                </div>
            </section>
        </div>
  </>
  )
}

const mapDispatchToProps = {
    deleteCart,
}

const mapStateToProps = state =>{
    return{
       actualUser: state.actualUser,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderConfirmed);

