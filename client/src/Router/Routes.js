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

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/all" exact component={All} />
            <Route path="/writeArticle" component={WriteArticle} />
            <Route path="/result/:koUniv" exact component={Result} />
            <Route path="/result/:koUniv/:continent" exact component={Result} />
            <Route
              path="/result/:koUniv/:continent/:country"
              component={Result}
            />
            <Route path="/community/:continent" exact component={Community} />
            <Route
              path="/community/:continent/freeboard"
              exact
              component={FreeBoard}
            />
            <Route
              path="/community/:continent/freeboard/:searchOptions"
              component={FreeBoard}
            ></Route>
            <Route path="/community/:continent/qna" component={QnABoard} />
            <Route path="/travel/info" exact component={All} />
            <Route path="/travel/party" exact component={All} />
            <Route path="/college/:id" exact component={CollegeDetail} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default Routes;
