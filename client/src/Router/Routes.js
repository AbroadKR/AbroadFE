import React from 'react';
import Community from '../Pages/Community';
import WriteArticle from '../Components/Community/WriteArticle';
import Header from '../Components/Layout/Header/Header';
import Main from '../Components/Layout/Main/Main';
import { HashRouter, Route, Redirect } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/community" exact component={Community} />
          <Route path="/writeArticle" exact component={WriteArticle} />
          <Redirect from="*" to="/" />
        </>
      </HashRouter>
    );
  }
}

export default Routes;
