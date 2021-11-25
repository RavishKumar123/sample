import React from 'react'

const ExtraJobDetails = () => {
    return (
        <div className="row mt-lg-4 mt-2">
            <div className="col-md-6 col-12 pl-0">
                <p className="bold black underline">DRIVER DETAILS</p>
                <div className="mt-1">
                    <h6 className="subH d-inline-block minwidth">Driver Name</h6><h6 className="lg-grey p_sm medium d-inline-block "> Mark Carson</h6>
                </div>
                <div className="mt-1">
                    <h6 className="subH d-inline-block minwidth">Driver Email Address</h6><h6 className="lg-grey p_sm medium d-inline-block"> markcarson@abc.com</h6>
                </div>
                <div className="mt-1">
                    <h6 className="subH">Images</h6>
                    <div className="row">
                        <div className="col-sm-2  mt-1 text-sm-left text-center">
                            <img src={`${process.env.PUBLIC_URL}/images/testimonial.png`} className="img-fluid" />
                        </div>
                        <div className="col-sm-2  mt-1 text-sm-left text-center">
                            <img src={`${process.env.PUBLIC_URL}/images/testimonial.png`} className="img-fluid" />
                        </div>
                        <div className="col-sm-2  mt-1 text-sm-left text-center">
                            <img src={`${process.env.PUBLIC_URL}/images/testimonial.png`} className="img-fluid" />
                        </div>
                        <div className="col-sm-2  mt-1 text-sm-left text-center">
                            <img src={`${process.env.PUBLIC_URL}/images/testimonial.png`} className="img-fluid" />
                        </div>
                        <div className="col-sm-2  mt-1 text-sm-left text-center">
                            <img src={`${process.env.PUBLIC_URL}/images/testimonial.png`} className="img-fluid" />
                        </div>
                        <div className="col-sm-2  mt-1 text-sm-left text-center">
                            <img src={`${process.env.PUBLIC_URL}/images/testimonial.png`} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-12 pl-0 mt-md-0 mt-1">
                <p className="bold black underline">VEHICLE DETAILS</p>
                <div className="mt-1">
                    <h6 className="subH d-inline-block minwidth">Vehicle Name</h6><h6 className="lg-grey p_sm medium d-inline-block "> Abc</h6>
                </div>
                <div className="mt-1">
                    <h6 className="subH d-inline-block minwidth">Vehicle Color</h6><h6 className="lg-grey p_sm medium d-inline-block"> Black</h6>
                </div>
                <div className="mt-1">
                    <h6 className="subH d-inline-block minwidth">License Plate Number</h6><h6 className="lg-grey p_sm medium d-inline-block"> bc012</h6>
                </div>
            </div>
        </div>
    )
}

export default ExtraJobDetails;
