import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Components/Layout/Home/Home';
import CommunityEntrance from '../Pages/CommunityEntrance';
import FreeBoard from '../Pages/FreeBoard';
import QnABoard from '../Pages/QnABoard';
import Result from '../Pages/Result';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/result/:koUniv" exact component={Result} />
            <Route path="/result/:koUniv/:continent" exact component={Result} />
            <Route
              path="/result/:koUniv/:continent/:country"
              component={Result}
            />
            <Route
              path="/community/:continent"
              exact
              component={CommunityEntrance}
            />
            <Route
              path="/community/:continent/freeboard"
              exact
              component={FreeBoard}
            />
            <Route
              path="/community/:continent/qna"
              exact
              component={QnABoard}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      </HashRouter>
    );
  }
}

export default Routes;
