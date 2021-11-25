import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter, useLocation } from "react-router-dom";
import { getUsers , blockUser  } from "../../../actions/User.action";
import ListingItem from "./ListingItem";

const Users = ({ history, getUsers, userstate , blockUser }) => {
    const { users } = userstate;
    const { pathname } = useLocation();
    const [type, setType] = useState("active");
    const [Id , setId] = useState("");
    const [name , setName] = useState("");
    
    useEffect(() => {
        getUsers("", "1", "10", type);
    }, [type]);

    const onBlockUser = () => {
        const payload = {
            id: Id,
            status: type === "active" ? "inactive" : "active"
        }
        blockUser(payload);
        getUsers("", "1", "10", type === "active" ? "active" : "inactive");
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
                                            {type === "active" ? <h2 className="d-blue chart-heading mt-2">USERS</h2> : <h2 onClick={ () => setType("active")} class="d-blue chart-heading mt-2"><i class="fas fa-chevron-left"></i> BLOCKED USERS</h2>}
                                            
                                            <div className="clearfix" />
                                            {type === "active" ? <div className="text-right mt-1">
                                                <Link onClick={() => setType("inactive")} to="#/"><button type="button" className="apply-btn ml-2 redbtn px-2">BLOCKED USERS</button> </Link>
                                            </div> : null}
                                            <div className="d-flex mt-1 align-items-center justify-content-between flex-wrap">
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
                                                        <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{ width: '128.5px' }}>S.No</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Use id: activate to sort column ascending" style={{ width: '157.5px' }}>Use id</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Full name: activate to sort column ascending" style={{ width: '257.5px' }}>Full name</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="email address: activate to sort column ascending" style={{ width: '353.5px' }}>email address</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="status: activate to sort column ascending" style={{ width: '186.5px' }}>status</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="action: activate to sort column ascending" style={{ width: '185.5px' }}>action</th></tr>
                                                    </thead>
                                                    <tbody>
                                                        {users && users.data.map((item, index) => <ListingItem item={item} index={index} setId={setId} setName={setName}  /> )}
                                                    </tbody>
                                                </table>
                                                </div>
                                                </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-5">
                                                            <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-7">
                                                            <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                                                <ul className="pagination">
                                                                    <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                                                                        <a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a>
                                                                    </li>
                                                                    <li className="paginate_button page-item active">
                                                                        <a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
                                                                    </li>
                                                                    <li className="paginate_button page-item next disabled" id="DataTables_Table_0_next">
                                                                        <a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">Next</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id="blockuser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered " role="document">
                                                    <div className="modal-content">
                                                        <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                        <div className="px-5 pt-2 pb-5 text-center">
                                                            <img src={`${process.env.PUBLIC_URL}/images/ban-user.png`} alt="" className="img-fluid" />
                                                            <h3 className="bold black mt-1">SYSTEM MESSAGE</h3>
                                                            <p className="grey mt-1 bold f-18">Are you sure you want to {type === "active" ? "block" : "unblock" } this user?</p>
                                                            <div className="d-flex flex-wrap justify-content-center">
                                                                <a href="#/" onClick={onBlockUser} data-toggle="modal" data-target="#blockuseradded" data-dismiss="modal" aria-label="Close">
                                                                    <button type="button" className="px-4 mx-1 py-1 mt-2">Yes</button>
                                                                </a>
                                                                <a href="#/" data-dismiss="modal" aria-label="Close">
                                                                    <button className="px-4 mx-1 py-1 mt-2">No</button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id="blockuseradded" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered " role="document">
                                                    <div className="modal-content">
                                                        <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                        <div className="px-5 pt-3 pb-5 text-center">
                                                            <img src="images/green-check.png" alt="" className="img-fluid" />
                                                            <p className="grey mt-1 bold f-18">{name} user has been {type === "active" ? "blocked" : "unblocked" }</p>
                                                            <div className="text-center">
                                                                <a href="#/" data-dismiss="modal" aria-label="Close"><button className="px-3 mx-1 py-1 mt-2">GOT IT</button></a>
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
    );
}

const mapStateToProps = state => ({
    userstate: state.userReducer
});

export default connect(mapStateToProps, { getUsers , blockUser })(withRouter(Users));