import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Navbar } from "./components/molecules";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}
