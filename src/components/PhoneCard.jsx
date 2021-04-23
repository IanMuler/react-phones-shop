import React, {useState} from 'react';
import '../assets/styles/PhoneCard.css'
//import { Link } from 'react-router-dom'

const PhoneCard = (props) => {

    const [btnClass, setBtnClass] = useState("btn btn-secondary offset-4 col-4");
    const [btnText, setBtnText] = useState("+ Add");
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = () => {
        if (isAdded === false){
        setBtnClass("btn btn-success offset-4 col-4")
        setBtnText("✓ Added")
        setIsAdded(true)
        } else {
            setBtnClass("btn btn-secondary offset-4 col-4")
            setBtnText("+ Add")
            setIsAdded(false)
        }
        
    }
      return(  
        <div className= "card col-md-6 col-lg-4 product text-center">
            <div className="containerimg">
                <img  src={props.imgurl} className="card-img-top pt-4" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title"> {props.brand} {props.model}</h5>
                <p className="card-text">${props.price}</p>
                <div className="row">
                <button className={btnClass} onClick={onAdd}>{btnText}</button>
                </div>     
            </div>  
        </div>    
    
  );
}

export default PhoneCard;

