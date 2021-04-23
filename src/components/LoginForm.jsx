import React, {useState } from 'react';
import '../assets/styles/LoginForm.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions'
import { Alert } from 'react-bootstrap'

function LoginForm (props){

const { usersData } = props;
const usersAccounts = usersData.map((data, i) => usersData[i].login);

const [loginValues, setLoginValues] = useState({
    username:"",
    password:""
})

const [formWrong, setFormWrong]= useState(false)


const handleChange = (e) => {
    setLoginValues({
        ...loginValues,
        [e.target.name] : e.target.value,
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
     if(usersAccounts.find(item => item.username === loginValues.username &&
                                   item.password === loginValues.password))
         {
            props.loginRequest(loginValues);
            props.history.push("/")
         } else {
             setFormWrong(true);
         }

}

return (
<div id="login-body">
    <form id="login-form" onSubmit={handleSubmit}>

    <h3 className="text-center pb-4">Sign-in</h3>

    <div className="form-group">
        <label className="text-muted" htmlFor="exampleInputEmail1">User</label>
        <input onChange={handleChange} name="username" type="user" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="admin" value={loginValues.email}  required/>
        
    </div>
    <div className="form-group">
        <label className="text-muted" htmlFor="exampleInputPassword1">Password</label>
        <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="12345" value={loginValues.password} required/>
    </div>
    <div className="row">
    <button type="submit" className="btn btn-primary col-6">Submit</button>
    <Link to="/sign-up" className="btn btn-light col-6">
    Sign up
    </Link>
    </div>
</form>

{formWrong &&
<Alert id="form-alert" variant='danger'>
    User or Password wrong!
</Alert>}
</div>
);
}

const mapStateToProps = (state) => {
    return{
        usersData: state.usersData
    }
}

const mapDispatchToProps = {
    loginRequest,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));