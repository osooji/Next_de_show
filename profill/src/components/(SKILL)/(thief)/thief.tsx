'use client'

import { thiefSkillList } from '@/lib/SW/type/(SKILL)/thiefSkillType'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Thief = ({thiefSkill}:{thiefSkill:thiefSkillList}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const thief = searchParams.get("thief");

  const handleList = (thiefNum:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("thief",thiefNum)
    router.push(`${pathName}?${params}`)
  }

  const thiefList = ["1","2"];
  return (
    <div className='flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-1 flex-col justify-center items-center border">
      <div className='absolute flex flex-col right-[-42px]'>
        {thiefList.map((list,index) => (<button key={list} onClick={() => handleList(`${list}`)} className={` z-20 bg-white w-[42px] h-[42px] top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-slate-300`}>{list}</button>))}
      </div>
      <div className=' left-[-1px] h-[420px]'>
        <div className='h-[45px] flex items-center'>
          {/* スキルの名前 */}
          <div className='flex w-[200px] h-[45px] px-5 items-center border'>スキルの名前</div>
          {/* ステータス */}
          <div className='flex w-[100px] h-[45px] justify-center items-center border'>ステータス</div>
          {/* 消費 */}
          <div className='flex w-[100px] h-[45px] justify-center items-center border'>消費</div>
          {/* 効果時間 */}
          <div className='flex w-[100px] h-[45px] justify-center items-center border'>限界</div>
          {/* 再試行 */}
          <div className='flex w-[94px] h-[45px] justify-center items-center border '>再試行</div>
        </div>
      </div>
      {thief==="1" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {thiefSkill.n1.map((thief,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[35px] px-5 items-center border'>{thief.name}</div>
            <div className='flex w-[100px] h-[35px] justify-center items-center border'>{thief.prot}</div>
            <div className='flex w-[100px] h-[35px] justify-center items-center border'>{thief.num}</div>
            <div className='flex w-[100px] h-[35px] justify-center items-center border'>{thief.limit}</div>
            <div className='flex w-[94px] h-[35px] justify-center items-center border'>{thief.reTry}</div>
          </div>
        ))}
      </div>
      }
      {thief==="2" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {thiefSkill.n2.map((thief,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[35px] px-5 items-center border'>{thief.name}</div>
            <div className='flex w-[100px] h-[35px] justify-center items-center border'>{thief.prot}</div>
            <div className='flex w-[100px] h-[35px] justify-center items-center border'>{thief.num}</div>
            <div className='flex w-[100px] h-[35px] justify-center items-center border'>{thief.limit}</div>
            <div className='flex w-[94px] h-[35px] justify-center items-center border'>{thief.reTry}</div>
          </div>
        ))}
      </div>
      }
    </div>
  </div>
)}
export default Thief