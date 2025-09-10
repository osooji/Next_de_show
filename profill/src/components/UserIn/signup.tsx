"use client"

import { signUp } from '@/action/actions'
import { race } from '@/lib/SW/(job)/JobList'
import React, { useActionState, useState } from 'react'

const SignUp = () => {
  const [state, formAction, isPending] = useActionState(signUp,{message:'',data:{ID:'',name:'',race:"",sex:""}})
  const [idState, setIdState] = useState<string>("")
  const [inputState, setInputState] = useState<string>("")

  return (
    <div className='flex flex-col justify-center gap-8 ring ring-gray-200 p-8 rounded-lg'>
      <form action={formAction}>
        <h1 className='flex justify-center mx-auto pb-4 text-2xl'>新規登録</h1>
        <div className='flex items-center gap-4 p-2 m-4'>
          <label id='ID'>ID</label>
          <input type='text' name='ID' onChange={(e) => setIdState(e.target.value)} value={idState} className='p-2' required/>
        </div>
        <div className='flex items-center gap-4 p-2 m-4'>
          <label id='name'>キャラクター</label>
          <input type='text' name='name' onChange={(e) => setInputState(e.target.value)}  className='p-2' value={inputState} required/>
        </div>
        <div className='flex items-center gap-4 p-2 m-4'>
          <label id='race'>種族</label>
          <select id='race' name='race'>
            {race.map(race =>
            <option key={race.name} value={race.name}>{race.name}</option>
            )}
          </select>
        </div>
        <div className='flex items-center gap-4 p-2 m-4'>
          <label id='sex'>性別</label>
          <select id='sex'name='sex'>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <button type='submit'  className='w-full bg-teal-500 flex items-center justify-center gap-4 p-2 hover:bg-emerald-800 rounded-lg' disabled={isPending}>決定</button>
        {state.message === '成功' && <p className='text-green-500'>登録完了</p>}
        {state.message === '失敗' && <p className='text-red-500'>登録失敗</p>}
      </form>
    </div>
  )
}

export default SignUp