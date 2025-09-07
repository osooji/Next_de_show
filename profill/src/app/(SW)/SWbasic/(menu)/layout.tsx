import Link from 'next/link'
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='w-full p-4 flex justify-center'>
      <div className='flex-col mx-4'>
        <div className='flex justify-center gap-8 mb-4'>
          <Link href="/SWbasic/charSeet" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>ステータス</Link>
          <Link href="/SWbasic/battleSeet" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>戦闘画面</Link>
          <Link href="/SWbasic/itemSeet" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>アイテム</Link>
          <Link href="/SWbasic/rating" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>レーティング表</Link>
        </div>
        {/* ステータス */}
        <div className='flex justify-center'>{children}</div>
      </div>
    </div>
  )
}

export default layout