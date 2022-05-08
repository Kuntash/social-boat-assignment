import React from 'react';

const LoadingSearchScreen = () => {
  return (
    <div className='transition-all w-full p-3 gap-x-6 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div className='shadow-lg shadow-gray-200 rounded-lg p-4 flex flex-col gap-y-5'>
        <div className='animate-pulse flex space-x-8'>
          <div className='rounded-full bg-slate-200 h-20 w-20'></div>
          <div className='flex-1 space-y-6 py-1 w-[100px] md:w-[200px]'>
            <div className='h-4 bg-slate-200 rounded' />
            <div className='h-4 bg-slate-200 rounded' />
            <div className='h-4 bg-slate-200 rounded' />
          </div>
        </div>
        <div className='h-4 bg-slate-200 rounded' />
        <div className='h-4 bg-slate-200 rounded' />
      </div>
      <div className='shadow-lg shadow-gray-200 rounded-lg p-4 flex flex-col gap-y-5'>
        <div className='animate-pulse flex space-x-8'>
          <div className='rounded-full bg-slate-200 h-20 w-20'></div>
          <div className='flex-1 space-y-6 py-1 w-[100px] md:w-[200px]'>
            <div className='h-4 bg-slate-200 rounded' />
            <div className='h-4 bg-slate-200 rounded' />
            <div className='h-4 bg-slate-200 rounded' />
          </div>
        </div>
        <div className='h-4 bg-slate-200 rounded' />
        <div className='h-4 bg-slate-200 rounded' />
      </div>
      <div className='shadow-lg shadow-gray-200 rounded-lg p-4 flex flex-col gap-y-5'>
        <div className='animate-pulse flex space-x-8'>
          <div className='rounded-full bg-slate-200 h-20 w-20'></div>
          <div className='flex-1 space-y-6 py-1 w-[100px] md:w-[200px]'>
            <div className='h-4 bg-slate-200 rounded' />
            <div className='h-4 bg-slate-200 rounded' />
            <div className='h-4 bg-slate-200 rounded' />
          </div>
        </div>
        <div className='h-4 bg-slate-200 rounded' />
        <div className='h-4 bg-slate-200 rounded' />
      </div>
    </div>
  );
};

export default LoadingSearchScreen;
