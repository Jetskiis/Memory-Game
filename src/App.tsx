import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";

import './App.css';

const App = () => {
  return (
    document.title = "Pokemon Memory Game",
    <div className="App">
      <Header/>
      <Game/>
      <Footer/>
    </div>
  );
}

export default App;
