import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import ContactUs from "./components/ContactUs/ContactUs";
import Individual from "./components/Store/Individual";

import Header from "./components/Layout/Header";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login/Login";
import { useContext } from "react";
import DataContext from "./store/data-context";

function App() {
  const ctx = useContext(DataContext);
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {ctx.authorise && (
          <Route path="/store" exact>
            <Store />
          </Route>
        )}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        {!ctx.authorise && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="/store/:id">
          <Individual />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
