import React, { useEffect } from 'react';
import { connect  } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from '../../../actions/User.action';
import moment from 'moment';

const ViewUser = ({ getUser , userState , match }) => {
    const { user } = userState;
    useEffect( () => {
        const id = match.params.id;
        getUser(id);
    },[])
    return (
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
                                        <Link to="/admin/users"><h2 className="d-blue chart-heading mt-2"><i className="fas fa-chevron-left" /> USERS DETAILS</h2></Link>
                                            <div className="clearfix" />
                                            <div className="grey-div px-md-5 py-md-3 px-2 py-2 my-3 pb-70">
                                                <img src={user && user.image ? user.image :  `https://ui-avatars.com/api/${user && user.name} /64/615bbf/fff/2/0.5/true/true/true`} className="mb-2" />
                                                <div className="py-1 border-b">
                                                    <h6 className="subH d-inline-block minwidth">User ID</h6><h6 className="lg-grey d-inline-block subH"> {user && user._id && user._id.substring(20)}</h6>
                                                </div>
                                                <div className="py-1 border-b">
                                                    <h6 className="subH d-inline-block minwidth">Full Name</h6><h6 className="lg-grey d-inline-block subH"> {user && user.name}</h6>
                                                </div>
                                                <div className="py-1 border-b">
                                                    <h6 className="subH d-inline-block minwidth">User Registration Date</h6><h6 className="lg-grey d-inline-block subH"> {moment(user && user.createdAt).format("MMM Do YYYY")}</h6>
                                                </div>
                                                <div className="py-1 border-b">
                                                    <h6 className="subH d-inline-block minwidth">Email Address</h6><h6 className="lg-grey d-inline-block subH"> {user && user.email}</h6>
                                                </div>
                                                <div className="py-1 border-b">
                                                    <h6 className="subH d-inline-block minwidth">Phone Number</h6><h6 className="lg-grey d-inline-block subH"> {user && user.phone}</h6>
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
    userState: state.userReducer
})

export default connect(mapStateToProps , { getUser })(ViewUser);