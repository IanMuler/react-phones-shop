import React, {useEffect, Fragment} from 'react';
import CartCard from './CartCard';

function CartList (props) {
    
const body = document.querySelector("body")

useEffect(()=>{
    body.classList.add("overflow-scroll")
})

useEffect(() => {
    return () => {
        body.classList.remove("overflow-scroll")
    }
}, [])

const requestedPhones = props.phones
    
return(
        <Fragment>

      <div className="mt-1 mx-1 px-1 mt-lg-5 mx-lg-5 px-lg-5"> 
           {requestedPhones?.map(phone =>
               <CartCard
               key={phone.id}
               id={phone.id}   
               model={phone.model} 
               price={phone.price}
               imgurl={phone.imgurl}
               brand={phone.brand}        
               handlePrices={props.handlePrices}       
               />
           )}
        
      </div>
      </Fragment>
);
}

export default CartList;