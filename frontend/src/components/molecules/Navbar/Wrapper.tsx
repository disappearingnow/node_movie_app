import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
