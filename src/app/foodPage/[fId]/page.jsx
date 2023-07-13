import React from 'react';

const page = () => {

   const foodApi = ('https://www.themealdb.com/api/json/v1/1/categories.php/${id}')

   const [foods, setFoods] = useState([]);
   fetch(foodApi)
      .then(res => res.json())
      .then(data => setFoods(data.categories))

   return (
      <div>

      </div>
   );
};

export default page;