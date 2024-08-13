import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye } from "@fortawesome/free-solid-svg-icons"; 
export default function Bai1() {
  return (
    <>Bai1
      <div  className='bg-gray-300 w-[300px] h-[100px] rounded'>
        <div className='ml-[20px]'>
            <p className='text-blue-500'>Label</p>
            <input type="text" placeholder='.....' className='absolute rounded'/>
            <FontAwesomeIcon className='w-[15px] relative ml-[185px] mt-[5px]' icon={faEye}></FontAwesomeIcon>
        </div>
            <p className='mt-[8px] ml-[20px]'>Helper Text</p>
      </div>
    </>
  )
}
