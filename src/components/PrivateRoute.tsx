import React, { ReactNode } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AppState } from '../stores';
import { AccountState } from '../stores/account/types';
interface PrivateRouterProps extends RouteProps {
  children: ReactNode;
}

export const PrivateRouter = ({ children, ...rest }: PrivateRouterProps): JSX.Element => {
  const account:AccountState = useSelector((state: AppState) => state.account);
  return (
    <Route
      {...rest}
      render={() =>
        account.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};
