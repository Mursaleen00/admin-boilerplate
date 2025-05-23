import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Loader from '../loader';

interface option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  label: string;
  className?: string;
  isPending?: boolean;
  options: Array<option>;
  onChange: (value: string) => void;
}

export function SingleSelect({
  label,
  value,
  options,
  onChange,
  isPending,
  className,
}: SelectProps) {
  return (
    <Select
      value={value}
      onValueChange={value => onChange(value)}
    >
      <SelectTrigger
        className={`border-divider w-full min-w-[250px] bg-white !ring-0 !outline-none sm:w-fit ${className}`}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className='border-divider bg-white'>
        {isPending ? (
          <SelectGroup>
            <SelectLabel>
              <Loader size={20} />
            </SelectLabel>
          </SelectGroup>
        ) : (
          <SelectGroup>
            <SelectLabel className='text-sm font-medium capitalize'>
              {label}s
            </SelectLabel>
            <SelectSeparator className='border-divider border-t' />

            {options.map(({ label, value }) => (
              <SelectItem
                key={value}
                value={value}
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}
