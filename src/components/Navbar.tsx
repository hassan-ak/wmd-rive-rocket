import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Navbar() {
  return (
    <div className='flex flex-row items-center justify-start space-x-4 p-5'>
      <Image src={logo} alt='' className='h-[50px] w-[22.5px]' />
      <p className='text-lg font-medium text-white'>Rocket Animation</p>
    </div>
  );
}
