'use client';

// Component
import Tab from './tab';

import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router';
import { sidebarTabs } from '../../constants/sidebar';

interface TabProps {
  isOpen: boolean;
  setIsOPen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOPen }: TabProps) => {
  const path = window.location.pathname;

  const handleIsActive = (name: string) => {
    const updatedName = name.replace(/\s/g, '').toLocaleLowerCase();
    const updatedPath = path
      ?.split('/')
      ?.slice(1)[0]
      ?.replace(/-/g, '')
      ?.toLocaleLowerCase();

    return updatedName.includes(updatedPath);
  };

  return (
    <div
      className={`${isOpen ? 'absolute top-0 left-0 z-[999] lg:relative' : 'hidden'} bg-primary h-full w-64 min-w-xs flex-col space-y-6 px-6 py-5 lg:flex`}
    >
      <Link to={'/'}>
        <img
          alt='logo'
          src={'/logo-colored.svg'}
        />
      </Link>

      <button
        className={`flex w-full flex-col gap-y-4`}
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
    </div>
  );
};

export default Sidebar;
