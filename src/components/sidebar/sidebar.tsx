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
import { Link } from 'react-router';

// Hooks
import handleIsActive from '@/hooks/get-is-active';

// Toast
import toast from 'react-hot-toast';

// Assets
import logo from '@/assets/logo.svg';
import logout from '@/assets/sidebar-icons/logout.svg';

interface TabProps {
  isOpen: boolean;
  setIsOPen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOPen }: TabProps) => {
  const handleLogout = () => {
    Cookies.remove('token');
    toast.success('Logout Successfully');
    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <div
      className={`bg-primary fixed top-0 left-0 z-[999] h-full w-full max-w-64 min-w-xs px-6 py-10 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col lg:flex`}
    >
      <Link to={routes.page.dashboard}>
        <img
          alt='logo'
          src={logo}
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
        className='absolute bottom-6 w-full max-w-[270px] rounded-lg hover:bg-white/15'
      >
        <Tab
          name='Logout'
          icon={logout}
          link={'#'}
        />
      </button>
    </div>
  );
};

export default Sidebar;
