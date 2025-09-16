"use client"

import { store } from '@/lib/SW/type/(sign)/zustand'
import React, { useState } from 'react'

const Quest = () => {
  const [formMoney,setFormMoney] = useState<number>(0)
  const [formExe,setFormExe] = useState<number>(0)

  const money = store((state) => (state.money) )
  const exe = store((state) => (state.exe))
  const incrementMoney = store((state) => (state.incrementMoney))
  const incrementExe = store((state) => (state.incrementExe))

  const handleChangeMoney = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormMoney(parseInt(e.target.value))
  }
  const handleChangeExe = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormExe(parseInt(e.target.value))
  }
  return (
    <div className='w-[594px] h-[420px] flex justify-between items-center p-4 mt-4 gap-6 ring-1 ring-gray-400'>

      <div className='flex flex-col justify-center mx-10'>
        <h1 className='flex flex-col justify-center text-2xl px-2 py-2 m-2'>現在の経験値
          <div className='flex justify-center'>{exe}</div></h1>
          <label id='formExe' className='flex justify-center px-4 py-2 m-4'>経験値</label>
          <input id='formExe' name='formExe' type='number' maxLength={6} className='w-[120px] px-4 py-2 m-4 border' onChange={handleChangeExe}/>
          <button onClick={() => incrementExe(formExe)} className='flex justify-center w-[120px] px-4 py-2 m-4 rounded-md bg-gray-300 hover:bg-black hover:text-white'>受け取り</button>
      </div>

      <div className='flex flex-col mx-10'>
        <h1 className='flex flex-col justify-center text-2xl px-2 py-2 m-2'>現在のお金
          <div className='flex justify-center'>{money}</div></h1>
          <label id='formMoney' className='flex justify-center px-4 py-2 m-4'>お金</label>
          <input id='formMoney' name='formMoney' type='number' maxLength={6} className='w-[120px] px-4 py-2 m-4 border' onChange={handleChangeMoney} />
          <button onClick={() => incrementMoney(formMoney)} className='flex justify-center w-[120px] px-4 py-2 m-4 rounded-md bg-gray-300 hover:bg-black hover:text-white'>受け取り</button>

      </div>
    </div>
  )
}

export default Quest