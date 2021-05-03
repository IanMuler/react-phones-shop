import React, { Fragment, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import LoginNavbar from '../components/LoginNavbar';
import { connect } from 'react-redux';   



function Login (props){

const {actualUser} = props;

    useEffect(()=>{
        if(Object.keys(actualUser).length !== 0){
            props.history.push("/")
        }         
    })
    
return (
    <Fragment>

        <LoginNavbar id="login-navbar"/>
        <LoginForm/>

    </Fragment>
);
}

const mapStateToProps = state => {
    return {
        actualUser: state.actualUser,
    }
}

export default connect(mapStateToProps, null)(Login);