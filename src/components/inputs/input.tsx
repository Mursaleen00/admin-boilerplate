'use client';
import { Fragment, InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
}

const Input = ({
  label,
  type,
  error,
  touched,
  required,
  className,
  containerClassName,
  ...res
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const isError = error && touched;

  return (
    <label
      htmlFor='input'
      className={`w-full space-y-1 sm:w-fit ${containerClassName}`}
    >
      {label && (
        <p className='text-text-light text-sm font-medium capitalize'>
          {label}
          {required && <span className='text-red-400'>*</span>}
        </p>
      )}
      <div
        className={`shadow-box-shadow border-divider flex h-9 w-full items-center rounded-md border bg-white pr-3 ${className} ${isError && `items-center justify-between !border-red-400`}`}
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
