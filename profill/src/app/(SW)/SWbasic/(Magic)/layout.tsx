import Link from 'next/link'
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='w-full  flex justify-center'>
      {/* ページジャンプ */}
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex justify-between gap-4'>
            <Link href="/SWbasic/shaman" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>シャーマン技能</Link>
            <Link href="/SWbasic/priest" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>プリースト技能</Link>
            <Link href="/SWbasic/wizard" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>ソーサラー技能</Link>
          </div>
          <div className='flex justify-between gap-4'>
            <Link href="/SWbasic/priestSect" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>宗派別</Link>
            <Link href="/SWbasic/bardMagic" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>バード呪歌</Link>
          </div>
          {/* ショップ */}
          <div>{children}</div>
        </div>
    </div>
  )
}

export default layout