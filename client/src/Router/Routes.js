import React from 'react';
import Result from '../Pages/Result';
import QnABoard from '../Pages/QnABoard';
import FreeBoard from '../Pages/FreeBoard';
import Community from '../Pages/Community';
import ForeCampus from '../Pages/foreCampus';
import Footer from '../Components/Layout/Footer';
import Main from '../Components/Layout/Main/Main';
import Header from '../Components/Layout/Header/Header';
import CommunityEntrance from '../Pages/CommunityEntrance';
import WriteArticle from '../Components/Community/WriteArticle';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/community" exact component={Community} />
            <Route path="/foreCampus" exact component={ForeCampus} />
            <Route path="/writeArticle" component={WriteArticle} />
            <Route path="/result/:koUniv" component={Result} />
            <Route path="/result/:koUniv/:continent" component={Result} />
            <Route
              path="/result/:koUniv/:continent/:country"
              component={Result}
            />
            <Route
              path="/communityentrance/:continent"
              exact
              component={CommunityEntrance}
            />
            <Route
              path="/communityentrance/:continent/freeboard"
              exact
              component={FreeBoard}
            />
            <Route
              path="/communityentrance/:continent/freeboard/:searchOptions"
              component={FreeBoard}
            ></Route>
            <Route
              path="/communityentrance/:continent/qna"
              component={QnABoard}
            />
            {/* <Redirect from="*" to="/" /> */}
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default Routes;
