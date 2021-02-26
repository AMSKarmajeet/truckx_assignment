import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import AlreadyLogin from '../Login/AlreadyLogin';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>My Customers</h1>
      <h3>To view my list of customer go to:- <a href="http://localhost:3000/dashboard">http://localhost:3000/dashboard</a></h3>
      <h3>Home:- <a href="http://localhost:3000">http://localhost:3000</a></h3>
      <h3>Login:- <a href="http://localhost:3000/alreadyLogin">http://localhost:3000/login</a></h3>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/alreadyLogin">
            <AlreadyLogin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
