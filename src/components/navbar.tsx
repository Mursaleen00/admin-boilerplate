import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const Heading = pathname.split('/')[1]?.replace(/-/g, ' ');

  return (
    <div className='top-0 z-20 flex w-full items-center justify-between border-b border-b-gray-300 bg-white px-6 py-4'>
      <p className='text-primary text-3xl font-bold capitalize'>{Heading}</p>

      <FaBars
        onClick={() => setIsOpen(!isOpen)}
        size={24}
        className='hover:text-primary cursor-pointer transition duration-150 lg:hidden'
      />
    </div>
  );
};

export default Navbar;
