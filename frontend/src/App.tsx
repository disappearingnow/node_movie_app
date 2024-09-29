import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./reset.css";
import "./App.css";

export default function App() {
  return <RouterProvider router={router} />;
}
