// React
import { lazy } from 'react';

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
const LoginView = lazy(() => import('@/views/auth/Login'));
const UsersView = lazy(() => import('@/views/pages/Users'));
const RevenueView = lazy(() => import('@/views/pages/Revenue'));
const DashboardView = lazy(() => import('@/views/pages/Dashboard'));
const ComponentsView = lazy(() => import('@/views/pages/Components'));
const ChangePasswordView = lazy(() => import('@/views/auth/Change-Password'));
const VerificationEmailView = lazy(() => import('@/views/auth/Verify-Email'));
const ForgotPasswordView = lazy(() => import('@/views/auth/Forgot-Password'));

function App() {
  const {
    auth: { changePassword, forgotPassword, login, verifyEmail },
    page: { dashboard, users, revenue, components },
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
          <Route
            path={components}
            element={<ComponentsView />}
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
