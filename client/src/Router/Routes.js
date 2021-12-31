import React from 'react';
import Result from '../Pages/Result';
import QnABoard from '../Pages/QnABoard';
import FreeBoard from '../Pages/FreeBoard';
import All from '../Pages/All';
import Community from '../Pages/Community';
import WriteArticle from '../Components/Community/WriteArticle';
import Main from '../Components/Layout/Main/Main';
import Header from '../Components/Layout/Header/Header';
import Footer from '../Components/Layout/Footer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CollegeDetail from '../Pages/CollegeDetail';
import ForeCampus from '../Pages/foreCampus';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/writeArticle" component={WriteArticle} />
            <Route path="/pages/foreCampus" component={ForeCampus} />
            <Route path="/result/:koUniv" exact component={Result} />
            <Route path="/result/:koUniv/:continent" exact component={Result} />
            <Route
              path="/result/:koUniv/:continent/:country"
              component={Result}
            />
            <Route path="/community/:board" exact component={All} />
            <Route
              path="/community/:continent/:category"
              exact
              component={Community}
            />
            <Route path="/college/:id" exact component={CollegeDetail} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default Routes;
