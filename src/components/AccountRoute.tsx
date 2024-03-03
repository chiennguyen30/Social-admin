
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AppState } from '../stores';
import { AccountState } from '../stores/account/types';
import { Login } from '../pages/Account';


export const AccountRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  const account:AccountState = useSelector((state: AppState) => state.account);
  return (
    <Route {...rest} render={()=>(account.token ? <Redirect to={{pathname: '/admin/home'}}/> : <Login/>)}></Route>
  );
};
