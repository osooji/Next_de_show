'use client'

import { sageSkillList } from '@/lib/SW/type/(SKILL)/sageSkillType'
import React from 'react'

const Sage = ({sageSkill}:{sageSkill:sageSkillList}) => {
  return (
    <div className='flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-1 flex-col justify-center items-center border">
      <div className=' left-[-1px] h-[420px]'>
        <div className='h-[45px] flex items-center'>
          {/* スキルの名前 */}
          <div className='flex w-[200px] h-[45px] px-5 items-center border'>スキルの名前</div>
          {/* ステータス */}
          <div className='flex w-[130px] h-[45px] justify-center items-center border'>ステータス</div>
          {/* 消費 */}
          <div className='flex w-[130px] h-[45px] justify-center items-center border'>消費</div>
          {/* 再試行 */}
          <div className='flex w-[134px] h-[45px] justify-center items-center border '>再試行</div>
        </div>
      </div>
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {sageSkill.map((sage,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[45px] px-5 items-center border'>{sage.name}</div>
            <div className='flex w-[130px] h-[45px] justify-center items-center border'>{sage.prot}</div>
            <div className='flex w-[130px] h-[45px] justify-center items-center border'>{sage.num}</div>
            <div className='flex w-[134px] h-[45px] justify-center items-center border'>{sage.reTry}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
export default Sage