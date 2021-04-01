import React from 'react';
import '../assets/LoginForm.css';
import { Link } from 'react-router-dom';
function LoginForm (){

return (
<div id="login-body">
    <form id="login-form">

    <h3 className="text-center pb-4">Sign-in</h3>

    <div className="form-group">
        <label className="text-muted" htmlFor="exampleInputEmail1">Email or user</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="" />
        
    </div>
    <div className="form-group">
        <label className="text-muted" htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
    </div>
    <div className="row">
    <button type="submit" className="btn btn-primary col-6">Submit</button>
    <Link to="/sign-up" className="btn btn-light col-6">
    Sign up
    </Link>
    </div>
</form>
</div>
);
}

export default LoginForm;