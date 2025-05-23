'use client';

import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  onChange: (value: string[]) => void;
  options: Array<Option>;
  isPending?: boolean;
  className?: string;
  isBadges?: boolean;
  values: string[];
  label: string;
}

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function MultiSelect({
  label,
  values,
  options,
  isBadges,
  onChange,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleChange = (value: string, checked: Checked) => {
    if (checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter(v => v !== value));
    }
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='flex w-full flex-col gap-y-2 sm:w-fit'>
      <DropdownMenu
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <DropdownMenuTrigger
          ref={triggerRef}
          className={`border-divider h-9 w-full cursor-pointer rounded-md border bg-white px-3 py-2 text-sm ring-0 outline-0 sm:w-fit sm:min-w-[250px] ${className}`}
        >
          <div className='flex w-full items-center justify-between gap-2 capitalize'>
            {label}
            <IoIosArrowDown className='h-4 w-4 opacity-50' />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          ref={dropdownRef}
          className='border-divider !z-[999] !w-fit min-w-[250px] bg-white'
        >
          <DropdownMenuLabel className='capitalize'>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator className='border-divider border-t' />

          {options.map(({ label, value }) => (
            <DropdownMenuCheckboxItem
              key={value}
              checked={values.includes(value)}
              onCheckedChange={checked => handleChange(value, checked)}
              onSelect={e => e.preventDefault()}
            >
              {label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {isBadges && values.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {values.map((value, i) => (
            <Badge
              key={i}
              className='cursor-pointer text-white capitalize'
              onClick={() => onChange(values.filter(v => v !== value))}
            >
              {options.find(option => option.value === value)?.label}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
