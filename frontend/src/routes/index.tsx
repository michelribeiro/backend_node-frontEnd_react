import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoutes path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
