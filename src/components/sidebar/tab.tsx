import { useState } from 'react';
import { Link } from 'react-router';

interface IProps {
  name: string;
  icon: string;
  link: string;
  index: number;
  isActive?: boolean;
  coloredIcon?: string;
}

const Tab = ({ icon, name, link, coloredIcon, index, isActive }: IProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const isHovered = hoverIndex === index;

  return (
    <Link
      to={link}
      className={`flex cursor-pointer items-center gap-2 rounded-[10px] px-3 py-2 ${isActive && 'bg-text-dark/35'} ${isHovered && 'bg-text-dark/15'}`}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <img
        src={(isHovered || isActive ? coloredIcon : icon) ?? ''}
        alt='icon'
      />

      <p
        className={`text-gray-50 ${(isHovered || isActive) && 'text-primary'})`}
      >
        {name}
      </p>
    </Link>
  );
};

export default Tab;
