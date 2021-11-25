import React from "react";

const Dashboard = () => {
    return(
        <div className="app-content user-management content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="card  pad-20 mx-5 mt-2 rounded-1">
                <div className="card-content collapse show">
                  <div className="card-body table-responsive card-dashboard">
                    <div className="row">
                      <div className="col-12">
                        <div className="clearfix" />
                        <div className="row card-body">
                          <div className="col-lg-12">
                            <h2 className="d-blue chart-heading">ADMIN DASHBOARD</h2>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="dash-card-inner black py-2">
                              <div className="d-flex flex-wrap justify-content-around align-items-center">
                                <i className="fas fa-credit-card pt-2" />
                                <div>
                                  <h3 className="f-18 bold d-blue mt-sm-0 mt-1">TOTAL REVENUE</h3>
                                  <h5 className="bold mt-1 d-blue f-30 text-sm-right text-center">$45650</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="dash-card-inner black py-2">
                              <div className="d-flex flex-wrap justify-content-around align-items-center">
                                <i className="fas pt-2 fa-briefcase" />
                                <div>
                                  <h3 className="f-18 bold d-blue mt-sm-0 mt-1">TOTAL JOBS</h3>
                                  <h5 className="bold mt-1 d-blue f-30 text-sm-right text-center">300+</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="dash-card-inner black py-2">
                              <div className="d-flex flex-wrap justify-content-around align-items-center">
                                <i className="fas pt-2 fa-users" />
                                <div>
                                  <h3 className="f-18 bold d-blue mt-sm-0 mt-1">TOTAL USERS</h3>
                                  <h5 className="bold mt-1 d-blue f-30 text-sm-right text-center">150+</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6 mt-3">
                            <div className="dash-card-inner black py-2">
                              <div className="d-flex flex-wrap justify-content-around align-items-center">
                                <i className="fas pt-2 fa-car" />
                                <div>
                                  <h3 className="f-18 bold d-blue mt-sm-0 mt-1">TOTAL DRIVERS</h3>
                                  <h5 className="bold mt-1 d-blue f-30 text-sm-right text-center">100+</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="bottom tickets mt-md-5 mt-2"> 
                      <div className="row card-body">
                        <div className="col-lg-6">
                          <h2 className="d-blue chart-heading">SALES ANALYTICS</h2>
                        </div>
                        <div className="col-lg-6 text-lg-right text-left">
                          <select name id="year" className="site-input">
                            <option value>Select Year</option>
                            <option value>2012</option>
                            <option value>2012</option>
                            <option value>2012</option>
                            <option value>2012</option>
                            <option value>2012</option>
                          </select>
                        </div>
                      </div>                            
                      <div className="chart-main position-relative">
                        <div className="row">
                          <div className="col-12">
                            <div id="column-chart" className="height-400 echart-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body user-subs table-responsive card-dashboard">
                      <div className="col-lg-12">
                        <h2 className="d-blue chart-heading mt-md-5 mt-2">LATEST JOBS</h2>
                      </div>
                      <div className="clearfix" />
                      <div className="clearfix" />
                      <div className="maain-tabble">
                        <table className="table table-striped table-bordered zero-configuration">
                          <thead>
                            <tr>
                              <th>job id</th>
                              <th>job title</th>
                              <th>job type </th>
                              <th>vehicle type</th>
                              <th>budget</th>
                              <th>status</th>
                              <th>date</th>
                            </tr>
                          </thead>
                          <tbody>                          
                            <tr>  
                              <td>01</td>
                              <td> XYZ Tilte</td>
                              <td> Relocate</td>
                              <td> Car</td>
                              <td>$100.00</td>
                              <td>Pending</td>
                              <td>Oct 20, 2020</td>
                            </tr>
                            <tr>  
                              <td>01</td>
                              <td> XYZ Tilte</td>
                              <td> Relocate</td>
                              <td> Car</td>
                              <td>$100.00</td>
                              <td>Pending</td>
                              <td>Oct 20, 2020</td>
                            </tr>
                            <tr>  
                              <td>01</td>
                              <td> XYZ Tilte</td>
                              <td> Relocate</td>
                              <td> Car</td>
                              <td>$100.00</td>
                              <td>Pending</td>
                              <td>Oct 20, 2020</td>
                            </tr>
                            <tr>  
                              <td>01</td>
                              <td> XYZ Tilte</td>
                              <td> Relocate</td>
                              <td> Car</td>
                              <td>$100.00</td>
                              <td>Pending</td>
                              <td>Oct 20, 2020</td>
                            </tr>
                            <tr>  
                              <td>01</td>
                              <td> XYZ Tilte</td>
                              <td> Relocate</td>
                              <td> Car</td>
                              <td>$100.00</td>
                              <td>Pending</td>
                              <td>Oct 20, 2020</td>
                            </tr>
                            <tr>  
                              <td>01</td>
                              <td> XYZ Tilte</td>
                              <td> Relocate</td>
                              <td> Car</td>
                              <td>$100.00</td>
                              <td>Pending</td>
                              <td>Oct 20, 2020</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>      
                </div>
              </div>
            </section></div>
        </div>
        {/* // Basic form layout section end */}
      </div>
    )
}

export default Dashboard;