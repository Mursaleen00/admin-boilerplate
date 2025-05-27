import { FC } from 'react';

import { Button } from '@/components/ui/button';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SingleSelect } from '../inputs/select';

export interface TableFooterProps {
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  itemsPerPageOptions: number[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const TableFooter: FC<Partial<TableFooterProps>> = ({
  totalPages,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  setItemsPerPage,
  itemsPerPageOptions,
}) => {
  const options =
    itemsPerPageOptions?.map(option => ({
      value: String(option),
      label: String(option),
    })) || [];

  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center gap-2'>
        {/* <span className='text-sm font-medium text-gray-600'>
          Rows per page:
        </span> */}
        <SingleSelect
          options={options}
          label='Rows per page'
          className='!w-20 !min-w-10'
          value={String(itemsPerPage)}
          onChange={value => setItemsPerPage?.(+value)}
        />
      </div>
      <div className='flex items-center gap-2'>
        <Button
          value='destructive'
          disabled={currentPage === 1}
          onClick={() => setCurrentPage?.(prev => Math.max(prev - 1, 1))}
          className='bg-transparent text-black hover:bg-transparent hover:bg-none'
        >
          <IoIosArrowBack />
        </Button>
        <span className='text-sm font-medium text-gray-600'>
          {currentPage} / {totalPages || 1}
        </span>
        <Button
          value='destructive'
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage?.(prev => Math.min(prev + 1, totalPages || 1))
          }
          className='bg-transparent text-black hover:bg-transparent hover:bg-none'
        >
          <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
};

export default TableFooter;
