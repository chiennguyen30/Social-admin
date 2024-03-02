import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRouter } from './components/PrivateRouter';
import { Login } from './pages/Account/Login';

function App() {
  return (
    <div className="App" id="wrapper"> 
    <Router>
      <PrivateRouter>
        <Login/>
      </PrivateRouter>
    </Router>
  </div>
  
  );
}

export default App;
