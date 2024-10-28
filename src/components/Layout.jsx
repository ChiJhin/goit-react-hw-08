import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loader from "./Loader/Loader";


const Layuot = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layuot
