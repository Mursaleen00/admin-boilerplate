// Routers
import { Route, Routes } from 'react-router';

// Layouts
import AuthLayout from './components/layouts/auth-layout';

// Views
import ChangePassword from './views/auth/change-password';
import ForgotPassword from './views/auth/forgot-password';
import LoginView from './views/auth/login';
import VerifyEmail from './views/auth/verify-email';

function App() {
  return (
    <Routes>
      {/* Auth */}
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

      {/* Dashboard */}
      <Route
        path='/'
        element={<div>Hello World</div>}
      />
    </Routes>
  );
}

export default App;
