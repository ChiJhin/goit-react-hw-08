import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";


const Layuot = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layuot
