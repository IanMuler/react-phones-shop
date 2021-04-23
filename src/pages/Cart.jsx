import React, {Fragment,useEffect} from 'react';
import PrincipalNavbar from '../components/PrincipalNavbar';
import PhonesList from '../components/PhonesList';      
import AlertNot from '../components/AlertNot'
import { connect } from 'react-redux';    

function Cart (props) {

const { actualUser } = props;
const cartItems = actualUser.cart;

useEffect(()=>{
    if(Object.keys(actualUser).length === 0){
        props.history.push("/login")
    }         
})

      return(
        <Fragment>
        <PrincipalNavbar/>
        
        {cartItems?.length !== 0 &&
        <PhonesList
        phones={cartItems}
        url={props.history.location.pathname}/>
        }
        {cartItems?.length === 0 &&
        <AlertNot title="Your cart is empty" subTitle="Add a product"/>
        }

        </Fragment>
  );
}

const mapStateToProps = state =>{
 return{
     actualUser: state.actualUser,
 }
}

export default connect(mapStateToProps, null)(Cart);
