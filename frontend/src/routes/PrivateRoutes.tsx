import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";

interface RoutesProps extends RouteProps {
  role?: string;
}

const PrivateRoutes: React.FC<RoutesProps> = ({ role, ...rest }) => {
  const hasPermission = false;

  return hasPermission ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoutes;
