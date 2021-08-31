import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import './styles/globalStyles.css';
import Routes from './Router/Routes';

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
