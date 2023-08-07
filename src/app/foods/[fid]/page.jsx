"use client"

import React, { useState } from 'react';

const page = ({ params }) => {

   const id = foods(params.fid):

   const [foods, setFoods] = useState([]);

   const foodApi = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

   fetch(foodApi)
      .then(res => res.json())
      .then(data => setFoods(data.categories[0]))


   return (
      <div>

         <h1>i am dynamic route {id}</h1>

         <h1 className='mt-2'>Name: {foods.strCategory}</h1>

         <h2>Description: {foods.strCategoryDescription}</h2>


      </div>
   );
};

export default page;
