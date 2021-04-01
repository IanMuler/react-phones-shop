import React, { Fragment } from 'react';
import LoginForm from '../components/LoginForm';
import LoginNavbar from '../components/LoginNavbar';


function Login (){
    
return (
    <Fragment>

        <LoginNavbar id="login-navbar"/>
        <LoginForm/>

    </Fragment>
);
}

export default Login;