import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className="flex items-center justify-around px-4 w-full h-[60px] bottom-0 ring-1 ring-gray-500">
        {/* ステータス画面 */}
        <Link href="/SWbasic/charSeet">
          <div className="px-4 py-1 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md">
            MENU (ステータス)
          </div>
        </Link>
        {/* ショップ */}
        <Link href="/SWbasic/items">
          <div className="px-4 py-1 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md">
            SHOP
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