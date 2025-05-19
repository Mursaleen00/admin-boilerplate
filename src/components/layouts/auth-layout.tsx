import routes from '@/constants/routes';
import { Outlet, useLocation } from 'react-router';
import BackButton from '../button/back-button';

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex h-screen w-screen'>
      <div className='bg-primary hidden w-[50%] items-center justify-center md:flex md:p-10 lg:w-[60%] lg:p-20 xl:w-[70%] 2xl:w-[80%]'>
        <img
          alt='logo'
          width={300}
          height={300}
          src='/logo.svg'
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-y-10 p-6 md:!w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]'>
        <img
          alt='logo'
          width={300}
          height={300}
          src='/logo-colored.svg'
          className='!fill-primary block md:hidden'
        />
        {pathname !== routes.auth.login && (
          <div className='w-full max-w-lg'>
            <BackButton />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
