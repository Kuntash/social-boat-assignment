import React, { createContext, useState } from 'react';

export interface SearchResult {
  heading: string;
  tags: string[];
  text: string;
  video: string;
}
export interface DataContextType {
  searchResults: SearchResult[];
  searchResultStatus: 'idle' | 'success' | 'failed' | 'loading';
  fetchResults: (searchString: string) => Promise<void>;
}
export const DataContext = createContext<DataContextType | null>(null);
const DataProvider = ({ children }: { children: JSX.Element }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchResultStatus, setSearchResultStatus] = useState<
    'idle' | 'success' | 'loading' | 'failed'
  >('idle');
  const fetchResults = async (searchString: string): Promise<void> => {
    setSearchResultStatus('loading');
    try {
      const requestOptions: RequestInit = {
        method: 'GET',
      };
      const response = await fetch(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchString}&numResults=5`,
        requestOptions
      );

      if (response.status === 400) throw new Error('failed request');
      const result = await response.json();
      setSearchResultStatus('success');
      setSearchResults(result.results);
    } catch (err) {
      setSearchResultStatus('failed');
    }
  };

  return (
    <DataContext.Provider
      value={{
        fetchResults,
        searchResults,
        searchResultStatus,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
