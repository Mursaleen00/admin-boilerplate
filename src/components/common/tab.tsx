'use client';
import React, { FC } from 'react';

interface Props {
  tabs: Array<string>;
  step: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}

const Tab: FC<Props> = ({ tabs, step, setStep }) => {
  const handleChange = (index: number) => setStep?.(index);

  return (
    <div className='flex gap-x-5 px-6 pt-4'>
      {tabs.map((tab, index) => {
        return (
          <button
            type='button'
            key={index}
            className={`${
              step == index ? 'text-primary' : 'text-text-secondary'
            } flex cursor-pointer flex-col items-center gap-x-3 gap-y-1 text-sm font-medium`}
            onClick={() => handleChange(index)}
          >
            {tab}
            {step == index && (
              <div className='bg-primary h-1 w-full rounded-t-md' />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
