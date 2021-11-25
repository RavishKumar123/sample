import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login , forgetPassword , verifyCode , setPassword  } from "../../../actions/Auth.Action";

const Login = ({ login , forgetPassword , verifyCode , setPassword , history , authState }) => {
    const { code } = authState;
    const { handleSubmit, register, errors } = useForm();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        recoverEmail: "",
        code: "",
        recoverPassword: ""
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const onLogin = (data, e) => {
        delete formData.recoverEmail;
        delete formData.code;
        delete formData.recoverPassword;
        formData.is_admin = true;
        login(formData , history);
    }
    
    const onForgetPassword = (e) => {
        e.preventDefault();
        forgetPassword(formData.recoverEmail);
    }

    const onVerifyCode = (e) => {
        e.preventDefault();
        verifyCode(formData.code);
    }

    const onsetNewPassword = (e) => {
        e.preventDefault();
        setPassword(formData.recoverPassword , code);
    }

    return (
        <section className="admin-login">
            <div className="admin-login-card p-70">
                <img src="images/logo.png" alt="" className="img-fluid" />
                <h2 className="semibold d-pur mt-md-4 mt-2">Admin Login</h2>
                <h4 className="d-pur p-sm mt-md-3 mt-2">Login To Your Account</h4>
                <form onSubmit={handleSubmit(onLogin)}>
                    <div className="text-left mt-5">
                        <div className="md-form md-outline input-with-pre-icon">
                            <i className="fas fa-envelope  input-prefix" />
                            <input type="email" name="email" ref={register({
                                required: true, 
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })} onChange={onChange} id="prefixInside2" className="form-control py-3" placeholder="Enter Email Address" />
                        </div>
                        {errors.email && errors.email.type === "required" && <span className="text-danger">Email field is required</span>}
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        <div className="md-form md-outline input-with-pre-icon">
                            <i className="fas fa-lock  input-prefix" />
                            <input type="password" name="password" onChange={onChange} ref={register({ required: true })} id="prefixInside2" className="form-control py-3" placeholder="Enter Password" />
                            <i className="fas fa-eye-slash hide-pass l-grey" />
                            {errors.password && <span className="text-danger">Password field is required</span>}
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <input type="checkbox" id name className="custom-check" defaultValue="Remember me" />
                                <label className="medium p_md l-grey ml-2" htmlFor>Remember me</label>
                            </div>
                            <a href="#_" data-toggle="modal" className="clr_blue underline" data-target="#pwdrecovery1">Forgot Password?</a>
                        </div>
                        {/* <a href="dashboard.html"> */}
                            <button type="submit" className="w-100 mt-4 py-4">LOGIN</button>
                            {/* </a> */}
                        <div className="mt-5 text-center">
                            <a href="#/" className="clr_blue bold underline">
                                <i className="fas fa-arrow-left mr-2 clr_blue" />
                                <p className="d-inline"> Back To Website</p>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal fade" id="pwdrecovery1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                    <div className="modal-content pwdmodal">
                        <button type="button" className="close text-right mr-5 mt-4" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <form onSubmit={onForgetPassword}>
                        <div className="p-70 pt-0">
                            <h2 className="semibold d-pur mt-4">Password Recovery</h2>
                            <div className="md-form md-outline input-with-pre-icon">
                                <i className="fas fa-envelope  input-prefix" />
                                <input type="email" name="recoverEmail" onChange={onChange} id="prefixInside2" className="form-control py-3" placeholder="Enter Email Address" required />
                            </div>
                            {/* <a href="#_"> */}
                                <button type="submit" className="w-100 py-4">CONTINUE</button>
                            {/* </a> */}
                            <a href="#/" onClick={ () => window.$('#pwdrecovery1').modal('hide')} className="clr_blue bold underline mt-4"><i className="fas fa-arrow-left clr_blue mr-2 mt-4" /> Back To Login</a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pwdrecovery2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                    <div className="modal-content pwdmodal">
                        <button type="button" className="close text-right mr-5 mt-4" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <form onSubmit={onVerifyCode}>
                        <div className="p-70 pt-0">
                            <h2 className="semibold d-pur mt-4">Password Recovery</h2>
                            <div className="md-form md-outline mb-0 input-with-pre-icon">
                                <i className="fas fa-pencil-alt  input-prefix" />
                                <input type="number" name="code" onChange={onChange} id="prefixInside2" className="form-control py-3" placeholder="Enter Verification Code" required />
                            </div>
                            <div className="text-right mt-4">
                                <a href="#_" className="clr_blue bold underline">Did not receive email? Send Again 30 sec</a>
                            </div>
                            {/* <a href="#_"> */}
                                <button type="submit" className="w-100 mt-4 py-4" data-toggle="modal" data-target="#pwdrecovery3" data-dismiss="modal" aria-label="Close">CONTINUE</button>
                            {/* </a> */}
                            <a href="#/" onClick={ () => window.$('#pwdrecovery1').modal('hide')} className="clr_blue bold underline mt-4"><i className="fas fa-arrow-left clr_blue mr-2 mt-4" /> Back To Login</a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pwdrecovery3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                    <div className="modal-content pwdmodal">
                        <button type="button" className="close text-right mr-5 mt-4" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <form onSubmit={onsetNewPassword}>
                        <div className="p-70 pt-0">
                            <h2 className="semibold d-pur mt-4">Password Recovery</h2>
                            <div className="md-form md-outline input-with-pre-icon">
                                <i className="fas fa-key  input-prefix" />
                                <input type="text" name="recoverPassword" onChange={onChange} id="prefixInside2" className="form-control py-3" placeholder="Enter Password" required />
                                <i className="fas fa-eye-slash hide-pass l-grey" />
                            </div>
                            <div className="md-form md-outline input-with-pre-icon">
                                <i className="fas fa-key  input-prefix" />
                                <input type="text" id="prefixInside2" className="form-control py-3" placeholder="Retype Password" />
                                <i className="fas fa-eye-slash hide-pass l-grey" />
                            </div>
                            {/* <a href="#/" onClick={ () => window.$('#pwdrecovery1').modal('hide')}> */}
                                <button type="submit" className="w-100 py-4">UPDATE</button>
                                {/* </a> */}
                            <a href="#_" className="clr_blue bold underline mt-4"><i className="fas fa-arrow-left clr_blue mr-2 mt-4" /> Back To Login</a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    authState: state.auth
});

export default connect(mapStateToProps , { login , forgetPassword , verifyCode , setPassword })(withRouter(Login));