import React, {Fragment,useEffect} from 'react';
import PrincipalNavbar from '../components/PrincipalNavbar';
import PhonesList from '../components/PhonesList';      
import AlertNot from '../components/AlertNot'
import { connect } from 'react-redux';    

function Cart (props) {

const { actualUser } = props;
const cartItems = actualUser.cart;
const total = cartItems.map(item => item.price).reduce((reducer, price) => reducer + price)

useEffect(()=>{
    if(Object.keys(actualUser).length === 0){
        props.history.push("/login")
    }         
})



      return(
        <Fragment>
        <PrincipalNavbar/>
        
        <div className="row">
            <div className="col-8">
        {cartItems?.length !== 0 &&
        <PhonesList
        phones={cartItems}
        url={props.history.location.pathname}/>
        }
        {cartItems?.length === 0 &&
        <AlertNot title="Your cart is empty" subTitle="Add a product"/>
        }
            </div>
            <div className="text-center mt-5 h2 col-4">
                Total: ${total}
            </div>
        </div>

        </Fragment>
  );
}

const mapStateToProps = state =>{
 return{
     actualUser: state.actualUser,
 }
}

export default connect(mapStateToProps, null)(Cart);
