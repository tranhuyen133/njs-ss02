import React from 'react'

export default function Bai6() {
  return (
    <>
      <header className='bg-red-400 text-black p-4 h-[50px]'>
        <div className='container justify-between flex items-center mx-auto'> 
            <div className='font-bold text-xl'>Logoispum</div>
        <nav>
            <ul className='gap-[30px] flex space-x-4 mr-[10pc]'>
                <li>
                <a href="home " className='hover:underline '>home</a></li>
                <li>
                <a href="updates " className='hover:underline '>Updates</a></li>
                <li>
                <a href="services " className='hover:underline '>Services</a></li>
                <li>
                <a href="features" className='hover:underline '>Features</a></li>
                <li>
                <a href="about us" className='hover:underline '>About Us</a></li>
            </ul>
        </nav>
        </div>
        
      </header>
    </>
  )
}
