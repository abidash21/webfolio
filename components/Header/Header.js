import Image from 'next/image';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

import {
  HiOutlinePencilSquare,
  HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";
import { useRouter } from 'next/router';

const Header = () => {
  const USER_IMAGE = 
    "https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg";
  const { data: session } = useSession()
  console.log(session);
  const router=useRouter();

  return (
    <div className='flex justify-between border-b-[2px] bg-slate-200 p-4'>
      <img src='./images/webfolio.png' className="w-[140px] cursor-pointer" 
      onClick={()=>router.push('/')} />
      <div className='flex gap-5 '>
        <button className='px-3 p-2 bg-purple-500 text-white rounded-full'
         onClick={()=>router.push('/create-project')}>
          <span className='hidden sm:block text-[12px]'>CREATE PROJECT</span>
        <HiOutlinePencilSquare className='sm:hidden'/></button>
        <button className='px-3 p-2 bg-red-500 text-white rounded-full' >
            {!session?
          <span onClick={() => signIn()} className='hidden sm:block text-[12px]'>SIGN IN</span>:
          <span onClick={() => signOut()} className='hidden sm:block text-[12px]'>SIGN OUT</span>}
        <HiOutlineArrowLeftOnRectangle className="sm:hidden" /></button>
        {session?
        <Image src={session.user.image} alt="user_image" width={40} height={40} className='rounded-full cursor-pointer' onClick={() => router.push('/profile') }/>:null}
      </div>
    </div>
  )
}

export default Header
