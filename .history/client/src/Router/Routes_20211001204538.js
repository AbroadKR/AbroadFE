import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Result from "../Pages/Result"
import Header from '../Components/Layout/Header/Header';
import Community from '../Pages/Community';
import FreeBoard from "../Pages/FreeBoard";
import QnABoard from "../Pages/QnABoard";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Header />
          <Route path="/" exact component={Main}/>
          <Route path="/result/:koUniv" component={Result}/>
          <Route path="/result/:koUniv/:continent" component={Result}/>
          <Route path="/result/:koUniv/:continent/:country" component={Result}/>
          <Route path="/community/:continent" component={Community}/>
          <Route path="/community/:continent/freeboard" component={FreeBoard}/>
          <Route path="/community/:continent/qna" component={QnABoard}/>
          <Redirect from="*" to="/"/>
        </>
      </HashRouter>
    );
  }
}

export default Routes;
