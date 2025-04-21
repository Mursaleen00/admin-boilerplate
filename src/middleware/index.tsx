// Cookie
import Cookies from 'js-cookie';

// React Router
import { Navigate, Outlet } from 'react-router';

// Constants
import routes from '@/constants/routes';

const token = Cookies.get('token');

const {
  auth: { login },
  page: { dashboard },
} = routes;

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
