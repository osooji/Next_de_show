'use client'

import { bardSkillList } from '@/lib/SW/type/(SKILL)/bardSkillType'
import React from 'react'

const Bard = ({bardSkill}:{bardSkill:bardSkillList}) => {

  return (
    <div className='flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-4 flex-col justify-center items-center border">
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
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {bardSkill.map((bard,index) => (
          <div  key={index} className='flex'>
            <div className='flex w-[200px] h-[45px] px-5 items-center border'>{bard.name}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{bard.prot}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{bard.num}</div>
            <div className='flex w-[100px] h-[45px] justify-center items-center border'>{bard.limit}</div>
            <div className='flex w-[94px] h-[45px] justify-center items-center border'>{bard.reTry}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
export default Bard