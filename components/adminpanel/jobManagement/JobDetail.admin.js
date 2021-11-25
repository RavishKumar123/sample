import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getJob } from '../../../actions/Jobs.Action';
import moment from "moment";
import ExtraJobDetails from './ExtraJobDetails';
import ReviewsJobDetails from './ReviewsJobDetails';

const JobDetailAdmin = ({ getJob , match , jobState }) => {
    const { job } = jobState;
    useEffect( () => {
        const id = match.params.id;
        getJob(id);
    },[]);
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
                                            <h2 className="d-blue chart-heading mt-2"><i className="fas fa-chevron-left" /> Job DETAIL</h2>
                                            <div className="clearfix" />
                                            <div className="grey-div py-md-3 py-2 my-3 pb-70">
                                                <div className="px-md-5 px-2">
                                                    <div className="row ">
                                                        <div className="col-12 text-md-right pl-0">
                                                            <h6 className="subH status"> Status: <span className="green">{job && job.status}</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-lg-4 mt-2">
                                                        <div className="col-md-2 col-12 pl-0">
                                                            <h6 className="subH">Job ID</h6>
                                                            <h6 className="lg-grey p_sm medium mt-1"> {job && job._id && job._id.substring(20)}</h6>
                                                        </div>
                                                        <div className="col-md-2 col-12 pl-0 mt-md-0 mt-1">
                                                            <h6 className="subH">Job Title</h6>
                                                            <h6 className="lg-grey p_sm medium mt-1"> {job && job.title}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-lg-4 mt-2">
                                                        <div className="col-md-6 col-12 pl-0">
                                                            <h6 className="subH">Job Description</h6>
                                                            <p className="lg-grey p_sm medium mt-1 report-para">{job && job.jobDescription}</p>
                                                        </div>
                                                        <div className="offset-md-2 col-md-4 col-12 pl-0">
                                                            <div className="mt-md-0 mt-1">
                                                                <h6 className="subH d-inline-block min-width2">Pickup Time</h6><h6 className="lg-grey p_sm medium d-inline-block "> {job && job.pickTime}</h6>
                                                            </div>
                                                            <div className="mt-1">
                                                                <h6 className="subH d-inline-block min-width2">Date</h6><h6 className="lg-grey p_sm medium d-inline-block"> {job && moment(job.date).format("MMM Do , YYYY")}</h6>
                                                            </div>
                                                            <div className="mt-1">
                                                                <h6 className="subH d-inline-block min-width2">Time</h6><h6 className="lg-grey p_sm medium d-inline-block"> {job && moment(job.date).format("HH:MM A")}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-lg-4 mt-2">
                                                        <div className="col-md-2 col-12 pl-0">
                                                            <h6 className="subH">Job Type</h6>
                                                            <h6 className="lg-grey p_sm medium mt-1"> {job && job.jobType}</h6>
                                                            <h6 className="subH mt-2">To</h6>
                                                            <h6 className="lg-grey p_sm medium mt-1"> {job && job.to}</h6>
                                                            <h6 className="subH mt-2">Items</h6>
                                                            {job && job.items && job.items.map( (item , index) => (
                                                                <a key={index} href="#/"><button className="greybtn">{item}</button></a>
                                                            ))}
                                                            {/* <a href="#_"><button className="greybtn">Safe</button></a> */}
                                                        </div>
                                                        <div className="col-md-2 col-12 pl-0 mt-md-0 mt-1">
                                                            <h6 className="subH">Vehicle Type</h6>
                                                            <h6 className="lg-grey p_sm medium mt-1"> {job && job.vehicleType}</h6>
                                                            <h6 className="subH mt-2">From</h6>
                                                            <h6 className="lg-grey p_sm medium mt-1"> {job && job.from}</h6>
                                                            <h6 className="subH mt-2">Budget</h6>
                                                            <h6 className="lg-grey p_sm medium mt-1"> {job && job.budget}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-lg-4 mt-2">
                                                        <div className="col-12 pl-0">
                                                            <h6 className="subH">Images</h6>
                                                        </div>
                                                        {job && job.jobImages && job.jobImages.map( (item , index) => (
                                                            <div key={index} className="col-sm-1 col-12 pl-0 mt-1 text-sm-left text-center">
                                                            <img src={item} className="img-fluid" />
                                                        </div>
                                                        ))}
                                                   </div>
                                                </div>
                                                <hr className="mt-sm-4 mt-2" />
                                                {job && job.status !== "pending" ? <><div className="px-md-5 px-2">
                                                    <ExtraJobDetails />
                                                    <div className="row mt-lg-4 mt-2">
                                                        <div className="col-12 pl-0">
                                                            <p className="bold black underline">RATING</p>
                                                        </div>
                                                        <div className="col-12 pl-0">
                                                            <i className="fas fa-star orange" />
                                                            <i className="fas fa-star orange" />
                                                            <i className="fas fa-star orange" />
                                                            <i className="fas fa-star orange" />
                                                            <i className="fas fa-star orange" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mt-sm-4 mt-2" />
                                                <ReviewsJobDetails /></> : null}
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
    )
}

const mapStateToProps = state =>({
    jobState: state.jobReducer
})

export default connect(mapStateToProps , { getJob })(JobDetailAdmin);
