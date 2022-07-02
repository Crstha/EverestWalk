import logo from "./logo.svg";
import "./App.scss";
import Header from "./header/Header";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header></Header>
      {/* Home */}
      <Home></Home>
    </div>
  );
}

export default App;
