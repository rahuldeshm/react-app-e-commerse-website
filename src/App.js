import {
  createBrowserRouter,
  // Route, // react-router-dom@5
  RouterProvider,
  // Routes,
} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import RootLayout from "./components/Root";
import ContactUs from "./components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
  // return (
  //   <Routes>
  //     <Route path="/">
  //       <>
  //         <Home />
  //       </>
  //     </Route>
  //     <Route path="/store">
  //       <Store />
  //     </Route>
  //     <Route path="/about">
  //       <About />
  //     </Route>
  //     <Route path="/contact">
  //       <ContactUs />
  //     </Route>
  //   </Routes>
  // );
}

export default App;
