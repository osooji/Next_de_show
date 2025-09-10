import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
  <div className='top-0 h-[60px] w-full px-4 py-2 gap-2 flex justify-around items-center ring-1 ring-gray-500'>
    <div className='px-4 py-2 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md'><Link href='/Users/quest'>クエスト</Link></div>
    <div className='px-4 py-4 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-3xl'><Link href="/">ソードワールドRPG</Link>
    </div>
    <div className='flex gap-2 '>
      {/* <div className='px-4 py-2 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md'><Link href='/Users/signUp'>SignUp</Link></div> */}
      {/* <div className='px-4 py-2 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md'><Link href='./UserIn/signin'>SignIn</Link></div> */}
      {/* <div className='px-4 py-2 border border-amber-400 bg-slate-100 hover:text-white hover:bg-gray-800 rounded-lg text-medium text-md'><Link href='/Users/signout'>アカウント削除</Link></div> */}
    </div>
  </div>
  )
}

export default Header