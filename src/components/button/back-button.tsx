'use client';

// Icon Import
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className='flex cursor-pointer items-center gap-x-1'
    >
      <IoArrowBack
        size={20}
        color='#667085'
      />
      <p className='text-text-primary text-base'>Back</p>
    </button>
  );
};

export default BackButton;
