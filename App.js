import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/adminpanel/auth/Login.admin";
import Dashboard from './components/adminpanel/Dashboard.admin';
import PublicRoute from "./components/PublicRoute";
import ProfileAdmin from './components/adminpanel/auth/Profile.admin';
import UsersAdmin from './components/adminpanel/userManagement/Users.admin';
import { Provider } from "react-redux";
import Store from "./Store";
import { getCurrentUser } from './actions/Auth.Action';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer  } from "react-toastify";
import ViewUserAdmin from './components/adminpanel/userManagement/ViewUser.admin';
import VehicleAdmin from './components/adminpanel/userManagement/Vehicle.admin';
import VehicleDetails from './components/adminpanel/userManagement/VehicleDetail.admin';
import JobsAdmin from './components/adminpanel/jobManagement/Jobs.admin';
import JobDetailAdmin from './components/adminpanel/jobManagement/JobDetail.admin';
import FeedbacksAdmin from './components/adminpanel/feedbackManagement/Feedbacks.admin';

const App = () => {

  useEffect(() => {
    Store.dispatch(getCurrentUser());
    // Store.;
  },[]);
    
  return (
    <Provider store={Store}>
      <ToastContainer />
      <Router>
        <Switch>
          {/* <Route /> */}
          <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/admin/profile" component={ProfileAdmin} />
          <PrivateRoute exact path="/admin/users" component={UsersAdmin} />
          <PrivateRoute exact path="/admin/user/:id" component={ViewUserAdmin} />
          <PrivateRoute exact path="/admin/drivers" component={UsersAdmin} />
          <PrivateRoute exact path="/admin/registered/:id" component={VehicleAdmin} />
          <PrivateRoute exact path="/admin/vehicle/:id" component={VehicleDetails} />
          <PrivateRoute exact path="/admin/jobs" component={JobsAdmin} />

          <PrivateRoute exact path="/admin/feedbacks" component={FeedbacksAdmin} />
          <PrivateRoute exact path="/admin/feedback/:id" component={JobsAdmin} />


          <PrivateRoute exact path="/admin/job/:id" component={JobDetailAdmin} />

          <PublicRoute exact path="/admin" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
