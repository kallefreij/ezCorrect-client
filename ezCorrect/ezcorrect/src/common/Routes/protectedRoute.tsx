import * as React from 'react';
import { useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  component: any;
  isAuthenticated: boolean;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  useEffect(() => {
    console.log(props.isAuthenticated);
  }, [props.isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
