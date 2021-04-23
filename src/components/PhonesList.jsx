import React, {useEffect} from 'react';
import PhoneCard from './PhoneCard';
import SearchNot from './SearchNot';

function PhonesList (props) {
    
const body = document.querySelector("body")

useEffect(()=>{
    body.classList.add("overflow-scroll")
})

useEffect(() => {
    return () => {
        body.classList.remove("overflow-scroll")
    }
}, [])

    const search = props.url.slice(8)

    let requestedPhones;

    if(props.url.includes("/search/")){
       requestedPhones = props.phones.filter(phone => search.toLowerCase() === phone.brand.toLowerCase())
       if(requestedPhones.length === 0){
        requestedPhones = props.phones.filter(phone => search.toLowerCase() === phone.model.toLowerCase())
        if(requestedPhones.length === 0)
        {return <SearchNot/>}
    }
    } else{
        requestedPhones = props.brand === "All"? 
        props.phones : 
        props.phones.filter(phone => props.brand === phone.brand);
    }
    
    return(
      <div className="row mt-5 mx-5 px-5">  
           {requestedPhones.map(phone =>
               <PhoneCard
               key={phone.model}   
               model={phone.model} 
               price={phone.price}
               imgurl={phone.imgurl}
               brand={phone.brand}               
               />
           )}
        
      </div>
);
}

export default PhonesList;