import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCaretUp, faClock } from "@fortawesome/free-solid-svg-icons"; 
export default function Bai2() {
  return (
    <>Bai2
    <br />
      <div className='bg-gray-300 w-[300px] h-[250px] rounded'>
        <div>
        <p>Input Label</p>
        <div className="relative">
            <input
              type="text"
              placeholder=""
              className="rounded border border-blue-700 h-[30px] w-[250px]"
            />
            <FontAwesomeIcon
              className="w-[15px] absolute top-1/2 transform -translate-y-1/2 text-gray-400 left-[5px]"
              icon={faClock}
            />
            <FontAwesomeIcon
              className="w-[10px] absolute top-1/2 transform -translate-y-1/2 text-black ml-[14pc]"
              icon={faCaretUp}
            />
          </div>
          <div className="mt-[10px] border-2 border-gray-400 w-[250px] h-[160px] rounded p-[10px] flex flex-col justify-between bg-white">
            <label className="flex items-center justify-between">
              Label
              <input type="checkbox" className="ml-[10px]" />
            </label>
            <label className="flex items-center justify-between">
              Label
              <input type="checkbox" className="ml-[10px]" />
            </label>
            <label className="flex items-center justify-between">
              Label
              <input type="checkbox" className="ml-[10px]" />
            </label>
            <label className="flex items-center justify-between">
              Label
              <input type="checkbox" className="ml-[10px]" />
            </label>
            <div className="flex justify-center text-center gap-[50px]">
              <button className="border border-gray-400 w-[300px] h-[25px]  bg-white  rounded ">
                Clear
              </button>
              <button className="border border-gray-400 w-[300px] h-[25px] bg-blue-200 rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
        

      </div>
    </>
  )
}

