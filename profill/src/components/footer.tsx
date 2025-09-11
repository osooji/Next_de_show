import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className="z-20 w-full flex flex-col items-center justify-start p-2 gap-2 right-0">
        {/* ステータス画面 */}
        <Link href="/SWbasic/charSeet">
          <div className="px-4 py-1 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md">
            MENU (ステータス)
          </div>
        </Link>
        {/* ショップ */}
        <Link href="/SWbasic/items">
          <div className="w-full px-4 py-1 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md">
            SHOP (道,武,防,魔)
          </div>
        </Link>
        {/* スキル */}
        <Link href="/SWbasic/common">
          <div className="px-4 py-1 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md">
            SKILL (ステータス)
          </div>
        </Link>
        {/* 魔法 */}
        <Link href="/SWbasic/wizard">
          <div className="px-4 py-1 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md" >
            Magic (ステータス)
          </div>
        </Link>
      </div>
  )
}

export default Footer