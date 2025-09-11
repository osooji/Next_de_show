'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { bardMagicType } from '@/lib/SW/type/(Magic)/bardMagicList';

const BardMagic = ({bardMagicList}:{bardMagicList:bardMagicType}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const bard = searchParams.get("bard");

  const handleLvList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("bard",listName)
    router.push(`${pathName}?${params}`)
  }

  const LvList = ["n1","n2","n3","n4"];

  return (
  <div className='flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-1 flex-col justify-center items-center border">
      <div className='absolute h-[420px] flex flex-col  right-[-42px]'>
        {LvList.map((Lv,index) => (<button key={Lv} onClick={() => handleLvList(`${Lv}`)} className={` z-20 bg-white w-[42px] h-[42px] top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-slate-300`}>{Lv}</button>))}
      </div>
        <div className='absolute flex flex-col '>
          <div className='flex items-center'>
            {/* 魔法の名前 */}
            <div className='flex w-[300px] h-[40px] justify-center items-center border'>魔法の名前</div>
            {/* タイプ */}
            <div className='flex w-[294px] h-[40px] justify-center items-center border'>タイプ</div>
          </div>
          <div className='flex w-[594px] h-[30px] px-1 justify-center items-center border'>説明</div>
      {bard==="n1" &&
      <div className=' left-[-1px] '>
        {/* mapメソッド */}
        {bardMagicList.n1.map((magic) =>
        <div key={magic.Id}>
          <div className='flex'>
            <div className='w-[300px] h-[40px] border flex items-center justify-center'>{magic.name}</div>
            <div className='w-[294px] h-[40px] border flex items-center justify-center'>{magic.type}</div>
          </div>
          <div className='w-[594px] h-[30px] flex items-center justify-center border'>{magic.content}</div>
        </div>
        )}
      </div>
      }
      {bard==="n2" &&
      <div className=' left-[-1px]'>
        {/* mapメソッド */}
        {bardMagicList.n2.map((magic) =>
        <div key={magic.Id}>
          <div className='flex'>
          <div className='w-[300px] h-[40px] border flex items-center justify-center'>{magic.name}</div>
            <div className='w-[294px] h-[40px] border flex items-center justify-center'>{magic.type}</div>
          </div>
          <div className='w-[594px] h-[30px] flex items-center justify-center border'>{magic.content}</div>
        </div>
        )}
      </div>
      }
      {bard==="n3" &&
      <div className='left-[-1px] '>
        {/* mapメソッド */}
        {bardMagicList.n3.map((magic) =>
        <div key={magic.Id}>
          <div className='flex'>
          <div className='w-[300px] h-[40px] border flex items-center justify-center'>{magic.name}</div>
            <div className='w-[294px] h-[40px] border flex items-center justify-center'>{magic.type}</div>
          </div>
          <div className='w-[594px] h-[30px] flex items-center justify-center border'>{magic.content}</div>
        </div>
        )}
      </div>
      }
      {bard==="n4" &&
      <div className=' left-[-1px] '>
        {/* mapメソッド */}
        {bardMagicList.n4.map((magic) =>
        <div key={magic.Id}>
          <div className='flex'>
          <div className='w-[300px] h-[40px] border flex items-center justify-center'>{magic.name}</div>
            <div className='w-[294px] h-[40px] border flex items-center justify-center'>{magic.type}</div>
          </div>
          <div className='w-[594px] h-[30px] flex items-center justify-center border'>{magic.content}</div>
        </div>
        )}
      </div>
      }
      </div>
    </div>
  </div>
)}
export default BardMagic