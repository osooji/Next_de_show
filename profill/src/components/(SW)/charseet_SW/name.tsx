'use client'

import { store } from '@/lib/SW/type/(sign)/zustand';
import React from 'react'

export const Name = () => {

  const name = store(state => state.name)
  const race = store(state => state.race)
  const sex = store(state => state.sex)
  const money = store(state => state.money)
  const exe = store(state => state.exe)
  const allJob = store(state => state.allJob);
  const cloneAllJob = structuredClone(allJob)
  const maxNum = cloneAllJob.sort((a,b) => b.Lv - a.Lv)

  return (
    <div className='w-[190px] h-[400px] flex-col '>
      <div className='w-[190px] h-[26px]'></div>
      {/* 名前 */}
      <div className='w-[190px] h-[50px] relative flex-col items-center'>
        <div className='w-[190px] h-[10px] absolute flex items-center'>
          <div className='absolute right-[5px] z-20 text-[8px] bg-white'>キャラクター名</div>
        </div>
        <div className='w-[190px] h-[40px] absolute flex justify-center items-center border bottom-[5px]'>
          <div className='w-[185px] h-[35px] absolute border flex justify-center items-center'>{name}</div>
        </div>
      </div>
      {/* 種族、性別 */}
      <div className='w-[190px] h-[40px] flex'>
        {/* 種族 */}
        <div className='w-[120px] h-[40px] relative flex-col items-center'>
          <div className='w-[120px] h-[10px] flex items-center absolute'>
            <div className='absolute right-[5px] z-20 text-[8px] bg-white'>種族</div>
          </div>
          <div className='w-[120px] h-[30px] absolute border bottom-[5px] text-sm flex justify-center items-center'>{race}</div>
        </div>
        {/* 空欄 */}
        <div className='w-[10px] h-[40px]'></div>
        {/* 性別 */}
        <div className='w-[60px] h-[40px] relative flex'>
          <div className='w-[60px] h-[10px] absolute flex right-1 items-center'>
            <div className='absolute right-[5px] z-20 text-[8px] bg-white'>性別</div>
          </div>
          <div className='w-[60px] h-[30px] absolute bottom-[5px] border text-sm flex justify-center items-center'>{sex}</div>
        </div>
      </div>
      {/* 所持金 */}
      <div className='w-[190px] h-[40px] relative flex-col items-center'>
        <div className='w-[190px] h-[10px] absolute flex-col items-center'>
          <div className='absolute right-[5px] z-20 text-[8px] bg-white'>所持金</div>
        </div>
        <div className='w-[190px] h-[30px] absolute flex justify-center items-center border bottom-[5px]'>
          {money}
        </div>
      </div>
      {/* 空欄 */}
      {/* 技能、経験値、レベル */}
      <div className='w-[190px] h-[234px] relative flex-col'>
        {/* 経験値、レベル */}
        <div className='w-[190px] h-[50px] flex'>
          {/* 経験値 */}
          <div className='w-[90px] h-[50px] relative flex-col items-center'>
            <div className='w-[90px] h-[10px] absolute flex items-center'>
              <div className='absolute right-[5px] z-20 text-[8px] bg-white'>経験値</div>
            </div>
            <div className='w-[90px] h-[40px] absolute flex justify-center items-center border bottom-[5px]'>
              <div className='w-[85px] h-[35px] absolute border flex justify-center items-center'>{exe}</div>
            </div>
          </div>
          {/* 空欄 */}
          <div className='w-[10px] h-[10px]'></div>
          {/* レベル */}
          <div className='w-[90px] relative flex-col items-center'>
            <div className='w-[90px] h-[10px] absolute flex items-center'>
              <div className='absolute right-[5px] z-20 text-[8px] bg-white'>冒険者レベル</div>
            </div>
            <div className='w-[90px] h-[40px] absolute flex justify-center items-center border bottom-[5px]'>
              <div className='w-[85px] h-[35px] absolute border flex justify-center items-center'>{maxNum[0].Lv}</div>
            </div>
          </div>
        </div>
        {/* 技能表 */}
        <div className='w-[190px] absolute bottom-0 flex-col border'>
          <div className='flex'>
            <div className='border w-[160px] h-[20px] flex justify-center items-center text-[12px]'>技能名</div>
            <div className='border w-[30px] h-[20px] flex justify-center items-center text-[8px]'>レベル</div>
          </div>
          {allJob.map((job,index) =>
          job.Lv > 0 &&
          <div key={index} className='flex'>
            <div className='border w-[160px] h-[20px] pl-4 text-sm'>{job.name}</div>
            <div className='border w-[30px] h-[20px] flex justify-center'>{job.Lv}</div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Name