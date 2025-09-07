import Link from 'next/link'
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='w-full p-4 flex justify-center'>
      <div className='flex justify-center'>
        {/* ページジャンプ */}
        <div className='w-[594px] flex-col justify-center'>
          <div className='flex justify-between gap-4 mb-4'>
            <Link href="/SWbasic/common" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>一般技能</Link>
            <Link href="/SWbasic/thief" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>シーフ技能</Link>
            <Link href="/SWbasic/ranger" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>レンジャー技能</Link>
          </div>
          <div className='flex justify-between gap-4'>
            <Link href="/SWbasic/sage" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>セージ技能</Link>
            <Link href="/SWbasic/bard" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>バード技能</Link>
          </div>
          {/* ショップ */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default layout