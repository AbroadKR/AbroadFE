import { HashRouter } from 'react-router-dom';
import Routes from './Router/Routes';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer';
import Global from './Styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <>
          <Header />
          <Routes />
          <Global />
          <Footer />
        </>
      </HashRouter>
    </div>
  );
}

export default App;
