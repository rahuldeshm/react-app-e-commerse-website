import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import ContactUs from "./components/ContactUs/ContactUs";
import Individual from "./components/Store/Individual";
import { ContextProvider } from "./store/data-context";
import Header from "./components/Layout/Header";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login/Login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/individual/:id",
//         element: <Individual />,
//       },
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/store",
//         element: <Store />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/Contact",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

function App() {
  // return <RouterProvider router={router}></RouterProvider>;
  return (
    <ContextProvider>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/store/:id">
          <Individual />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

export default App;
