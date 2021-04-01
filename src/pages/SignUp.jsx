import React, { Fragment } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginNavbar from '../components/LoginNavbar';


function SignUp (){
    
return (
    <Fragment>

        <LoginNavbar id="sign-up-nav"/>
        <SignUpForm/>

    </Fragment>
);
}

export default SignUp;