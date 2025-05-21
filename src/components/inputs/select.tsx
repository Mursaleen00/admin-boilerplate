import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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

export function CustomSelect({
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
      <SelectTrigger className={`w-full ${className}`}>
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {isPending ? (
          <SelectGroup>
            <SelectLabel>
              <Loader size={20} />
            </SelectLabel>
          </SelectGroup>
        ) : (
          <SelectGroup>
            <SelectLabel>{label}s</SelectLabel>
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
