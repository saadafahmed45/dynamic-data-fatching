import React from 'react';
import Image from 'next/image'

import img from '../images/j.jpg'
const Header = () => {
   return (
      <div className="h-screen flex flex-col	 items-center justify-center bg-gray-100 dark:bg-gray-900">

         <div className='w-[300px] mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 '>

            <Image src={img} className="h-30 mx-auto rounded-full ring-4 ring-green-600" alt="" />
            <div className='text-center'>
               <div className='space-y-0.5'>
                  <p className="text-lx font-bold text-black mt-3">learn with Saadaf </p>
                  <p className="text-md font-semibold text-gray-700">Youtube channel </p>
               </div>
               <button className="py-1 px-4 hover:bg-purple-800 hover:text-white duration-400
               focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 font-semibold text-purple-800 border border-purple-700 rounded-full mt-3">visit Now</button>
            </div>
         </div>
      </div>
   );
};

export default Header;