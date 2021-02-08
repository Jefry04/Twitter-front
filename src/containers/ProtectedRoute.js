import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Auth from '../utils/auth';

export default function ProtectedRoute({ path, component: Component }) {
  const user = {};
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (Auth.isAuthenticaded() && user) {
          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
