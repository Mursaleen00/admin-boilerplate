'use client';
// import Cookie from 'js-cookie';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router';
// import routes from '../../constants/routes';
import Sidebar from '../sidebar/sidebar';

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // const router = useNavigate();

  // const handleLogout = () => {
  //   Cookie.remove('token');
  //   router(routes.auth.login);
  // };

  return (
    <div className='flex h-screen w-full overflow-hidden'>
      {/* Sidebar component */}
      <Sidebar
        isOpen={isOpen}
        setIsOPen={setIsOpen}
      />

      {isOpen && (
        <button
          className='fixed inset-0 z-30 bg-black opacity-50 lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className='bg-primary-bg flex !w-full min-w-0 flex-col items-end'>
        {/* Hamburger menu button */}
        <div className='sticky top-0 z-20 flex w-full items-center justify-between border-b border-b-black bg-white px-6 py-4 lg:justify-end'>
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            size={24}
            className='hover:text-primary cursor-pointer transition duration-150 lg:hidden'
          />
        </div>

        {/* Main content area */}
        <div className='h-full max-h-[90dvh] w-full overflow-auto px-6 pt-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
