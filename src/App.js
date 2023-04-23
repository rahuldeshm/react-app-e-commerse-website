import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import RootLayout from "./components/Root";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
