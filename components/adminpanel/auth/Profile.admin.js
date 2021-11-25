import React from 'react';
import { connect } from 'react-redux';
import ChangePassword from './ChangePassword.admin';

const Profile = ({ authState }) => {
    const { current_user } = authState;
    return(
        <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                  <div className="card px-lg-4 px-2 user-management jost pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body user-subs table-responsive card-dashboard">
                        <h2 className="d-blue chart-heading mt-2">PROFILE</h2>
                        <div className="clearfix" />
                        <div className="row mt-md-5 mt-2">
                          <div className="col-md-3 col-12">
                            <h2 className="p_md medium d-blue p-1 profile-back">Profile Information</h2>
                            <div className="nav flex-column nav-pills profilepills py-1 pl-1 pr-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                              <a className="nav-link active medium py-1 lg-grey2" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-account" aria-selected="true">Account</a>
                              <a className="nav-link medium py-1 lg-grey2" id="v-pills-newpassword-tab" data-toggle="pill" href="#v-pills-newpassword" role="tab" aria-controls="v-pills-newpassword" aria-selected="false">New Password</a>
                            </div>
                          </div>
                          <div className="col-md-9 col-12 mt-md-0 mt-1">
                            <h4 className="bold border-b pb-1 lg-black">ACCOUNT</h4>
                            <div className="tab-content" id="v-pills-tabContent">
                              <div className="tab-pane fade show active" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">
                                <div className="pl-0 mt-md-4 mt-2">
                                  <h6 className="subH minwidth">First Name</h6>
                                </div>
                                <div className="pl-0 mt-1">
                                  <h6 className="lg-grey subH"> { current_user.first_name }</h6>
                                </div>
                                <div className="pl-0 mt-md-4 mt-2">
                                  <h6 className="subH minwidth">Last Name</h6>
                                </div>
                                <div className="pl-0 mt-1">
                                  <h6 className="lg-grey subH"> { current_user.last_name }</h6>
                                </div>
                                <div className="pl-0 mt-md-4 mt-2">
                                  <h6 className="subH minwidth">Email Address</h6>
                                </div>
                                <div className="pl-0 mt-1">
                                  <h6 className="lg-grey subH"> { current_user.email }</h6>
                                </div>
                                <div className="mt-2">
                                  <a href="#/"><button className="px-2">EDIT</button></a>
                                </div>
                              </div>
                            <ChangePassword />
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* // Basic form layout section end */}
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = state => ({
    authState: state.auth
})

export default connect(mapStateToProps , {})(Profile);