"use client"

import React, { useState } from 'react';

const page = ({ params }) => {
   const id = params.id;


   const user = `https://jsonplaceholder.typicode.com/users/${id}`


   const [users, setUsers] = useState([])

   fetch(user)
      .then(res => res.json())
      .then(data => setUsers(data));





   return (
      <div>
         <h1>i am dynamic route {id}</h1>
         <h1>name: {users.name}</h1>
      </div>
   );
};

export default page;