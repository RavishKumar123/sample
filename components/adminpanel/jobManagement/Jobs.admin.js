import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getJobs } from '../../../actions/Jobs.Action';
import moment from "moment";
import { Link } from "react-router-dom";

const JobsAdmin = ({ getJobs ,jobState }) => {
    const { jobs } = jobState;
    useEffect( () => {
        getJobs("",1,10);
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
                                            <h2 className="d-blue chart-heading mt-2">JOBS</h2>
                                            {/* Basic dropdown */}
                                            <div className="float-right mb-3 mt-1">
                                                <button className="dropdown-toggle jobs-dropdown pt-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="jobs-text">Select</p><i className="fas fa-caret-down grey pr-1 dropdown-icon" />
                                                    </div>
                                                </button>
                                                <div className="dropdown-menu jobs-dropdown2" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(1148px, 134px, 0px)', top: '0px', left: '0px', willChange: 'transform' }}>
                                                    <a className="dropdown-item p-0" href="scheduled-jobs.html">
                                                        <p className="jobs-text">Scheduled Jobs</p>
                                                    </a>
                                                    <a className="dropdown-item p-0" href="jobs-inprocess.html">
                                                        <p className="jobs-text">In Progress Jobs</p>
                                                    </a>
                                                    <a className="dropdown-item p-0" href="job-detail.html">
                                                        <p className="jobs-text">Complete Jobs</p>
                                                    </a>
                                                    <a className="dropdown-item p-0" href="cancelled-jobs.html">
                                                        <p className="jobs-text">Cancelled Jobs</p>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Basic dropdown */}
                                            <div className="clearfix" />
                                            <div className="d-flex mt-5 align-items-center justify-content-between flex-wrap ">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <p className="grey">Show</p>
                                                    <input type="number" className="namber ml-1" name id />
                                                    <p className="grey ml-1">Entries</p>
                                                </div>
                                                <fieldset className="form-group position-relative custom-width">
                                                    <input type="text" className="form-control mt-1 categorymodal " id="iconLeft7" placeholder="Search" />
                                                    <div className="form-control-position">
                                                        <i className="fas fa-search black" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="clearfix" />
                                            <div className="maain-tabble">
                                                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="DataTables_Table_0" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-striped table-bordered zero-configuration dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                                    <thead>
                                                        <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{ width: '76.5px' }}>S.No</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="job id: activate to sort column ascending" style={{ width: '99.5px' }}>job id</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="job title: activate to sort column ascending" style={{ width: '147.5px' }}>job title</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="job type: activate to sort column ascending" style={{ width: '142.5px' }}>job type</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="vehicle type: activate to sort column ascending" style={{ width: '204.5px' }}>vehicle type</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="budget: activate to sort column ascending" style={{ width: '124.5px' }}>budget</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="status: activate to sort column ascending" style={{ width: '138.5px' }}>status</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="date: activate to sort column ascending" style={{ width: '165.5px' }}>date</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="action: activate to sort column ascending" style={{ width: '114.5px' }}>action</th></tr>
                                                    </thead>
                                                    <tbody>
                                                        {jobs && jobs.data.map( (item , index) => (
                                                            <tr key={index} role="row" className="odd">
                                                            <td className="sorting_1">{index+1}</td>
                                                            <td>{item._id.substring(20)}</td>
                                                            <td>{item.title}</td>
                                                            <td>{item.jobType}</td>
                                                            <td>{item.vehicleType}</td>
                                                            <td>{item.budget}</td>
                                                            <td>{item.status}</td>
                                                            <td>{moment(item.date).format("MMM Do YYYY")}</td>
                                                            <td>
                                                                <div className="btn-group mr-1 mb-1">
                                                                    <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" /></button>
                                                                    <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform' }}>
                                                                        <Link className="dropdown-item l-grey uppercase" to={`/admin/job/${item._id}`}><i className="l-grey fas fa-user-circle" />VIEW</Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        ))}
                                                        </tbody>
                                                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

const mapsStateToProps = state => ({
    jobState: state.jobReducer
})

export default connect(mapsStateToProps , { getJobs })(JobsAdmin);
