import React, { ReactNode } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { Login } from '../pages/Account/Login';

interface PrivateRouterProps extends RouteProps {
  children: ReactNode;
}

export const PrivateRouter = ({ children, ...rest }: PrivateRouterProps): JSX.Element => {
  const isLoggedIn = true; // Thay đổi logic kiểm tra đăng nhập của bạn ở đây
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
