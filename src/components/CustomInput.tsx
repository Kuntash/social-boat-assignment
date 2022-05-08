import React, { useContext, useEffect, useState } from 'react';
import { DataContext, DataContextType } from '../context/DataProvider';
const CustomInput = () => {
  const [searchString, setSearchString] = useState<string>('');
  const { fetchResults } = useContext(DataContext) as DataContextType;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    // Guard clause to prevent request if the search string is empty
    if (searchString === '') return;
    fetchResults(searchString);
  }, [searchString, setSearchString]);

  return (
    <div className='relative'>
      <input
        placeholder='Search videos'
        className='peer hover:scale-105 sm:w-[300px] md:w-[500px] lg:w-[700px] focus:outline-none border-2 bg-gray-25 text-xl px-6 py-4 rounded-full shadow-lg text-gray-500 transition ease-linear duration-250'
        value={searchString}
        onChange={handleOnChange}
      />
      <span className='material-symbols-rounded absolute top-4 right-4 text-gray-500 text-[30px] transition peer-hover:scale-105 ease-linear duration-250'>
        search
      </span>
    </div>
  );
};

export default CustomInput;
