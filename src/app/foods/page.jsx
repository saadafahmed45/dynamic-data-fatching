"use client"

import FoodCard from '@/components/FoodCard';
import Link from 'next/link';
import React, { useState } from 'react';

const Foods = () => {

   const foodApi = 'https://www.themealdb.com/api/json/v1/1/categories.php'

   const [foods, setFoods] = useState([]);
   fetch(foodApi)
      .then(res => res.json())
      .then(data => setFoods(data.categories))


   return (
      <div>

         <section className=" bg-gray-100 dark:bg-gray-900 p-6">
            <Link href="/users" className='text-right text-blue-700 text-sm'>Go to users</Link>


            <h1 className='text-3xl text-yellow-100 text-center my-3'>Our Users: {foods.length}</h1>


            <div className=" flex flex-wrap justify-around ">

               {
                  foods.slice(0, 12).map((food) => {
                     return <FoodCard key={food.idCategory} food={food} />
                  })
               }
            </div>
         </section>
      </div>
   );
};

export default Foods;