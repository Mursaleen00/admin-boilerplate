// React & next Imports
import { ButtonHTMLAttributes } from 'react';
import { TbLoaderQuarter } from 'react-icons/tb';

export interface IButton {
  text?: string;
  isOutline?: boolean;
  isPending?: boolean;
}

const Button = ({
  text,
  className,
  isOutline,
  disabled,
  children,
  isPending,
  ...rest
}: IButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      disabled={isPending || disabled}
      className={`${!isOutline ? 'bg-primary' : 'border-primary !text-primary border bg-transparent'} flex h-9 w-full cursor-pointer items-center justify-center gap-x-3 rounded-md px-6 py-2 text-center text-sm font-medium text-white ${className}`}
    >
      {isPending ? (
        <TbLoaderQuarter
          size={20}
          className={`text-text-dark animate-spin ${className}`}
        />
      ) : text ? (
        text
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
