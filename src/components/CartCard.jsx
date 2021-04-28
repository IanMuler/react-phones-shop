import React, {useEffect, useState} from 'react';
// import '../assets/styles/CartCard.css'
import { connect } from 'react-redux'
import { deleteCartItem } from '../actions';
import { withRouter } from 'react-router-dom'
import { Card, Button, Dropdown, DropdownButton } from 'react-bootstrap'

const PhoneCard = (props) => {
    
    const { actualUser } = props;    
    const [quantity, setQuantity] = useState(1);
    const finalPrice = parseFloat((props.price * quantity).toFixed(2))

    useEffect( () => {
        props.handlePrices(finalPrice, parseInt(props.id))
    })

    const handleDeleteButton = (itemId) => {
        props.deleteCartItem(itemId, actualUser)
    }

    const handleDropdown = (e) => {
        setQuantity(e.target.getAttribute("value"))
        
    }

    return(  
        <Card >
            <Card.Body className="d-flex flex-wrap-wrap row text-center">
                <div className="containerimg col-1 col-sm-2 my-auto">
                <Card.Img src={props.imgurl}></Card.Img>
                </div>
                <Card.Title className="offset-2 offset-sm-1 col-4 offset-lg-0 col-lg-4 my-auto">{props.brand} {props.model}</Card.Title>
                <div className="col-3 col-lg-1 my-auto d-flex">
                <DropdownButton variant="secondary" title={quantity}>
                    <Dropdown.Item onClick={handleDropdown} value={1}>1</Dropdown.Item>
                    <Dropdown.Item onClick={handleDropdown} value={2}>2</Dropdown.Item>
                    <Dropdown.Item onClick={handleDropdown} value={3}>3</Dropdown.Item>
                    <Dropdown.Item onClick={handleDropdown} value={4}>4</Dropdown.Item>
                </DropdownButton>   
                <Card.Text className="my-auto ml-3 ml-lg-5">
                ${finalPrice}
                </Card.Text>
                </div>
                <Button className="offset-4 col-4 offset-lg-2 col-lg-2 my-auto" variant="success" onClick={()=>{handleDeleteButton(props.id)}}> ✓ Added </Button>
            </Card.Body>
    </Card>
  );
}

const mapStateToProps = state => {
    return{
        actualUser: state.actualUser,
    }
}

const mapDispatchToProps = {
    deleteCartItem,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhoneCard));

