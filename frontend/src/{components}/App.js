import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import CreateEmployee from './CreateEmployee';
import EditEmployee from './EditEmployee';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create-employee" component={CreateEmployee} />
        <Route path="/edit-employee/:id" component={EditEmployee} />
      </Switch>
    </Router>
  );
};

export default App;
