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
  label: string;
  options: Array<option>;
  onChange: (value: string) => void;
  value: string;
  isPending?: boolean;
  className?: string;
}

export function FilterSelect({
  label,
  options,
  onChange,
  value,
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
