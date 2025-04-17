import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='bg-primary hidden w-[50%] items-center justify-center md:flex md:p-10 lg:w-[60%] lg:p-20 xl:w-[70%] 2xl:w-[80%]'>
        <img
          alt='logo'
          src='/logo-colored.svg'
          width={300}
          height={300}
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-y-10 p-6 md:!w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]'>
        <img
          alt='logo'
          src='/logo.svg'
          width={300}
          height={300}
          className='block md:hidden'
        />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
