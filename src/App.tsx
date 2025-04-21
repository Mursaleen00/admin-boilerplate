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
  return (
    <Routes>
      {/* Auth */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route
            path={routes.auth.login}
            element={<LoginView />}
          />
          <Route
            path={routes.auth.forgotPassword}
            element={<ForgotPassword />}
          />
          <Route
            path={routes.auth.verifyEmail}
            element={<VerifyEmail />}
          />
          <Route
            path={routes.auth.changePassword}
            element={<ChangePassword />}
          />
        </Route>
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<SidebarLayout />}>
          <Route
            path={routes.page.dashboard}
            element={<div>Hello World</div>}
          />
          <Route
            path={routes.page.checkIn}
            element={<div>This is Check in page</div>}
          />
          <Route
            path={routes.page.projects}
            element={<div>This is project page</div>}
          />
          <Route
            path={routes.page.allStandUps}
            element={<div>This is allStandUps page</div>}
          />
          <Route
            path={routes.page.report}
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
