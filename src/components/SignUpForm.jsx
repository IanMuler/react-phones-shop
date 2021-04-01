import React from 'react';
import '../assets/SignUpForm.css';

function SignUpForm (){

return (
<div id="sign-up-body">
    <div id="title-form-btn">
        <h3 className="pb-1">Sign-up</h3>
        <form>
            <div id="sign-up-form">
                <div className="row">
                    <div className="form-group col-6">
                        <label className="text-muted">Name</label>
                        <input type="name" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group col-6">
                        <label className="text-muted">Surname</label>
                        <input type="surname" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label className="text-muted">ID</label>
                        <input type="id" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label className="text-muted" htmlFor="exampleInputEmail1">Mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="" />
                    </div>
                    <div className="form-group col-6">
                        <label className="text-muted" htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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

export default SignUpForm;