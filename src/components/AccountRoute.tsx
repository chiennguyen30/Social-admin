import React, { ReactNode } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AppState } from '../stores';
import { AccountState } from '../stores/account/types';
import { Login } from '../pages/Account';

interface AccountRouterProps extends RouteProps {
  children: ReactNode;
}

export const AccountRoute = ({ children, ...rest }: AccountRouterProps): JSX.Element => {
  const account:AccountState = useSelector((state: AppState) => state.account);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        account.token ? (
          <Redirect
            to={{
              pathname: '/admin/home',
              state: { from: location }
            }}
          />
        ) : (
         <Login />
        )
      }
    />
  );
};
