import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import Tab from '../common/tab';
import SearchInput from '../inputs/search-input';
import TableFooter from './table-footer';
import THead from './table-header';

export interface ITable {
  total: number;
  isFooter: boolean;
  currentTab: number;
  searchTerm: string;
  rowsPerPage: number;
  currentPage: number;
  tabs: Array<string>;
  children: ReactNode;
  tHeads: Array<string>;
  rowsOption: Array<number>;
  minWidth: '200px' | '600px';
  setTab: Dispatch<SetStateAction<number>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const CustomTable: FC<Partial<ITable>> = ({
  tabs,
  total,
  tHeads,
  setTab,
  isFooter,
  children,
  searchTerm,
  rowsOption,
  currentTab,
  rowsPerPage,
  currentPage,
  setSearchTerm,
  setRowsPerPage,
  setCurrentPage,
  minWidth = '200px',
}) => {
  return (
    <div className='border-divider overflow-hidden rounded-[20px] border !p-0'>
      <div className='border-divider flex items-center justify-between gap-x-3 border-b px-5 py-4'>
        <div className='flex items-center gap-2'>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>
      <div>
        {tabs && (
          <Tab
            step={currentTab || 0}
            tabs={tabs}
            setStep={setTab}
          />
        )}
        <div className='max-h-[68dvh] w-full overflow-x-scroll overflow-y-auto xl:overflow-x-hidden'>
          <table className={`w-full min-w-[${minWidth}] relative`}>
            <THead headers={tHeads || []} />

            {children}
          </table>
        </div>
      </div>

      {isFooter && (
        <TableFooter
          totalPages={total}
          currentPage={currentPage}
          itemsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          setItemsPerPage={setRowsPerPage}
          itemsPerPageOptions={rowsOption || [5, 10, 20]}
        />
      )}
    </div>

    // <div>
    //   <TableFooter
    //     totalPages={10}
    //     currentPage={0}
    //     itemsPerPage={10}
    //     itemsPerPageOptions={[5, 10, 20]}
    //     setCurrentPage={function (value: SetStateAction<number>): void {
    //       throw new Error('Function not implemented.');
    //     }}
    //     setItemsPerPage={function (value: SetStateAction<number>): void {
    //       throw new Error('Function not implemented.');
    //     }}
    //   />
    // </div>
  );
};

export default CustomTable;
