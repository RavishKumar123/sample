import React, { Fragment } from "react";
import { withRouter , useLocation , Link } from 'react-router-dom';

const ListingItem = ({item, index , setId , setName}) => {
    const { pathname } = useLocation();
    if(item.role === "user" && pathname === "/admin/users"){
        return (
        <tr key={index}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>
                    <div className="btn-group mr-1 mb-1">
                        <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-ellipsis-v" />
                        </button>
                        <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform' }}>
                            <Link className="dropdown-item l-grey uppercase" to={`/admin/user/${item._id}`}><i className="l-grey fas fa-user-circle" />View</Link>
                            <a onClick={() => {
                                setId(item._id);
                                setName(item.name);
                            }} className="dropdown-item l-grey uppercase" href="#" data-toggle="modal" data-target="#blockuser"><i className="l-grey fa fa-ban" />{item.status === "active" ? "BLOCK" : "UN-BLOCK"}</a>
                        </div>
                    </div>
                </td>
            </tr>
        );
    } else if(item.role === "driver" && pathname === "/admin/drivers"){
        return ( 
        <tr key={index}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>
                    <div className="btn-group mr-1 mb-1">
                        <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-ellipsis-v" />
                        </button>
                        <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform' }}>
                            {/* <a className="dropdown-item l-grey uppercase" href="driver-detail.html"><i className="l-grey fas fa-user-circle" />VIEW</a> */}
                            <Link className="dropdown-item l-grey uppercase" to={`/admin/user/${item._id}`}><i className="l-grey fas fa-user-circle" />View</Link>
                            <Link className="dropdown-item l-grey uppercase" to={`/admin/registered/${item._id}`}><i className="l-grey fas fa-car" />REGISTERED VEHICLES</Link>
                            {/* <a className="dropdown-item l-grey uppercase" href="#" data-toggle="modal" data-target="#blockdriver"><i className="l-grey fa fa-ban" />BLOCK</a> */}
                            <a onClick={() => {
                                setId(item._id);
                                setName(item.name);
                            }} className="dropdown-item l-grey uppercase" href="#" data-toggle="modal" data-target="#blockuser"><i className="l-grey fa fa-ban" />{item.status === "active" ? "BLOCK" : "UN-BLOCK"}</a>
                        </div>
                    </div>
                </td>
            </tr> 
        );
    }else {
        return null;
    }
}

export default withRouter(ListingItem);