import { useLocation } from 'react-router';

const useHandleIsActive = (name: string) => {
  const { pathname } = useLocation();
  const updatedName = name.replace(/\s/g, '').toLocaleLowerCase();
  const updatedPath = pathname
    ?.split('/')
    ?.slice(1)[0]
    ?.replace(/-/g, '')
    ?.toLocaleLowerCase();

  return updatedName.includes(updatedPath);
};

export default useHandleIsActive;
