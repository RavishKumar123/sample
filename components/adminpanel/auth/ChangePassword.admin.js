import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { changePassword } from '../../../actions/Auth.Action';

const ChangePassword = ({ changePassword }) => {
    const { handleSubmit, register, errors, getValues } = useForm();
    const [formData , setFormData] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const onChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value });
    }

    const onChangePassword = (data , e) => {
        e.preventDefault();
        changePassword(formData.newPassword);
    }
    return(
        <div className="tab-pane fade" id="v-pills-newpassword" role="tabpanel" aria-labelledby="v-pills-newpassword-tab">
            <form onSubmit={handleSubmit(onChangePassword)}>
        <h2 className="p_md medium black mt-md-3 mt-2">New Password</h2>
        <fieldset className="form-group position-relative cutomwidth3">
          <input type="password" name="newPassword" ref={register({ required: true, minLength: 6 })} onChange={onChange} className="form-control mt-1 profileinput" id="iconLeft7" />
          <div className="form-control-position">
            <a href="#/"><i className="fas fa-eye-slash pwdicon" /></a>
          </div>
        </fieldset>
        {errors.newPassword && errors.newPassword.type === "required" && <span className="text-danger">This field is required</span>}
        {errors.newPassword && errors.newPassword.type === "minLength" && <span className="text-danger">Password must have at least 6 characters</span>}
        <h2 className="p_md medium black mt-1">Confirm New Password</h2>
        <fieldset className="form-group position-relative cutomwidth3">
          <input type="password" name="confirmPassword" ref={register({
                                                validate: {
                                                    matchesPreviousPassword: (value) => {
                                                        const { newPassword } = getValues();
                                                        return newPassword === value || 'Passwords should match!';
                                                    }
                                                }
                                            })} onChange={onChange} className="form-control mt-1 profileinput" id="iconLeft7" />
          <div className="form-control-position">
            <a href="#/"><i className="fas fa-eye-slash pwdicon" /></a>
          </div>
        </fieldset>
        {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
        <div className="mt-2">
          {/* <a href="#/"> */}
              <button type="submit" className="px-2">SAVE</button>
              {/* </a> */}
        </div>
        </form>
      </div>
    )
}

export default connect(null , { changePassword })(ChangePassword);