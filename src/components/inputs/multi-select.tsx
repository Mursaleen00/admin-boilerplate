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
    <div className='flex flex-col gap-y-2'>
      <DropdownMenu
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <DropdownMenuTrigger
          ref={triggerRef}
          className={`border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-fit cursor-pointer items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-sm focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${className}`}
        >
          <div className='flex w-full items-center justify-between gap-2'>
            <p>{`Select ${label}`}</p>
            <IoIosArrowDown className='h-4 w-4 opacity-50' />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          ref={dropdownRef}
          className='!w-fit min-w-[335px] bg-white'
        >
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator className='border' />

          {options.map(({ label, value }) => (
            <DropdownMenuCheckboxItem
              key={value}
              checked={values.includes(value)}
              onCheckedChange={checked => handleChange(value, checked)}
              onSelect={e => e.preventDefault()} // Prevent closing on selection
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
              className='cursor-pointer text-white'
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
