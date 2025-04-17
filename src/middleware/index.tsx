import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router';

const token = Cookies.get('token');

const dashboard = '/dashboard';
const login = '/login';

export const NotFoundRedirect = () => (
  <Navigate
    to={token ? dashboard : login}
    replace
  />
);

export const ProtectedRoute = () => {
  return !token ? (
    <Navigate
      to={login}
      replace
    />
  ) : (
    <Outlet />
  );
};

export const PublicRoute = () => {
  return token ? (
    <Navigate
      to={dashboard}
      replace
    />
  ) : (
    <Outlet />
  );
};
