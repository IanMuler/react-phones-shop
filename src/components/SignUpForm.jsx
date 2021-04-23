import React, {useState} from 'react';
import '../assets/styles/SignUpForm.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { SignUpRequest } from '../actions'
 
function SignUpForm (props){

const [signUpValues, setSignUpValues] = useState({
        username:"",
        password:""
    })

const handleChange = (e) => {
    setSignUpValues({
            ...signUpValues,
            [e.target.name] : e.target.value,
        })
    }
    
const handleSubmit = (e) => {
        e.preventDefault();
        props.SignUpRequest(signUpValues);
        props.history.push("/")
    }

return (
<div id="sign-up-body">
    <div id="title-form-btn">
        <h3 className="pb-1">Sign-up</h3>
        <form onSubmit={handleSubmit}>
            <div id="sign-up-form">
                <div className="row">
                    <div className="form-group col-6">
                        <label className="text-muted">Name</label>
                        <input type="name" className="form-control" placeholder="" required/>
                    </div>
                    <div className="form-group col-6">
                        <label className="text-muted">Surname</label>
                        <input type="surname" className="form-control" placeholder=""  required/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label className="text-muted">User</label>
                        <input type="user" name="username" onChange={handleChange} value={signUpValues.username} className="form-control" placeholder=""  required/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label className="text-muted" htmlFor="exampleInputEmail1">Mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder=""  required/>
                    </div>
                    <div className="form-group col-6">
                        <label className="text-muted" htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" onChange={handleChange} value={signUpValues.password} className="form-control" id="exampleInputPassword1" placeholder=""  required/>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"  required/>
                    <label className="form-check-label pb-3" htmlFor="exampleCheck1">I agree to the <a
                            className="link-primary" href="/">terms and conditions</a></label>
                </div>
            </div>
            <div className="row m-0 mt-3">
                <button type="submit" className="btn btn-light col-6">Submit</button>
            </div>
        </form>

    </div>
</div>
);
}

const mapDispatchToProps = {
    SignUpRequest,
}

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm));