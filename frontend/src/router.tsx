import { createBrowserRouter } from "react-router-dom";
import { LoginPage, RegisterPage, LandingPage } from "./pages";
import { Navbar } from "./components/molecules";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
