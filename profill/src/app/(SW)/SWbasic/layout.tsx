import Link from 'next/link'
 
const BasicLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='h-screen'>
      {/* タイトル */}
      <div className='fixed top-0 w-full h-[80px] py-[10px] flex justify-around items-center bg-emerald-500'>
        <div className='w-[100px] h-[30px] flex justify-center items-center  bg-slate-100 hover:bg-green-300 rounded'>signout</div>
        <div className='flex justify-center items-center w-[500px] h-[60px] text-[40px]  bg-slate-100 hover:bg-green-300 rounded'><Link href="/">ソードワールドRPG</Link>
        </div>
        <div className='w-[100px] h-[30px] flex justify-center items-center  bg-slate-100 hover:bg-green-300 rounded'>signout</div>
      </div>
      {/* チルドレン */}
      <div className='h-full'>{children}</div>
      {/* 共通のメニューバー */}
      <div className="fixed w-full h-[50px] py-[10px] flex justify-around items-center bottom-0 bg-emerald-500">
        {/* ステータス画面 */}
        <div className="flex justify-center items-center w-[200px] h-[30px] bg-slate-100 hover:bg-green-300 rounded">
          <Link href="/SWbasic/charSeet">MENU (ステータス)</Link>
        </div>
        {/* ショップ */}
        <div className="flex justify-center items-center w-[200px] h-[30px] bg-slate-100 hover:bg-green-300 rounded">
          <Link href="/SWbasic/items">SHOP </Link>
        </div>
        {/* スキル */}
        <div className="flex justify-center items-center w-[200px] h-[30px] bg-slate-100 hover:bg-green-300 rounded">
          <Link href="/SWbasic/common">SKILL (ステータス)</Link>
        </div>

        <div className="flex justify-center items-center w-[200px] h-[30px] bg-slate-100 hover:bg-green-300 rounded" >
          <Link href="/SWbasic/charSeet">menu (ステータス)</Link>
        </div>
      </div>
    </div>
  )
}
export default BasicLayout