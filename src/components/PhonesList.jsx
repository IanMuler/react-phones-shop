import React, {useEffect} from 'react';
import PhoneCard from './PhoneCard';
import AlertNot from './AlertNot';

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

    const search = props.url.slice(8) // toma la busqueda desde el link

    let requestedPhones;

    if(props.url.includes("/search/")){
       requestedPhones = props.phones.filter(phone => search.toLowerCase() === phone.brand.toLowerCase())
       if(requestedPhones.length === 0){
        requestedPhones = props.phones.filter(phone => search.toLowerCase() === phone.model.toLowerCase())
        if(requestedPhones.length === 0)
        {return <AlertNot title="Search not found" subTitle="Try again"/>}
    } 
    }
    else if(props.url === "/cart"){
        requestedPhones = props.phones
    }
    else{
        requestedPhones = props.brand === "All"? 
        props.phones : 
        props.phones.filter(phone => props.brand === phone.brand);
    }
    
    return(
      <div className="row mt-5 mx-5 px-5">  
           {requestedPhones?.map(phone =>
               <PhoneCard
               key={phone.id}
               id={phone.id}   
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