import React, { useContext } from 'react';
import { DataContext, DataContextType } from '../context/DataProvider';
import LoadingSearchScreen from './LoadingSearchScreen';

const SearchResultList = () => {
  const { searchResults, searchResultStatus } = useContext(
    DataContext
  ) as DataContextType;

  if (searchResultStatus === 'loading') return <LoadingSearchScreen />;

  return <h1>Result loaded</h1>;
};

export default SearchResultList;
