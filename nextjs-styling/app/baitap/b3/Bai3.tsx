import React from 'react';

export default function Bai3() {
  return (
    <>
      <br />
      <div className='border-2 border-gray-500 w-[300px] h-[570px] rounded p-4'>
        <p className='font-bold text-lg'>Form Sign Up</p>
        
        <label className='block mt-2'>
          <b>Name</b>
          <input type="text" className='border-2 border-gray-200 w-full mt-1' />
        </label>
        
        <label className='block mt-2'>
          <b>Email</b>
          <input type="text" className='border-2 border-gray-200 w-full mt-1' />
        </label>

        <label className='block mt-2'>
          <b>Phone Number</b>
          <input type="text" className='border-2 border-gray-200 w-full mt-1' />
        </label>

        <label className='block mt-2'>
          <b>Address</b>
          <textarea className='border-2 border-gray-200 w-full mt-1' />
        </label>
        
        <div className='font-bold mt-4'>
          Skills
        </div>
        
        <label className='block mt-2'>
          <input type="checkbox" className='mr-2' />
          HTML
        </label>

        <label className='block mt-2'>
          <input type="checkbox" className='mr-2' />
          UX Design
        </label>

        <label className='block mt-2'>
          <input type="checkbox" className='mr-2' />
          CSS
        </label>

        <label className='block mt-2'>
          <input type="checkbox" className='mr-2' />
          JavaScript
        </label>
        
        <button className='mt-4 p-2 bg-blue-500 text-white rounded w-[250px]'>Sign Up</button>
      </div>
    </>
  );
}
