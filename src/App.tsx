// Routers
import { Route, Routes } from 'react-router';

// Layouts
import AuthLayout from './components/layouts/auth-layout';

// Views
import SidebarLayout from './components/layouts/dashboard-layout';
import { NotFoundRedirect, ProtectedRoute, PublicRoute } from './middleware';
import ChangePassword from './views/auth/change-password';
import ForgotPassword from './views/auth/forgot-password';
import LoginView from './views/auth/login';
import VerifyEmail from './views/auth/verify-email';

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route
            path='login'
            element={<LoginView />}
          />
          <Route
            path='forgot-password'
            element={<ForgotPassword />}
          />
          <Route
            path='verify-email'
            element={<VerifyEmail />}
          />
          <Route
            path='change-password'
            element={<ChangePassword />}
          />
        </Route>
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<SidebarLayout />}>
          <Route
            path='dashboard'
            element={<div>Hello World</div>}
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
