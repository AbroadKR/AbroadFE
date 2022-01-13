import React from 'react';
import Result from '../Pages/Result';
import ContinentBoard from '../Pages/ContinentBoard';
import All from '../Pages/All';
import Community from '../Pages/Community';
import AbroadEditor from '../Components/Editor';
import Main from '../Components/Layout/Main/Main';
import Header from '../Components/Layout/Header/Header';
import Footer from '../Components/Layout/Footer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CollegeDetail from '../Pages/CollegeDetail';
import ForeCampus from '../Pages/foreCampus';
import QnAPageDetail from '../Components/Community/QnAPageDetail';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/all" exact component={All} />
            <Route path="/community/:board/edit" component={AbroadEditor} />
            <Route path="/qna-detail" component={QnAPageDetail} />
            <Route path="/pages/foreCampus" component={ForeCampus} />
            <Route path="/result/:koUniv" exact component={Result} />
            <Route path="/result/:koUniv/:continent" exact component={Result} />
            <Route
              path="/result/:koUniv/:continent/:country"
              component={Result}
            />
            <Route path="/community/:continent" exact component={Community} />
            <Route
              path="/community/:continent/:category"
              exact
              component={ContinentBoard}
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
