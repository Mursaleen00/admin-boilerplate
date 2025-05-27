import { FC } from 'react';
import { TableHead, TableHeader, TableRow } from '../ui/table';

interface THeaderProps {
  headers: Array<string>;
}

const THead: FC<THeaderProps> = ({ headers }) => {
  return (
    <TableHeader className='!border-none'>
      <TableRow className='text-text-primary bg-text-secondary/20 border-none'>
        {headers?.map((header, index) => (
          <TableHead
            key={index}
            className='truncate px-3'
          >
            {header}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default THead;
