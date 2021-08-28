import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../components/Layout/Main/Main';
import Community from '../pages/Community';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Community" component={Community} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
