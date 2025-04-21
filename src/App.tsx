// Routers
import { Route, Routes } from 'react-router';

// Layouts
import AuthLayout from '@/components/layouts/auth-layout';
import SidebarLayout from '@/components/layouts/dashboard-layout';

// Middlewares
import { NotFoundRedirect, ProtectedRoute, PublicRoute } from '@/middleware';

// Constants
import routes from '@/constants/routes';

// Views
import ChangePassword from '@/views/auth/change-password';
import ForgotPassword from '@/views/auth/forgot-password';
import LoginView from '@/views/auth/login';
import VerifyEmail from '@/views/auth/verify-email';

function App() {
  const {
    auth: { changePassword, forgotPassword, login, verifyEmail },
    page: { allStandUps, checkIn, dashboard, projects, report },
  } = routes;

  return (
    <Routes>
      {/* Auth */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route
            path={login}
            element={<LoginView />}
          />
          <Route
            path={forgotPassword}
            element={<ForgotPassword />}
          />
          <Route
            path={verifyEmail}
            element={<VerifyEmail />}
          />
          <Route
            path={changePassword}
            element={<ChangePassword />}
          />
        </Route>
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<SidebarLayout />}>
          <Route
            path={dashboard}
            element={<div>Hello World</div>}
          />
          <Route
            path={checkIn}
            element={<div>This is Check in page</div>}
          />
          <Route
            path={projects}
            element={<div>This is project page</div>}
          />
          <Route
            path={allStandUps}
            element={<div>This is allStandUps page</div>}
          />
          <Route
            path={report}
            element={<div>This is report page</div>}
          />
        </Route>
      </Route>

      {/* Not Found */}
      <Route
        path='*'
        element={<NotFoundRedirect />}
      />
    </Routes>
  );
}

export default App;
