import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Result from "../Pages/Result"
import Header from '../Components/Layout/Header/Header';
import Community from '../Pages/Community';
import FreeBoard from "../Pages/FreeBoard";
import QnABoard from "../Pages/QnABoard";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/result/:koUniv" exact component={Result}/>
          <Route path="/result/:koUniv/:continent" exact component={Result}/>
          <Route path="/result/:koUniv/:continent/:country" component={Result}/>
          <Route path="/community/:continent" exact component={Community}/>
          <Route path="/community/:continent/freeboard" exact component={FreeBoard}/>
          <Route path="/community/:continent/freeboard/:search" exact component={FreeBoard}/>
          <Route path="/community/:continent/qna" component={QnABoard}/>
          <Redirect from="*" to="/"/>
        </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Routes;
