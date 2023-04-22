import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Header from "./components/Layout/Header";
function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Store></Store>
    </>
  );
}

export default App;
