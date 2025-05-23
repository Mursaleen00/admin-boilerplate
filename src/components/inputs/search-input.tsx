'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDebounce } from 'use-debounce';

import { GoSearch } from 'react-icons/go';
interface ISearchInput {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

const SearchInput: FC<ISearchInput> = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm || '');
  const [debouncedValue] = useDebounce(inputValue, 800);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => setSearchTerm?.(debouncedValue), [debouncedValue]);

  return (
    <div className='border-divider relative flex !h-9 w-full min-w-[200px] items-center gap-x-2 rounded-md border bg-white pl-3 sm:w-fit'>
      <GoSearch
        size={20}
        className='text-text-secondary'
      />
      <input
        type='text'
        id='table-search'
        className='placeholder:text-text-secondary block w-full text-sm focus:outline-none'
        placeholder='Search'
        value={inputValue}
        onChange={handleSearch}
        onKeyDown={e => e.stopPropagation()}
      />
    </div>
  );
};

export default SearchInput;
