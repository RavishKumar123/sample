import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getVehicle } from '../../../actions/User.action';
import OwlCarousel from 'react-owl-carousel';

const VehicleDetails = ({ getVehicle , userState , match , history }) => {
    const { vehicle } = userState;

    useEffect( () => {
        const id = match.params.id;
        getVehicle(id);
    },[])
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
                        <h2 onClick={ () => history.goBack()} className="d-blue chart-heading mt-2"><i className="fas fa-chevron-left" /> VEHICLE DETAIL</h2>
                        <div className="clearfix" />
                        <div className="grey-div px-md-5 py-md-3 px-2 py-2 my-3 pb-70">
                          <img src={vehicle && vehicle.images && vehicle.images[0]} className="mb-2" />
                          <div className="py-1 border-b">
                            <h6 className="subH d-inline-block minwidth">Vehicle Type</h6><h6 className="lg-grey d-inline-block subH"> {vehicle && vehicle.type}</h6>
                          </div>
                          <div className="py-1 border-b">
                            <h6 className="subH d-inline-block minwidth">Brand Name</h6><h6 className="lg-grey d-inline-block subH"> {vehicle && vehicle.brandName}</h6>
                          </div>
                          <div className="py-1 border-b">
                            <h6 className="subH d-inline-block minwidth">Vehicle Name</h6><h6 className="lg-grey d-inline-block subH"> {vehicle && vehicle.name}</h6>
                          </div>
                          <div className="py-1 border-b">
                            <h6 className="subH d-inline-block minwidth">Vehicle Color</h6><h6 className="lg-grey d-inline-block subH"> {vehicle && vehicle.color}</h6>
                          </div>
                          <div className="py-1 border-b">
                            <h6 className="subH d-inline-block minwidth">License Palte Number</h6><h6 className="lg-grey d-inline-block subH"> {vehicle && vehicle.licensePlateNumber}</h6>
                          </div>
                          <div className="py-1 border-b">
                            <h6 className="subH d-inline-block minwidth">Vehicle Registration Date</h6><h6 className="lg-grey d-inline-block subH"> {vehicle && vehicle.registrationDate}</h6>
                          </div>
                          <div className="py-1 border-b">
                            <h6 className="subH d-inline-block minwidth">Status</h6><h6 className="lg-grey d-inline-block subH"> {vehicle && vehicle.status}</h6>
                          </div>
                          {/* <h4 className="medium black mt-2 mb-1">IMAGES</h4> */}
                          {/* <div className="owl-carousel owl-theme"> */}
                          <OwlCarousel className='owl-carousel owl-theme' loop margin={10} nav>
                          {vehicle && vehicle.images && vehicle.images.map ( (item , index) => (
                              <div key={index} className="item"><img src={item} alt="not found" className="testimonialImg" /></div>
                          ))}
                          </OwlCarousel>
                          {/* </div> */}
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

export default connect(mapStateToProps , { getVehicle })(VehicleDetails);