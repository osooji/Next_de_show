import Link from 'next/link'
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='flex justify-around items-center w-screen'>
      <div className='w-[1000px] flex justify-center bg-slate-300'>
        <div className='w-[600px] h-[550px] flex-col justify-center'>
          {/* 所持金 */}
          <div className='flex justify-center items-center'>
            <div className='w-[200px] text-[30px] flex justify-center items-center'>所持金</div>
            <div className='w-[200px] h-[50px] text-[40px] flex justify-center items-center border rounded'>1000</div>
          </div>
          {/* ページジャンプ */}
          <div className='flex justify-around items-center'>
            <Link href="/SWbasic/items" className='hover:bg-green-300 rounded'>アイテム(道具屋)</Link>
            <Link href="/SWbasic/weapon" className='hover:bg-green-300 rounded'>ウェポン(武器屋)</Link>
            <Link href="/SWbasic/armor" className='hover:bg-green-300 rounded'>アーマー(防具屋)</Link>
            <Link href="/SWbasic/magic" className=' hover:bg-green-300 rounded'>マジック(魔道具屋)</Link>
          </div>
          {/* ショップ */}
          <div className='flex justify-center items-center'>{children}</div>
        </div>
      </div>
      {/* ヘルプ */}
      <div className='flex items-center w-[480px] h-screen right-0 p-10'>ヘルプ
      </div>
    </div>
  )
}

export default layout