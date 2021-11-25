import React, { Fragment } from 'react'
import { Redirect, Route } from "react-router-dom";
import Header from "./adminpanel/includes/Header.admin";
import SideNav from "./adminpanel/includes/SideNav.admin";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    return (
        <Route {...rest} render={(props) => (
            token ? 
            <Fragment>
                <Header />
                <SideNav />
                <Component {...props} />
            </Fragment>
            : <Redirect to="/admin" />
        )} />
    )
}

export default PrivateRoute;
