import "./App.css";
import { Board } from "./components/Board/board";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;
