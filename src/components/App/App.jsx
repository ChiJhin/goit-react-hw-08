import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import Loader from "../Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Layuot from "../Layout";
import { Suspense } from "react";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import { refreshUser } from "../../redux/user/operation";
import { selectIsRefreshing } from "../../redux/user/selector";
const HomePage = lazy(() => import("../../pages/Home/Home"));
const RegisterPage = lazy(() => import("../../pages/Register/Register"));
const LoginPage = lazy(() => import("../../pages/Login/Login"));
const TasksPage = lazy(() => import("../../pages/Tasks/Tasks"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshed = useSelector(selectIsRefreshing);
  
  useEffect(() => {
  dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshed ? (<Loader />)
        : (<Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layuot />}>
              <Route index element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/tasks"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/tasks"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/tasks"
                element={
                  <PrivateRoute redirectTo="/login" component={<TasksPage />} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
        )}
    </>
  );
};

export default App