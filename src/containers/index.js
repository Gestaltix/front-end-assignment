import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import View1 from './view1';
import './index.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={View1} />
      </Switch>
    );
  }
}

export default App;
