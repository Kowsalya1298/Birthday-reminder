import "./App.css";
import { Board } from "./components/board";
import Footer from "./components/footer";
import Header from "./components/header";

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
