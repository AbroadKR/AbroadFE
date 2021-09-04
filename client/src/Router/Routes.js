import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Result from "../Pages/Result"
import Header from '../Components/Layout/Header/Header';
// import Community from '../Pages/Community';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Header />
          <Route path="/" exact component={Main}/>
          {/* <Main /> */}
          <Route path="/result" exact component={Result}/>
          <Redirect from="*" to="/"/>
        </>
      </HashRouter>
    );
  }
}

export default Routes;
