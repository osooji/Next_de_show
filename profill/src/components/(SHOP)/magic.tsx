"use client"
import { magicBuy } from '@/action/actions';
import { magicItemType } from '@/lib/SW/type/(shop)/magicListType';
import React, { useActionState } from 'react'

const Magic = ({magicItem}:{magicItem:magicItemType}) => {
  const [formState, formAction,isPending] = useActionState<magicItemType>(magicBuy,{success:'',error:''})

  return (
  <div className="relative w-[594px] h-[420px] bg-white m-4 flex-col justify-center items-center border">
    <div className='h-[40px] flex items-center'>
      {/* 魔法道具の名前 */}
      <div className='flex w-[294px] h-[40px] px-5 items-center border'>名称（魔法道具）</div>
      {/* 消費精神力 */}
      <div className='flex w-[100px] h-[40px] px-1 justify-center items-center border'>消費精神力</div>
      {/* 値段 */}
      <div className='flex w-[100px] h-[40px] justify-center items-center border'>金額</div>
      <div className='flex w-[100px] h-[40px] justify-center items-center border '>決済</div>
    </div>
    {/* 魔法道具の種類 */}
    <div className='h-[40px] flex items-center pl-2 '>コモンルーン</div>
      {/* mapメソッド */}
      {magicItem.rune.map((rune,index) =>
      <div key={index}>
        <form action={formAction} className='flex justify-center items-center '>
          {/* 魔法道具の名前 */}
          <input name="magicItem" defaultValue={rune.name} className='flex w-[294px] h-[25px] px-5 items-center border' readOnly />
          {/* 消費精神力 */}
          <input name="magicSp" defaultValue={rune.spPrice} className='flex w-[100px] h-[25px] px-10 justify-center items-center border' readOnly />
          {/* 値段 */}
          <input name="itemPrice" defaultValue={rune.price} className='flex w-[100px] h-[25px] px-7 justify-center items-center border' readOnly />
          {/* 買うボタン */}
          <button type='submit' disabled={isPending} className={`flex w-[100px] h-[25px] justify-center items-center border hover:bg-slate-300' ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
        </form>
      </div>
      )}
  </div>
)}
export default Magic