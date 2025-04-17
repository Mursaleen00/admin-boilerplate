import { Route, Routes } from 'react-router';
import AuthLayout from './components/layouts/auth-layout';
import LoginView from './views/login';

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route
          path='login'
          element={<LoginView />}
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
