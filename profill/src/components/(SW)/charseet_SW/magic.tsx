'use client'

import { store } from '@/lib/SW/type/(sign)/zustand'
import React from 'react'

export const Magic = () => {
  const magicItems = store(state => state.magicList)
  const allJob = store(state => state.allJob)
  const INT = store(state => state.INT)
  const magicJob = allJob.filter((p) => {return p.name === 'wizard' || p.name === 'priest' || p.name === 'shaman'})


  return (
    <div className='w-[350px] h-[135px]  flex'>
      {/* 魔法 */}
      <div className=' bottom-0 left-0 w-[170px] h-[100px] mr-[10px] flex-col'>
        <div className='w-[170px] text-[10px]' >魔法</div>
        <div className=' w-[170px] flex-col'>
          <div className='flex '>
            <div className='border w-[120px] flex justify-center items-center text-[10px]  left-[10px]'>ルーン</div>
            <div className='border w-[30px]  flex justify-center items-center text-[6px]'>レベル</div>
            <div className='border w-[20px] flex justify-center items-center text-[6px]'>魔力</div>
          </div>
          {magicJob.map((job) =>
          <div key={job.name} className='flex'>
            <div className='border w-[120px] flex justify-center text-[10px]'>{`${ job.name}`}</div>
            <div className='border w-[30px] flex justify-center text-[10px]'>{`${ job.Lv}`}</div>
            <div className='border w-[20px] flex justify-center text-[10px]'>{`${ job.Lv + Math.floor(INT/6)}`}</div>
          </div>
          )}
        </div>
      </div>
      {/* コモンルーン */}
      <div className=' bottom-0 left-0 w-[170px] flex-col'>
      <div className='w-[170px] text-[10px]'>コモンルーン</div>
      <div className=' w-[170px] flex-col'>
        <div className='  flex justify-center'>
          <div className='border w-[120px] text-[9px] flex justify-center items-center'>コモンルーン</div>
          <div className='border w-[50px] text-[8px] flex justify-center items-center'>消費精神力</div>
        </div>
        {magicItems.map((magic) =>
        magicItems.length < 8 &&
        <div key={magic.name} className='flex'>
          <div className='border w-[120px] flex justify-center text-[10px]'>{magic.name}</div>
          <div className='border w-[50px] flex justify-center text-[10px]'>{magic.value}</div>
        </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Magic