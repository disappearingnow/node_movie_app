import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Navbar } from "./components/molecules";
import "./reset.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}
