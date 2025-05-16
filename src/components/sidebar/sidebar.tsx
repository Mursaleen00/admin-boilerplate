'use client';

// Component
import Tab from './tab';

// Constants
import routes from '@/constants/routes';
import sidebarTabs from '@/constants/sidebar';

// React
import { Dispatch, SetStateAction } from 'react';

// Cookie
import Cookies from 'js-cookie';

// React Router
import { Link, useNavigate } from 'react-router';

// Hooks
import handleIsActive from '@/hooks/get-is-active';

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
      className={`${isOpen ? 'absolute top-0 left-0 z-[999] lg:relative' : 'hidden'} bg-primary h-full w-full max-w-64 min-w-xs flex-col px-6 py-10 lg:flex`}
    >
      <Link to={routes.page.dashboard}>
        <img
          alt='logo'
          src={'/logo.svg'}
        />
      </Link>

      <button
        onClick={() => setIsOPen(false)}
        className={`mt-10 flex w-full flex-col gap-y-4`}
      >
        {sidebarTabs?.map(({ name, coloredIcon, icon, link }, index) => {
          return (
            <Tab
              icon={icon}
              key={index}
              name={name}
              link={link}
              index={index}
              coloredIcon={coloredIcon}
              isActive={handleIsActive(name)}
            />
          );
        })}
      </button>

      <button
        onClick={handleLogout}
        className='absolute bottom-6'
      >
        <Tab
          name='Logout'
          icon='/sidebar-icons/logout.svg'
          link={routes.auth.login}
        />
      </button>
    </div>
  );
};

export default Sidebar;
