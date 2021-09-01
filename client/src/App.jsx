import Routes from './Router/Routes';
// import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Global from "./Styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes />
      <Footer />
      <Global/>
    </div>
  );
}

export default App;
