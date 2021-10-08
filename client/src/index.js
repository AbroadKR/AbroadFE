import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
