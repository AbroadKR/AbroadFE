import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Header from "../Components/Layout/Header/Header"
import Footer from "../Components/Layout/Footer/Footer"
import Community from '../Pages/Community';
import FreeBoard from "../Pages/FreeBoard";
import QnABoard from "../Pages/QnABoard";
import Result from "../Pages/Result";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
          <>
            <Header/>
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/result/:koUniv" exact component={Result}/>
              <Route path="/result/:koUniv/:continent" exact component={Result}/>
              <Route path="/result/:koUniv/:continent/:country" component={Result}/>
              <Route path="/community/:continent" exact component={Community}/>
              <Route path="/community/:continent/freeboard" exact component={FreeBoard}/>
              <Route path="/community/:continent/freeboard/:search" component={FreeBoard}/>
              <Route path="/community/:continent/qna" exact component={QnABoard}/>
              <Redirect from="*" to="/"/>
            </Switch>
            <Footer/>
          </>
      </HashRouter>
    );
  }
}

export default Routes;
