import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          } />

          <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          } />

          {/* <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
