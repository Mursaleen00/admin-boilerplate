'use client';
import React from 'react';

// Components
import Navbar from '../navbar';
import Sidebar from '../sidebar/sidebar';

// Icons
import { Outlet } from 'react-router';

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
        {/* Navbar */}
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Main content area */}
        <div className='h-full max-h-[90dvh] w-full overflow-auto px-6 pt-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
