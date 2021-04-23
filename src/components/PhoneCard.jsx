import React, {useEffect, useState} from 'react';
import '../assets/styles/PhoneCard.css'
import { connect } from 'react-redux'
import { setCartItem, deleteCartItem } from '../actions';
import { withRouter } from 'react-router-dom'

const PhoneCard = (props) => {
    
    const { actualUser } = props;    
    
    const [isAdded, setIsAdded] = useState(false);
    
    useEffect(()=>{
        if(actualUser.cart?.find((item) => item.id === props.id)){
            setIsAdded(true)
        }
    }, [])

    const handleAddButton = () => {
        if(Object.keys(actualUser).length === 0){
            props.history.push("/login")
        } 
        props.setCartItem(
            {
            "id": props.id,  
            "brand":props.brand,
            "model":props.model, 
            "price":props.price,
            "imgurl":props.imgurl
            },
            actualUser
            )
        setIsAdded(true);
    }

    const handleDeleteButton = (itemId) => {
        props.deleteCartItem(itemId, actualUser)
        setIsAdded(false)
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
                
                {isAdded &&
                <button className="btn btn-success offset-4 col-4" onClick={()=>{handleDeleteButton(props.id)}}>✓ Added</button>
                }
                {!isAdded &&
                <button className="btn btn-secondary offset-4 col-4" onClick={handleAddButton}>+ Add</button>
                }      
                
                </div>     
            </div>  
        </div>    
    
  );
}

const mapStateToProps = state => {
    return{
        actualUser: state.actualUser,
    }
}

const mapDispatchToProps = {
    setCartItem,
    deleteCartItem,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhoneCard));

