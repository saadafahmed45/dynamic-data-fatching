import Link from 'next/link';
import React from 'react';

const UserCard = ({ user }) => {

   const { id, name, email } = user;

   return (
      <div>
         <div className='w-[300px] mr-5 p-5 bg-white rounded-xl  shadow-md mt-5 hover:bg-slate-300'>
            {/* <img src={user.name} alt="" /> */}
            <h2 className="bg-slate-400 p-2 text-lg space-y-0.5">Users Details:</h2>
            <h1>Name:{name}</h1>
            <h4>Email:{email}</h4>
            <p>address:{user.address.street}</p>
            <p>Number:{user.phone}</p>


            <Link href={`/users/${id}`} className='text-right text-blue-700 text-sm'>Show full</Link>

         </div>
      </div>
   );
};

export default UserCard;