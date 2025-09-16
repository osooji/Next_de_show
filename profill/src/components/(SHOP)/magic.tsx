"use client"
// import { magicBuy } from '@/action/actions';
import { magicItemType } from '@/lib/SW/type/(shop)/magicListType';
import { store } from '@/lib/SW/type/(sign)/zustand';
import React, { } from 'react'

const Magic = ({magicItem}:{magicItem:magicItemType}) => {
  const money = store((state) => (state.money))
  const magic = store((state) => (state.magicList))
  const decrementMoney = store((state) => (state.decrementMoney))
  const addMagicList = store((state) => (state.addMagicList))
  // const [formState, formAction,isPending] = useActionState<magicItemType>(magicBuy,{success:'',error:''})
    const formAction = (formData:FormData) => {
      const name = formData.get('magicItem') as string
      const value = Number(formData.get('magicSp'));
      const price = Number(formData.get('itemPrice'));
      const magicName = magic.filter(magic => magic.name === name)
      if(money - price > 0 && magicName.length === 0) {
        decrementMoney(price);
        addMagicList({name,value});
        alert(`${name}買いました`)
      } else if (magicName.length > 0) alert('すでに持ってます')
      else alert('お金が足りません')
    }

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
      {magicItem.rune.map((rune) =>
      <div key={rune.id}>
        <form action={formAction} className='flex justify-center items-center '>
          {/* 魔法道具の名前 */}
          <input name="magicItem" defaultValue={rune.name} className='flex w-[294px] h-[25px] px-5 items-center border' readOnly />
          {/* 消費精神力 */}
          <input name="magicSp" defaultValue={rune.spPrice} className='flex w-[100px] h-[25px] px-10 justify-center items-center border' readOnly />
          {/* 値段 */}
          <input type='hidden' name="itemPrice" defaultValue={rune.price} readOnly /><div className='flex w-[100px] h-[25px] px-7 justify-center items-center border'>{rune.price}</div>
          {/* 買うボタン */}
          <button type='submit' className={`flex w-[100px] h-[25px] justify-center items-center border hover:bg-slate-300`}>買う</button>
        </form>
      </div>
      )}
  </div>
)}
export default Magic