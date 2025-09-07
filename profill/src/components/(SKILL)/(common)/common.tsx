'use client'

import { commonSkillList } from '@/lib/SW/type/(SKILL)/commonSkillList'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Common = ({commonSkill}:{commonSkill:commonSkillList}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const common = searchParams.get("common");

    const handleList = (commonNum:string) => {
      const params = new URLSearchParams(searchParams);
      params.set("common",commonNum)
      router.push(`${pathName}?${params}`)
    }

    const commonList = ["1","2","3","4","5","6"];
  return (
  <div className='flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-4 flex-col justify-center items-center border">
      <div className='absolute flex flex-col right-[-42px]'>
        {commonList.map((list,index) => (<button key={list} onClick={() => handleList(`${list}`)} className={` z-20 bg-white w-[42px] h-[42px] top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-slate-300`}>{list}</button>))}
      </div>
      <div className='absolute left-[-1px] h-[420px]'>
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
      {common==="1" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {commonSkill.n1.map((common,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[45px] px-5 items-center border'>{common.name}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.prot}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.num}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.limit}</div>
            <div className='flex w-[94px] h-[45px] justify-center items-center border'>{common.reTry}</div>
          </div>
        ))}
      </div>
      }
      {common==="2" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {commonSkill.n2.map((common,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[45px] px-5 items-center border'>{common.name}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.prot}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.num}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.limit}</div>
            <div className='flex w-[94px] h-[45px] justify-center items-center border'>{common.reTry}</div>
          </div>
        ))}
      </div>
      }
      {common==="3" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {commonSkill.n3.map((common,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[45px] px-5 items-center border'>{common.name}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.prot}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.num}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.limit}</div>
            <div className='flex w-[94px] h-[45px] justify-center items-center border'>{common.reTry}</div>
          </div>
        ))}
      </div>
      }
      {common==="4" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {commonSkill.n4.map((common,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[45px] px-5 items-center border'>{common.name}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.prot}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.num}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.limit}</div>
            <div className='flex w-[94px] h-[45px] justify-center items-center border'>{common.reTry}</div>
          </div>
        ))}
      </div>
      }
      {common==="5" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {commonSkill.n5.map((common,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[34px] px-5 items-center border'>{common.name}</div>
            <div className='flex w-[100px] h-[34px] justify-center items-center border'>{common.prot}</div>
            <div className='flex w-[100px] h-[34px] justify-center items-center border'>{common.num}</div>
            <div className='flex w-[100px] h-[34px] justify-center items-center border'>{common.limit}</div>
            <div className='flex w-[94px] h-[34px] justify-center items-center border'>{common.reTry}</div>
          </div>
        ))}
      </div>
      }
      {common==="6" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {commonSkill.n6.map((common,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[45px] px-5 items-center border'>{common.name}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.prot}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.num}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{common.limit}</div>
            <div className='flex w-[94px] h-[45px] justify-center items-center border'>{common.reTry}</div>
          </div>
        ))}
      </div>
      }

    </div>
  </div>
)}

export default Common