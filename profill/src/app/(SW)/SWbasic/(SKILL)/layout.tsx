import Link from 'next/link'
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='flex w-screen'>
      {/* スキル */}
      <div className='w-full'>{children}</div>
      {/* ヘルプ */}
      <div className='w-[480px] h-screen right-0 p-10'>
      {/* ページジャンプ */}
        <div>
          <Link href="/SWbasic/common" className='hover:bg-green-300'>一般技能</Link>
          <Link href="/SWbasic/priest" className='hover:bg-green-300'>プリースト技能</Link>
          <Link href="/SWbasic/wizard" className='hover:bg-green-300'>ソーサラー技能</Link>
          <Link href="/SWbasic/thief" className='hover:bg-green-300'>シーフ技能</Link>
        </div>
      </div>
    </div>
  )
}

export default layout