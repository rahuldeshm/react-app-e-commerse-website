import "./App.css";
// import About from "./components/About/About";
// import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Header from "./components/Layout/Header";
import { ContextProvider } from "./store/data-context";
// import Cart from "./components/Cart/Cart";
function App() {
  return (
    <ContextProvider>
      <Header></Header>
      {/* <Home></Home>
      <About></About> */}
      <Store></Store>
    </ContextProvider>
  );
}

export default App;
