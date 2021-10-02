import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Community from '../Pages/Community';
import FreeBoard from "../Pages/FreeBoard";
import QnABoard from "../Pages/QnABoard";
import Result from "../Pages/Result";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
          <>
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/result/:koUniv" exact component={Result}/>
              <Route path="/result/:koUniv/:continent" exact component={Result}/>
              <Route path="/result/:koUniv/:continent/:country" component={Result}/>
              <Route path="/community/:continent" exact component={Community}/>
              <Route path="/community/:continent/freeboard" exact component={FreeBoard}/>
              <Route path="/community/:continent/qna" exact component={QnABoard}/>
            </Switch>
          </>
              <Redirect from="*" to="/"/>
      </HashRouter>
    );
  }
}

export default Routes;
