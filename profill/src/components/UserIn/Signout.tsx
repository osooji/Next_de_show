// import { prisma } from '@/server/db/prisma';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'
import React from 'react'

const prisma = new PrismaClient();

const Signout = () => {

  const getID = async():Promise<void> => {
    const ID = ((await cookies()).get('ID'));
    await prisma.signUp.delete({
      where:{
        ID:ID,
      }
    })
    ((await cookies()).delete('ID'));
  }
  return (
    <div className='flex justify-center items-center gap-8 '>
      <h1 className='mx-auto p-4'>アカウント削除画面</h1>
      <button onClick={getID} className='w-full p-4 bg-gray-700 text-white'>
        削除
      </button>
    </div>
  )
}

export default Signout