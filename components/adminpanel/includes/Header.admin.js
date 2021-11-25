import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter , Link } from 'react-router-dom';

const Header = ({ authState , history }) => {
    const { current_user } = authState;

    useEffect( () => {

    },[authState]);

    const onLogout = () => {
        localStorage.removeItem("token");
        history.push("/admin");
        window.location.reload();
    }
    return (
        <Fragment>
        <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
            <div className="navbar-wrapper">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item mobile-menu d-md-none mr-auto">
                            <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#/">
                                <i className="ft-menu font-large-1" />
                                </a>
                                </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/admin/dashboard">
                                <img className="brand-logo img-fluid logo mb-sm-4 mb-0" alt="stack admin logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} /> 
                            </Link>
                        </li>
                        <li className="nav-item d-md-none">
                            <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile">
                                <i className="fa fa-ellipsis-v" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-container content">
                    <div className="collapse navbar-collapse" id="navbar-mobile">
                        <ul className="nav navbar-nav mr-auto float-left">
                        </ul>
                        <ul className="nav navbar-nav float-right ">
                            <li className="dropdown dropdown-notification nav-item "> <a className="nav-link py-0 nav-link-label mt-2" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bell topbell" aria-hidden="true" /><i className="fas fa-chevron-down" /></a>
                                <ul className="dropdown-menu noti dropdown-menu-media dropdown-menu-right ">
                                    <li className="dropdown-menu-header">
                                        <h6 className="dropdown-header m-0"> <span className="notificationH">Notifications</span> </h6>
                                    </li>
                                    <li className="media-list ps-container ps-theme-dark ps-active-y" data-ps-id="38da87fc-4d87-8b0f-1c30-5c842ac0a787">
                                        <a href="notifications.html" className="notficationlink">
                                            <div className="media d-flex">
                                                <div className="media-left ">
                                                    <i className="fas fa-bell notifications-bell" />
                                                </div>
                                                <div className="media-body">
                                                    <p className="notification-text">Agent Abc has started xyz task</p>
                                                    <div className="notification-below-info">
                                                        <small>
                                                            <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">Feb 15,2020</time>
                                                        </small>
                                                        <small className="float-right">
                                                            <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">10:30 PM</time>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="ml-3"><a className="notificationbtn" href="notifications.html">View All</a>
                                        </div>
                                        <div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '3px' }}>
                                            <div className="ps-scrollbar-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-user nav-item">
                                <a className="dropdown-toggle nav-link dropdown-user-link" href="#/" data-toggle="dropdown"> 
                                <span className="avatar avatar-online">
                                    <img src={ current_user.image || `https://ui-avatars.com/api/${current_user.first_name} ${current_user.last_name} /64/615bbf/fff/2/0.5/true/true/true`} alt="avatar" />
                                </span> 
                                <span className="user-name">{current_user.first_name} {current_user.last_name}</span><i className="fas fa-chevron-down profilearrow" /></a>
                                <div className="dropdown-menu dropdown-menu-right pro-div">
                                    <Link className="dropdown-item" to="/admin/profile"><i className="fas fa-user-circle myaccounticon" />
                                        <p className="myaccount d-inline">VEIW PROFILE</p>
                                    </Link>
                                    <a className="dropdown-item" href="#_" data-toggle="modal" data-target="#logout"><i className="fas fa-sign-out-alt myaccounticon" />
                                        <p className="myaccount d-inline">LOGOUT</p>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item d-none d-md-block"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
       </nav>
       <div className="modal fade" id="logout" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <div className="px-5 pt-2 pb-5 text-center">
              <img src={`${process.env.PUBLIC_URL}/images/green-check.png`} className="img-fluid" />
              <p className="grey mt-1 medium f-18">Are you sure you want to logout?</p>
              <div className="d-flex flex-wrap justify-content-center">
                <a onClick={onLogout} href="#/"><button type="button"  className="px-4 mx-1 py-1 mt-2">YES</button></a>
                <a href="#_" data-dismiss="modal" aria-label="Close"><button className="px-4 py-1 mt-2">NO</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
        
       </Fragment>
    )
}

const mapStateToProps = state => ({
    authState: state.auth
});

export default connect(mapStateToProps , {})(withRouter(Header));
