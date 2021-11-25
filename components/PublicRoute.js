import React, { Fragment } from 'react'
import { Route , Redirect } from "react-router-dom";
import Header from "./adminpanel/includes/Header.admin";
import SideNav from "./adminpanel/includes/SideNav.admin";

const PublicRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    return (
        <Route {...rest} render={(props) => (
            token ?
            <Redirect to="/admin/dashboard" />
             : <Component {...props} />
        )} />
    )
}

export default PublicRoute
