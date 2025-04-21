// Cookie
import Cookies from 'js-cookie';

// React Router
import { Navigate, Outlet } from 'react-router';

// Constants
import routes from '../constants/routes';

const token = Cookies.get('token');

const { auth, page } = routes;

export const NotFoundRedirect = () => (
  <Navigate
    to={token ? page.dashboard : auth.login}
    replace
  />
);

export const ProtectedRoute = () => {
  return !token ? (
    <Navigate
      to={auth.login}
      replace
    />
  ) : (
    <Outlet />
  );
};

export const PublicRoute = () => {
  return token ? (
    <Navigate
      to={page.dashboard}
      replace
    />
  ) : (
    <Outlet />
  );
};
