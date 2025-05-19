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
import ChangePasswordView from '@/views/auth/Change-Password';
import ForgotPasswordView from '@/views/auth/Forgot-Password';
import LoginView from '@/views/auth/Login';
import VerificationEmailView from '@/views/auth/Verify-Email';
import DashboardView from '@/views/pages/Dashboard';
import RevenueView from '@/views/pages/Revenue';
import UsersView from '@/views/pages/Users';

function App() {
  const {
    auth: { changePassword, forgotPassword, login, verifyEmail },
    page: { dashboard, users, revenue },
  } = routes;

  return (
    <Routes>
      {/* ====================== Auth ====================== */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route
            path={login}
            element={<LoginView />}
          />
          <Route
            path={forgotPassword}
            element={<ForgotPasswordView />}
          />
          <Route
            path={verifyEmail}
            element={<VerificationEmailView />}
          />
          <Route
            path={changePassword}
            element={<ChangePasswordView />}
          />
        </Route>
      </Route>

      {/* ====================== Pages ====================== */}
      <Route element={<ProtectedRoute />}>
        <Route element={<SidebarLayout />}>
          <Route
            path={dashboard}
            element={<DashboardView />}
          />
          <Route
            path={users}
            element={<UsersView />}
          />
          <Route
            path={revenue}
            element={<RevenueView />}
          />
        </Route>
      </Route>

      {/* ====================== Not Found ====================== */}
      <Route
        path='*'
        element={<NotFoundRedirect />}
      />
    </Routes>
  );
}

export default App;
