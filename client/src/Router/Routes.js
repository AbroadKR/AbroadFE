import React from 'react';
import Result from '../Pages/Result';
import QnABoard from '../Pages/QnABoard';
import FreeBoard from '../Pages/FreeBoard';
<<<<<<< HEAD
import Community from '../Pages/Community';
import ForeCampus from '../Pages/foreCampus';
import Footer from '../Components/Layout/Footer';
import Main from '../Components/Layout/Main/Main';
import Header from '../Components/Layout/Header/Header';
import CommunityEntrance from '../Pages/CommunityEntrance';
import WriteArticle from '../Components/Community/WriteArticle';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
=======
import All from '../Pages/All';
import Community from '../Pages/Community';
import WriteArticle from '../Components/Community/WriteArticle';
import Main from '../Components/Layout/Main/Main';
import Header from '../Components/Layout/Header/Header';
import Footer from '../Components/Layout/Footer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CollegeDetail from '../Pages/CollegeDetail';
>>>>>>> develope

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
<<<<<<< HEAD
            <Route path="/community" exact component={Community} />
            <Route path="/foreCampus" exact component={ForeCampus} />
            <Route path="/writeArticle" component={WriteArticle} />
            <Route path="/result/:koUniv" component={Result} />
            <Route path="/result/:koUniv/:continent" component={Result} />
=======
            <Route path="/all" exact component={All} />
            <Route path="/writeArticle" component={WriteArticle} />
            <Route path="/result/:koUniv" exact component={Result} />
            <Route path="/result/:koUniv/:continent" exact component={Result} />
>>>>>>> develope
            <Route
              path="/result/:koUniv/:continent/:country"
              component={Result}
            />
<<<<<<< HEAD
            <Route
              path="/communityentrance/:continent"
              exact
              component={CommunityEntrance}
            />
            <Route
              path="/communityentrance/:continent/freeboard"
=======
            <Route path="/community/:continent" exact component={Community} />
            <Route
              path="/community/:continent/freeboard"
>>>>>>> develope
              exact
              component={FreeBoard}
            />
            <Route
<<<<<<< HEAD
              path="/communityentrance/:continent/freeboard/:searchOptions"
              component={FreeBoard}
            ></Route>
            <Route
              path="/communityentrance/:continent/qna"
              component={QnABoard}
            />
            {/* <Redirect from="*" to="/" /> */}
=======
              path="/community/:continent/freeboard/:searchOptions"
              component={FreeBoard}
            ></Route>
            <Route path="/community/:continent/qna" component={QnABoard} />
            <Route path="/travel/info" exact component={All} />
            <Route path="/travel/party" exact component={All} />
            <Route path="/college/:id" exact component={CollegeDetail} />
>>>>>>> develope
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default Routes;
