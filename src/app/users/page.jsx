"use client"


import UserCard from '@/components/UserCard';
import Link from 'next/link';
import React, { useState } from 'react';

const Users = () => {

   const user = 'https://jsonplaceholder.typicode.com/users'


   const [users, setUsers] = useState([])

   fetch(user)
      .then(res => res.json())
      .then(data => setUsers(data))

   return (
      <div>


         <section className=" bg-gray-100 dark:bg-gray-900 p-6">
            <Link href="/" className='text-right text-blue-700 text-sm'>Go to home</Link>


            <h1 className='text-3xl text-yellow-100 text-center my-3'>Our Users: {users.length}</h1>


            <div className=" flex flex-wrap justify-around ">

               {
                  users.map((user) => {
                     return <UserCard key={user.id} user={user} />
                  })
               }
            </div>
         </section>
      </div>
   );
};

export default Users;