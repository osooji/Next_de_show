"use client"

import { signUp } from '@/action/actions'
import React, { useActionState } from 'react'

const SignUp = () => {
  const [state, formAction, isPending] = useActionState(signUp,{message:'',data:{ID:'',name:'',race:"",sex:""}})

  return (
    <div className='flex-col justify-center gap-8'>
      <form action={formAction}>
        <h1 className='px-auto py-4'>新規登録</h1>
        <div className='flex items-center gap-4 p-2 mx-4'>
          <label id='ID'>ID</label>
          <input type='text' name='ID' required/>
        </div>
        <div className='flex items-center gap-4 p-2 mx-4'>
          <label id='name'>キャラクター</label>
          <input type='text' name='name' required/>
        </div>
        <div className='flex items-center gap-4 p-2 mx-4'>
          <label id='race'>種族</label>
          <select id='race' name='race'>
            <option value="人間">人間</option>
          </select>
        </div>
        <div className='flex items-center gap-4 p-2 mx-4'>
          <label id='sex'>性別</label>
          <select id='sex'name='sex'>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <button type='submit'  className='flex items-center gap-4 p-2 mx-4' disabled={isPending}>送信</button>
        {state.message === '成功' && <p className='text-green-500'>登録完了</p>}
        {state.message === '失敗' && <p className='text-red-500'>登録失敗</p>}
      </form>
    </div>
  )
}

export default SignUp