import Header from "./components/Header";
import Footer from "./components/Footer";
import Scoreboard from "./components/Scoreboard";
import CardContainer from "./components/CardContainer"; 


import './App.css';

const App = () => {
  return (
    document.title = "Pokemon Memory Game",
    <div className="App">
      <Header/>
      <Scoreboard/>
      <CardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
