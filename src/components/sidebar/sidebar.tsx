'use client';

// Component
import Tab from './tab';

// Constants
import routes from '../../constants/routes';
import sidebarTabs from '../../constants/sidebar';

// React
import { Dispatch, SetStateAction } from 'react';

// Cookie
import Cookies from 'js-cookie';

// React Router
import { Link, useNavigate } from 'react-router';

// Utils
import handleIsActive from '../../utils/get-is-active';

interface TabProps {
  isOpen: boolean;
  setIsOPen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOPen }: TabProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token');
    navigate(routes.auth.login);
    window.location.reload();
  };

  return (
    <div
      className={`${isOpen ? 'absolute top-0 left-0 z-[999] lg:relative' : 'hidden'} bg-primary h-full w-64 min-w-xs flex-col px-6 py-5 lg:flex`}
    >
      <Link to={routes.page.dashboard}>
        <img
          alt='logo'
          src={'/logo-colored.svg'}
        />
      </Link>

      <button
        className={`mt-6 flex w-full flex-col gap-y-4`}
        onClick={() => setIsOPen(false)}
      >
        {sidebarTabs?.map((item, index) => {
          return (
            <Tab
              key={index}
              index={index}
              isActive={handleIsActive(item?.name)}
              {...item}
            />
          );
        })}
      </button>
      <button
        className='absolute bottom-6'
        onClick={handleLogout}
      >
        <Tab
          icon='/icons/logout.svg'
          name='Logout'
          link={routes.auth.login}
        />
      </button>
    </div>
  );
};

export default Sidebar;
