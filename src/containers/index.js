import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import View1 from './view1';
import View2 from './view2';
import './index.css';

// Having a providing the switch functionality for react router dom

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={View1} />
        <Route exact path='/:id' component={View2} />
      </Switch>
    );
  }
}

export default App;
