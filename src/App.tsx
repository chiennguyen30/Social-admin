import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRouter } from './components/PrivateRoute';
import { Login } from './pages/Account/Login';
import { Admin } from './pages/Admin/Admin';
import { AccountRoute } from './components/AccountRoute';

function App() {
  return (
    <div className="App" id="wrapper"> 
    <Router>
      <AccountRoute>
        <Login/>
      </AccountRoute>
      <PrivateRouter>
        <Admin/>
      </PrivateRouter>
    </Router>
  </div>
  
  );
}

export default App;
