import React, {useEffect, Fragment} from 'react';
import PhoneCard from './PhoneCard';
import AlertNot from './AlertNot';
import BrandBanner from './BrandBanner';
import { connect } from 'react-redux'

function PhonesList (props) {
 
const { search } = props;
const body = document.querySelector("body")

useEffect(()=>{
    body.classList.add("overflow-scroll")
})

useEffect(() => {
    return () => {
        body.classList.remove("overflow-scroll")
    }
}, [])

    let requestedPhones;

    if(props.url.includes("/search")){
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
        <Fragment>

    { ["Nokia","Samsung","Xiaomi"].some(brand => brand === props.brand) &&
    <BrandBanner brand={props.brand}/>
    }

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
      </Fragment>
);
}

const mapStateToProps = state => {
    return{
        search: state.search,
    }
}

export default connect(mapStateToProps,null)(PhonesList);