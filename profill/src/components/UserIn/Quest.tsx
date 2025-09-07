"use client"

import { store } from '@/lib/SW/type/(sign)/zustand'
import React, { useState } from 'react'

const Quest = () => {
  const [formMoney,setFormMoney] = useState<number>(0)
  const [formExe,setFormExe] = useState<number>(0)

  const money = store((state) => (state.money) )
  const exe = store((state) => (state.exe))
  const incrementMoney = store((state) => (state.incrementMoney))
  const incrementExe = store((state) => (state.incrementMoney))

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormMoney(parseInt(e.target.value))
  }
  const handleChange0 = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormExe(parseInt(e.target.value))
  }
  return (
    <div className='flex flex-col items-center p-4 gap-8 ring ring-gray-400'>
      <div className='flex justify-between items-center gap-2'>
        <h1 className='px-4 py-2 m-4'>現在のお金:{money}</h1>
        <h1 className='px-4 py-2 m-4'>現在の経験値:{exe}</h1>
      </div>
        <div className='flex items-center gap-2'>
          <label id='formExe' className='px-4 py-2 m-4'>経験値</label>
          <input id='formExe' name='formExe' type='number' className='px-4 py-2 m-4' onChange={handleChange}/>
          <button onClick={() => incrementMoney(formExe)}>受け取り</button>
        </div>
        <div className='flex items-center gap-2'>
          <label id='formMoney' className='px-4 py-2 m-4'>お金</label>
          <input id='formMoney' name='formMoney' type='number' className='px-4 py-2 m-4' onChange={handleChange0} />
          <button onClick={() => incrementExe(formMoney)}>受け取り</button>
        </div>
    </div>
  )
}

export default Quest