import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import { ContextProvider } from "./../store/data-context";

function RootLayout() {
  return (
    <ContextProvider>
      <Header />
      <Outlet />
    </ContextProvider>
  );
}

export default RootLayout;
