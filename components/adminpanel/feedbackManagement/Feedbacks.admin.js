import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getFeedbacks , deleteFeedback } from "../../../actions/User.action";

const FeedbacksAdmin = ({ userState, getFeedbacks }) => {
    const { feedbacks } = userState;
    const [Id , setId] = useState("");
    useEffect(() => {
        getFeedbacks("", 1, 10);
    }, []);

    const onDeleteFeedbacks = () => {
        deleteFeedback(Id);
        getFeedbacks("", 1, 10);
    }

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
                                            <h2 className="d-blue chart-heading mt-2">FEEDBACK</h2>
                                            {/* Basic dropdown */}
                                            <div className="float-right mb-3 mt-1">
                                                <button className="dropdown-toggle jobs-dropdown pt-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="jobs-text">Select</p><i className="fas fa-caret-down grey pr-1 dropdown-icon" />
                                                    </div>
                                                </button>
                                                <div className="dropdown-menu jobs-dropdown2">
                                                    <a className="dropdown-item p-0" href="#_"><p className="jobs-text">Contact Us Form</p></a>
                                                    <a className="dropdown-item p-0" href="reported-jobs-detail.html"><p className="jobs-text">Reported Jobs</p></a>
                                                </div>
                                            </div>
                                            {/* Basic dropdown */}
                                            <div className="clearfix" />
                                            <div className="d-flex mt-5 align-items-center justify-content-between flex-wrap">
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
                                                        <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{ width: '129.5px' }}>S.No</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Full name: activate to sort column ascending" style={{ width: '264.5px' }}>Full name</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Category: activate to sort column ascending" style={{ width: '339.5px' }}>Category</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="email address: activate to sort column ascending" style={{ width: '367.5px' }}>email address</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="action: activate to sort column ascending" style={{ width: '186.5px' }}>action</th></tr>
                                                    </thead>
                                                    <tbody>
                                                        {feedbacks && feedbacks.data.map( (item , index) => (
                                                            <tr key={index} role="row" className="odd">
                                                            <td className="sorting_1">{index+1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.type === "contact" ? "Contact Us Form" : "N/A"}</td>
                                                            <td>{item.email}</td>
                                                            <td>
                                                                <div className="btn-group mr-1 mb-1">
                                                                    <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" /></button>
                                                                    <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform' }}>
                                                                        <Link className="dropdown-item l-grey uppercase" to={`/admin/feedback/${item._id}`}><i className="l-grey fas fa-user-circle" />VIEW</Link>
                                                                        <a onClick={ () => setId(item._id)} className="dropdown-item l-grey uppercase" href="#" data-toggle="modal" data-target="#deletefeedback"><i className="l-grey fas fa-trash-alt" />DELETE</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        ))}
                                                    </tbody>
                                                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
                                            </div>
                                            <div className="modal fade" id="deletefeedback" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered " role="document">
                                                    <div className="modal-content">
                                                        <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                        <div className="px-5 pt-2 pb-5 text-center">
                                                            <img src="images/ban-user.png" alt="" className="img-fluid" />
                                                            <h3 className="bold black mt-1">SYSTEM MESSAGE</h3>
                                                            <p className="grey mt-1 bold f-18">Are you sure you want to delete this feedback?</p>
                                                            <div className="d-flex flex-wrap justify-content-center">
                                                                <a href="#/" onClick={onDeleteFeedbacks} data-dismiss="modal" aria-label="Close"><button className="px-4 mx-1 py-1 mt-2">Yes</button></a>
                                                                <a href="#/" data-dismiss="modal" aria-label="Close"><button className="px-4 mx-1 py-1 mt-2">No</button></a>
                                                            </div>
                                                        </div>
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
    )
}

const mapStateToProps = (state) => ({
    userState: state.userReducer
});

export default connect(mapStateToProps, { getFeedbacks , deleteFeedback })(FeedbacksAdmin)
