import { useState } from 'react';
import { Link } from 'react-router';

interface IProps {
  name: string;
  icon: string;
  link: string;
  index?: number;
  isActive?: boolean;
  coloredIcon?: string;
}

const Tab = ({ icon, name, link, coloredIcon, index, isActive }: IProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const isHovered = hoverIndex === index;

  return (
    <Link
      to={link}
      className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-all duration-300 ease-in-out ${isActive && '!text-primary !bg-white font-semibold'} ${isHovered && !isActive && 'bg-white/15'}`}
      onMouseEnter={() => setHoverIndex(index ?? null)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <img
        src={isActive ? coloredIcon || icon : icon}
        alt='icon'
        width={24}
        height={24}
        className='transition-transform duration-300'
        loading='lazy'
      />

      <p
        className={`transform transition-all duration-300 ease-in-out ${isHovered || isActive ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-80'} `}
      >
        {name}
      </p>
    </Link>
  );
};

export default Tab;
