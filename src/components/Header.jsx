"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';


const Header = () => {



   // const { title, url, thumbnailUrl } = users;

   return (
      <div className=" text-center p-3">
         <h1>Well come ...</h1>
         <Link className="text-blue-800 text-xl" href="/foods"><button>go to foods</button></Link>
      </div>
   );
};

export default Header;