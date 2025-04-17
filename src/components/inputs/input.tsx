'use client';
import { Fragment, InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

const Input = ({
  label,
  type,
  error,
  touched,
  required,
  className,
  ...res
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const isError = error && touched;

  return (
    <label
      htmlFor='input'
      className='w-full space-y-1'
    >
      <p className='text-text-light text-sm font-medium capitalize'>
        {label}
        {required && <span className='text-red-400'>*</span>}
      </p>
      <div
        className={`border-text-dark shadow-box-shadow flex w-full items-center rounded-lg border bg-white pr-3 ${className} ${isError && `h-11 items-center justify-between !border-red-400`}`}
      >
        <input
          type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
          id='input'
          className='h-full w-full rounded-xl px-3 py-2 ring-0 outline-none'
          {...res}
        />

        {type === 'password' && (
          <Fragment>
            {isVisible ? (
              <FiEye
                size={24}
                onClick={() => setIsVisible(!isVisible)}
                className='text-secondary-300 cursor-pointer'
              />
            ) : (
              <FiEyeOff
                size={24}
                onClick={() => setIsVisible(!isVisible)}
                className='text-secondary-300 cursor-pointer'
              />
            )}
          </Fragment>
        )}
      </div>
      {isError && <p className='text-xs text-red-400'>{error}</p>}
    </label>
  );
};

export default Input;
