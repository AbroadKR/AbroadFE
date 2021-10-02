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
<<<<<<< Updated upstream
          <Route path="/" exact component={Main}/>
          <Route path="/result/:koUniv" exact component={Result}/>
          <Route path="/result/:koUniv/:continent" exact component={Result}/>
          <Route path="/result/:koUniv/:continent/:country" component={Result}/>
          <Redirect from="*" to="/"/>
=======
          <Route path="/" exact component={Main} />
          <Route path="/community" exact component={Community} />
          <Route path="/writeArticle" exact component={WriteArticle} />
          <Redirect from="*" to="/" />
>>>>>>> Stashed changes
        </>
      </HashRouter>
    );
  }
}

export default Routes;
