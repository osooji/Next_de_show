'use client'
import React, { useState } from 'react'

const Magic = () => {
  // const [common,setCommon] = useState<string|null>('')

  // const change = e => {
  //   setCommon(e.target.value)
  // }
  return (
    <div className='w-[350px] h-[100px] flex'>
      {/* 魔法 */}
      <div className='relative bottom-0 left-0 w-[170px] h-[100px] flex-col'>
        <div className='w-[170px] h-[20px]'>魔法</div>
        <div className='border w-[170px] h-[80px] flex-col'>
          <div className='flex '>
            <div className='border w-[120px] h-[20px] flex justify-center items-center text-[10px]  left-[10px]'>ルーン</div>
            <div className='border w-[30px] h-[20px] flex justify-center items-center text-[6px]'>レベル</div>
            <div className='border w-[20px] h-[20px] flex justify-center items-center text-[6px]'>魔力</div>
          </div>
          <div className='flex'>
            <div className='border w-[120px] h-[20px]'></div>
            <div className='border w-[30px] h-[20px]'></div>
            <div className='border w-[20px] h-[20px]'></div>
          </div>
          <div className='flex'>
            <div className='border w-[120px] h-[20px]'></div>
            <div className='border w-[30px] h-[20px]'></div>
            <div className='border w-[20px] h-[20px]'></div>
          </div>
          <div className='flex'>
            <div className='border w-[120px] h-[20px]'></div>
            <div className='border w-[30px] h-[20px]'></div>
            <div className='border w-[20px] h-[20px]'></div>
          </div>
        </div>
      </div>
      {/* 空欄 */}
      <div className='w-[10px] h-[100px]'></div>
      {/* コモンルーン */}
      <div className='relative bottom-0 left-0 w-[170px] h-[100px] flex-col'>
      <div className='w-[170px] h-[20px]'>コモンルーン</div>
      <div className='border w-[170px] h-[80px] flex-col'>
        <div className=' relative flex'>
          <div className='border w-[100px] h-[20px] text-[9px] flex justify-center items-center'>コモンルーン</div>
          <div className='border w-[70px] h-[20px] text-[8px] flex justify-center items-center'>消費精神力</div>
        </div>
        <div className='flex'>
          <div className='border w-[100px] h-[10px] text-[5px]'>
            {/* <input type='text' onChange={change}>{common}</input> */}
          </div>
          <div className='border w-[70px] h-[10px]'></div>
        </div>
        <div className='flex'>
          <div className='border w-[100px] h-[10px]'></div>
          <div className='border w-[70px] h-[10px]'></div>
        </div>
        <div className='flex'>
          <div className='border w-[100px] h-[10px]'></div>
          <div className='border w-[70px] h-[10px]'></div>
        </div>
        <div className='flex'>
          <div className='border w-[100px] h-[10px]'></div>
          <div className='border w-[70px] h-[10px]'></div>
        </div>
        <div className='flex'>
          <div className='border w-[100px] h-[10px]'></div>
          <div className='border w-[70px] h-[10px]'></div>
        </div>
        <div className='flex'>
          <div className='border w-[100px] h-[10px]'></div>
          <div className='border w-[70px] h-[10px]'></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Magic