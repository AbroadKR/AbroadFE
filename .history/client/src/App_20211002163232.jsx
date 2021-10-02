import Footer from './Components/Layout/Footer/Footer';
import Routes from './Router/Routes';
import Header from "./Components/Layout/Header/Header"
import Global from "./Styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Routes />
      <Global/>
    </div>
  );
}

export default App;
