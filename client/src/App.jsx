import './Styles/globalStyles.css';
import Routes from './Router/Routes';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
