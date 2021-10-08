import React from 'react';
import Result from '../Pages/Result';
import QnABoard from '../Pages/QnABoard';
import FreeBoard from '../Pages/FreeBoard';
import Community from '../Pages/Community';
import CommunityEntrance from '../Pages/CommunityEntrance';
import WriteArticle from '../Components/Community/WriteArticle';
import Main from '../Components/Layout/Main/Main';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/community" component={Community} />
            <Route path="/writeArticle" component={WriteArticle} />
            <Route path="/result/:koUniv" component={Result} />
            <Route path="/result/:koUniv/:continent" component={Result} />
            <Route
              path="/result/:koUniv/:continent/:country"
              component={Result}
            />
            <Route
              path="/communityentrance/:continent"
              component={CommunityEntrance}
            />
            <Route
              path="/communityentrance/:continent/freeboard"
              component={FreeBoard}
            />
            <Route
              path="/communityentrance/:continent/qna"
              component={QnABoard}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      </HashRouter>
    );
  }
}

export default Routes;
