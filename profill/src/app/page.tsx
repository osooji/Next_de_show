import Link from "next/link";

export default function Home() {

  return (
    <div className="w-screen min-h-screen  flex-col justify-center items-center">
      <div className="flex justify-center items-center text-[48px] pt-8">
        ソードワールドRPG
      </div>
      <div className="flex justify-center items-center text-[24px] my-9">
        このサイトは新ソードワールドRPGを参考にしています。
      </div>
      <div className=" flex justify-center p-4 mx-16 gap-16 ">
        <div className='flex flex-col items-center gap-8'>
          <Link href="/SWbasic/charSeet" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>ステータス</Link>
          <Link href="/SWbasic/battleSeet" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>戦闘画面</Link>
          <Link href="/SWbasic/itemSeet" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>アイテム</Link>
          <Link href="/SWbasic/rating" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>レーティング表</Link>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <Link href="/SWbasic/items" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>アイテム(道具屋)</Link>
          <Link href="/SWbasic/weapon" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>ウェポン(武器屋)</Link>
          <Link href="/SWbasic/armor" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>アーマー(防具屋)</Link>
          <Link href="/SWbasic/magic" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>マジック(魔道具屋)</Link>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <Link href="/SWbasic/thief" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>シーフ技能</Link>
          <Link href="/SWbasic/ranger" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>レンジャー技能</Link>
          <Link href="/SWbasic/sage" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>セージ技能</Link>
          <Link href="/SWbasic/bard" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>バード技能</Link>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <Link href="/SWbasic/shaman" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>シャーマン技能</Link>
          <Link href="/SWbasic/priest" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>プリースト技能</Link>
          <Link href="/SWbasic/wizard" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>ソーサラー技能</Link>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <Link href="/SWbasic/common" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>一般技能</Link>
          <Link href="/SWbasic/priestSect" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>宗派別</Link>
          <Link href="/SWbasic/bardMagic" className='border cursor-pointer rounded-md px-4 py-2 hover:text-white hover:bg-gray-700'>バード呪歌</Link>
        </div>
      </div>
    </div>
  );
}
