import React, { Fragment } from 'react';

const ReviewsJobDetails = () => {
    return (
        <Fragment>
            <div className="px-md-5 px-2">
                <div className="row mt-lg-4 mt-2">
                    <div className="col-md-8 col-12 pl-0">
                        <p className="bold black underline">REVIEW</p>
                        <p className="lg-grey p_sm medium mt-1 report-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="row mt-lg-4 mt-2">
                    <div className="col-md-6 col-12 pl-0">
                        <p className="bold black underline">PAYMENT</p>
                        <div className="mt-1">
                            <h6 className="subH d-inline-block underline">User Transaction</h6>
                        </div>
                        <div className="mt-1">
                            <h6 className="subH d-inline-block min-width2">Cost</h6><h6 className="lg-grey p_sm medium d-inline-block"> $110</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 pl-0">
                        <div className="mt-1">
                            <h6 className="subH d-inline-block underline">Driver Transaction</h6>
                        </div>
                        <div className="mt-1">
                            <h6 className="subH d-inline-block min-width2">Job Budget</h6><h6 className="lg-grey p_sm medium d-inline-block"> $110</h6>
                        </div>
                        <div className="mt-1">
                            <h6 className="subH d-inline-block min-width2">Admin Commission</h6><h6 className="lg-grey p_sm medium d-inline-block"> $20</h6>
                        </div>
                        <div className="mt-1">
                            <h6 className="subH d-inline-block min-width2">Total Driver Recived</h6><h6 className="lg-grey p_sm medium d-inline-block"> $80s</h6>
                        </div>
                    </div>
                </div>
                <div className="row mt-lg-4 mt-2">
                    <div className="col-md-6 col-12 pl-0">
                        <p className="bold black underline">Admin Earned</p>
                        <div className="mt-1">
                            <h6 className="subH d-inline-block min-width2">Admin Earned</h6><h6 className="lg-grey p_sm medium d-inline-block"> $20</h6>
                        </div>
                        <div className="mt-1">
                            <h6 className="subH d-inline-block min-width2">Total Earned</h6><h6 className="lg-grey p_sm medium d-inline-block"> $20</h6>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ReviewsJobDetails;
