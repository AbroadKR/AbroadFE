import React from 'react';
import { HashRouter } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Header from '../Components/Layout/Header/Header';
import Community from '../Pages/Community';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Main />
      </HashRouter>
    );
  }
}

export default Routes;
