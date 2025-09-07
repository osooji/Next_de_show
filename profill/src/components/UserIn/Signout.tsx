import { signOut } from '@/action/actions'
import { cookies } from 'next/headers'
import React from 'react'



const Signout = () => {

  const getID = async():promis<string> => {
    const ID = ((await cookies()).get('ID'));
    return ID}
  const idDelete = ((await cookies()).delete('ID'));
  
  return (
    <div className='flex justify-center items-center gap-8 '>
      <h1 className='mx-auto p-4'>アカウント削除画面</h1>
      <button onClick={(ID) => signOut(ID)} className='w-full p-4 bg-gray-700 text-white'>
        削除
      </button>
    </div>
  )
}

export default Signout