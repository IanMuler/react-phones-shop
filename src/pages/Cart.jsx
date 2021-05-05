import React, {Fragment,useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PrincipalNavbar from '../components/PrincipalNavbar';
import CartList from '../components/CartList';      
import AlertNot from '../components/AlertNot'
import { connect } from 'react-redux';   
import '../assets/styles/Cart.css' 
import { Button } from 'react-bootstrap'

function Cart (props) {

const { actualUser } = props;
const cartItems = actualUser.cart;
const [totalPrice, setTotalPrice] = useState(0); 
let finalPrices = [];

const handlePrices = (price, index) => {
    finalPrices = finalPrices.filter(item => item.index !== index)
    finalPrices.push({index: index, price: price})

    setTotalPrice(finalPrices.map(items => items.price).reduce((reducer, price) => reducer + price))
}

useEffect(()=>{
    if(Object.keys(actualUser).length === 0){
        props.history.push("/login")
    }         
})

console.log(props)

      return(
        <Fragment>
        <PrincipalNavbar/>
        
        {cartItems?.length !== 0 
        ?
        <CartList
        phones={cartItems}
        handlePrices={handlePrices}/>
        :
        <AlertNot title="Your cart is empty" subTitle="Add a product"/>
        }

        <div className="total-price mx-5 my-3 h4">
            <div>Total:</div>
            <div>${totalPrice}</div>
        </div>

        <div className="cart-bottom">
        <ul className="targets">
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-amex.png?v=8520621043815746837" alt=""/></li>
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-discover.png?v=15964148746012845310" alt=""/></li>
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-visa.png?v=6040196078557944231" alt=""/></li>
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-mastercard.png?v=16363944199764266893" alt=""/></li>
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-maestro.png?v=13922460215154958981" alt=""/></li>
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-cirrus.png?v=8403282387988871874" alt=""/></li>
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-paypal.png?v=2424162660545891835" alt=""/></li>
            <li><img src="//cdn.shopify.com/s/files/1/0073/7148/9327/t/2/assets/cc-google.png?v=88643151820772209" alt=""/></li>
        </ul>

        <Link to={{
                        pathname: "/order-confirmed",     
                        from: props.location.pathname,
                  }}>
       <Button variant="dark">Confirm Order</Button>
       </Link>
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
