import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className='top-0 z-20 flex w-full items-center justify-between border-b border-b-gray-300 bg-white px-6 py-4 lg:justify-end'>
      <FaBars
        onClick={() => setIsOpen(!isOpen)}
        size={24}
        className='hover:text-primary cursor-pointer transition duration-150 lg:hidden'
      />
    </div>
  );
};

export default Navbar;
