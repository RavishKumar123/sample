import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
    const [openUser , setOpenUSer] = useState(false);

    return (
        <div className="main-menu menu-fixed mt-2 menu-light black_bck menu-accordion">
            <div className="main-menu-content">
                <ul className="navigation">
                    <li className="nav-item">
                        <Link to={{pathname: "/admin/dashboard" , state: {type: "user"}}}>
                            <i className="fas fa-chart-area" />
                            <span className="menu-title" data-i18n>Dashboard</span>
                        </Link>
                    </li>
                    <li className={ openUser ? "nav-item has-sub open" : "nav-item has-sub"}>
                        <Link onClick={ () => setOpenUSer(!openUser)} to="#/"><i className="fas fa-user-circle" /><span className="menu-title" data-i18n>User</span></Link>
                        <ul className="menu-content">
                            <li className="is-shown">
                                <Link className="menu-item" to={{ pathname: "/admin/users" }}>USER</Link>
                            </li>
                            <li className="is-shown">
                                <Link className="menu-item" to={{ pathname: "/admin/drivers" }}>DRIVER</Link>
                                {/* <a className="menu-item" href="#/">DRIVER</a> */}
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item">
                        <Link to="/admin/jobs">
                            <i className="fas fa-user" />
                            <span className="menu-title" data-i18n>Jobs</span>
                        </Link>
                    </li>
                    <li className="nav-item has-sub "><a href="#/"><i className="fas fa-credit-card" /><span className="menu-title" data-i18n>Payment-log</span></a>
                        <ul className="menu-content">
                            <li className="is-shown "><a className="menu-item" href="#/">MONTHLY PAYMENT</a>
                            </li>
                            <li className="is-shown"><a className="menu-item" href="#/">MY EARNING</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><Link to="/admin/feedbacks"><i className="fas fa-clone" /><span className="menu-title" data-i18n>Feedback</span></Link></li>
                    <li className="nav-item has-sub"><a href="#/"><i className="fas fa-cog" /><span className="menu-title" data-i18n>Settings</span></a>
                        <ul className="menu-content">
                            <li className="is-shown "><a className="menu-item" href="#/">DONATE</a>
                            </li>
                            <li className="is-shown "><a className="menu-item" href="#/">DISPOSE</a>
                            </li>
                            <li className="is-shown"><a className="menu-item" href="#/">RELOCATE</a>
                            </li>
                            <li className="is-shown"><a className="menu-item" href="#/">RECYCLE</a>
                            </li>
                            <li className="is-shown"><a className="menu-item" href="#/">SHIPPING</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default SideNav;