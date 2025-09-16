'use client'

import { store } from '@/lib/SW/type/(sign)/zustand'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  const money = store((state) => (state.money))

  return (
    <div className='flex justify-center'>
      <div className='w-[650px] flex flex-col justify-center'>
        <div className='flex justify-center items-center m-2'>
          <div className='text-xl flex justify-center items-center'>所持金</div>
          <div className='bg-white px-2  text-xl flex justify-center items-center border rounded'>{money}</div>
        </div>
        {/* ページジャンプ */}
        <div className='flex justify-between items-center '>
          <Link href="/SWbasic/items" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>アイテム(道具屋)</Link>
          <Link href="/SWbasic/weapon" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>ウェポン(武器屋)</Link>
          <Link href="/SWbasic/armor" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>アーマー(防具屋)</Link>
          <Link href="/SWbasic/magic" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>マジック(魔道具屋)</Link>
        </div>
        {/* ショップ */}
        <div className='flex justify-center items-center'>{children}</div>
      </div>
    </div>
  )
}

export default layout