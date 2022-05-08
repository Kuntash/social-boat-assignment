import React from 'react';
import Header from './components/Header';
import SearchResultList from './components/SearchResultList';

function App() {
  return (
    <div className='h-[120vh]'>
      <Header />
      <SearchResultList />
    </div>
  );
}

export default App;
