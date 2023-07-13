"use client"
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {

   const { idCategory, strCategory, strCategoryThumb } = food;

   return (
      <div>
         <div className='w-[300px] mr-5 p-5 bg-white rounded-xl  shadow-md mt-5 hover:bg-slate-100'>
            <img className='duration-300 transition ease-in-out delay-150		hover:-translate-y-1 hover:scale-110' src={strCategoryThumb} alt="" />
            <h1 className='mt-2'>Name: {strCategory}</h1>

            {/* <h2>Description: {user.strCategoryDescription}</h2> */}


            <Link href={`/foods/${idCategory}`} className='text-right text-blue-700 text-sm'>Show full</Link>

         </div>
      </div>
   );
};

export default FoodCard;