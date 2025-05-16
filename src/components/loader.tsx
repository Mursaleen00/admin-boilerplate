import { FC } from 'react';
import { HashLoader } from 'react-spinners';

export interface LoadingComponentProps {
  isLoadingText?: boolean;
  size?: number;
  color?: string;
}

const Loader: FC<LoadingComponentProps> = ({
  size,
  color = '#212636',
  isLoadingText,
}) => {
  return (
    <div className={`flex w-full items-center justify-center`}>
      <div className='flex flex-col gap-4'>
        <HashLoader
          size={size}
          color={color}
        />
        {isLoadingText && <p className='text-lg'>Loading...</p>}
      </div>
    </div>
  );
};

export default Loader;
