import Link from 'next/link'
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='flex w-screen'>
      {/* メニュー */}
      <div className='w-full'>{children}</div>
      {/* ヘルプ */}
      <div className='w-[480px] h-screen right-0 p-10'>
      {/* ページジャンプ */}
        <div>
          <Link href="/SWbasic/charSeet" className='hover:bg-green-300'>ステータス</Link>
          <Link href="/SWbasic/battleSeet" className='hover:bg-green-300'>戦闘画面</Link>
          <Link href="/SWbasic/itemSeet" className='hover:bg-green-300'>アイテム</Link>
          <Link href="/SWbasic/rating" className='hover:bg-green-300'>レーティング表</Link>
        </div>
      </div>
    </div>
  )
}

export default layout