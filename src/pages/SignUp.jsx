import React, { Fragment, useEffect } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginNavbar from '../components/LoginNavbar';
import { connect } from 'react-redux';   


function SignUp (props){

const {actualUser} = props;

useEffect(()=>{
    if(Object.keys(actualUser).length !== 0){
        props.history.push("/")
    }         
})
    
return (
    <Fragment>

        <LoginNavbar id="sign-up-nav"/>
        <SignUpForm/>

    </Fragment>
);
}


const mapStateToProps = state => {
    return {
        actualUser: state.actualUser,
    }
}

export default connect(mapStateToProps, null)(SignUp);