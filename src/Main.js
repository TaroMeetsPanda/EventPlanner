import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AddUser from './containers/AddUser';
import Home from './containers/Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/addUser' component={AddUser} />
    </Switch>
  </main>
)

export default Main;
