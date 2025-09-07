"use client"
// import { armorBuy } from '@/action/actions';
import { armor1Type, armor2Type } from '@/lib/SW/type/(shop)/armorListType'
import { useStore } from '@/lib/SW/type/(sign)/zustand';
import React, { useState } from 'react'


const Armor = ({armors1, armors2}:{armors1:armor1Type, armors2:armor2Type}) => {
  // 装備の名前、筋力値、金額
  // const [formState, formAction,isPending] = useActionState<armorActionType>(armorBuy,
  // {success:'',error:''}
  // );
  const { armorList, addArmorList} = useStore()
    // 非金属の筋力値
  const [state, setState] = useState<number[]>([1,2,5])
    // 金属の筋力値
  const [stateArmor2, setStateArmor2] = useState<number[]>([5,8,10,11,13])

    // 非金属の筋力値のプラス
  const handleClickAdd = (index:number, max:number) => {
    const str = state.map((s:number,i:number) => {
      if (i === index && max > state[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState(str);
  }
    // 非金属の筋力値のマイナス
  const handleClickSubtract = (index:number,min:number) => {
    const str = state.map((s:number,i:number) => {
      if (i === index && min < state[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState(str);
  }
    // 金属の筋力値のプラス
  const handleClickAdd2 = (index:number, max:number) => {
    const str2 = stateArmor2.map((s:number,i:number) => {
      if (i === index && max > stateArmor2[index]) {
        return s+1
      }else{
        return s
      }
    })
    setStateArmor2(str2);
  }
    // 非金属の筋力値のマイナス
  const handleClickSubtract2 = (index:number,min:number) => {
    const str2 = stateArmor2.map((s:number,i:number) => {
      if (i === index && min < stateArmor2[index]) {
        return s-1
      }else{
        return s
      }
    })
    setStateArmor2(str2);
  }

  return (
  <div className="relative w-[594px] h-[420px] bg-white m-4 flex-col justify-center items-center border">
    <div className='h-[40px] flex items-center'>
      {/* 防具の名前 */}
      <div className='flex w-[280px] h-[40px] px-5 items-center border'>名称（防具ー鎧、盾）</div>
      {/* 必要筋力 */}
      <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
      {/* 値 */}
      <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
      {/* 値段 */}
      <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
      <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
    </div>
    {/* 防具の種類 */}
    <div className='h-[40px] flex items-center pl-4 '>非金属鎧</div>
      {/* mapメソッド */}
      {armors1.noMetal.map((armor,index) =>
      <div key={index}>
        <form action={formAction} className='flex justify-center items-center '>
          {/* 防具の名前 */}
          <input name="itemName" defaultValue={armor.name} className='flex w-[280px] h-[25px] px-5 items-center border ' readOnly />
          {/* 必要筋力 */}
          <div className='flex w-[140px] h-[25px] px-2 justify-center items-center border'>必要筋力:{armor.min}~{armor.max}</div>
          {/* 筋力の数値を選択 */}
          {/* -ボタン */}
          <button onClick={() => handleClickSubtract(index,armor.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >-</button>
          {/* 値 */}
          <input name="itemStr" defaultValue={state[index]} className='w-[30px] h-[25px] px-1 flex justify-center items-center border' readOnly />
          {/* +ボタン */}
          <button onClick={() => handleClickAdd(index,armor.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >+</button>
          {/* 値段 */}
          <input name="itemPrice" defaultValue={state[index]*armor.multiplication+armor.addition} className='w-[50px] h-[25px] px-2 flex justify-center items-center border' readOnly />
          {/* 買うボタン */}
          <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border hover:bg-slate-300 }`}>買う</button>
        </form>
      </div>
      )}
    {/* 防具の種類 */}
    <div className='h-[40px] flex items-center pl-4 '>金属鎧</div>
      {/* mapメソッド */}
      {armors2.metal.map((armor,index) =>
      <div key={index}>
        <form action={formAction} className='flex justify-center items-center '>
          {/* 防具の名前 */}
          <input name="itemName" defaultValue={armor.name} className='flex w-[280px] h-[25px] px-5 items-center border' readOnly />
          {/* 必要筋力 */}
          <div className='flex w-[140px] h-[25px] px-2 justify-center items-center border'>必要筋力:{armor.min}~{armor.max}</div>
          {/* 筋力の数値を選択 */}
          {/* -ボタン */}
          <button onClick={() => handleClickSubtract2(index,armor.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >-</button>
          {/* 値 */}
          <input name='itemStr' defaultValue={stateArmor2[index]} className='flex justify-center w-[30px] h-[25px] px-1 items-center border' readOnly />
          {/* +ボタン */}
          <button onClick={() => handleClickAdd2(index,armor.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >+</button>
          {/* 値段 */}
          <input name='itemPrice' defaultValue={stateArmor2[index]*armor.multiplication+armor.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center border' readOnly />
          {/* 買うボタン */}
          <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border hover:bg-slate-300 '}`}>買う</button>
        </form>
      </div>
      )}
    {/* 防具の種類 */}
    <div className='h-[40px] flex items-center pl-4 '>盾</div>
    <div>
      <form action={formAction} className="flex justify-between">
        {/* 防具の名前 */}
        <input name="itemName" defaultValue="スモールシールド" className='flex w-[280px] h-[25px] px-5 items-center border' readOnly />
        {/* 必要筋力 */}
        <div className='flex w-[140px] h-[25px] justify-center items-center border'>必要筋力:1</div>
        {/* 値 */}
        <input name='itemStr' defaultValue={1} className='flex w-[70px] h-[25px] pl-8 justify-center items-center border' readOnly />
        {/* 値段 */}
        <input name='itemPrice' defaultValue={60} className='flex w-[50px] h-[25px] pl-3 items-center border' readOnly />
        <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border hover:bg-slate-300 '}`}>買う</button>
      </form>
    </div>
    <div >
      {/* 防具の名前 */}
      <form action={formAction} className="flex justify-between items-center">
        <input name="itemName" defaultValue="ラージシールド" className='flex w-[280px] h-[25px] px-5 items-center border bg-white' readOnly />
        {/* 必要筋力 */}
        <div className='flex w-[140px] h-[25px] justify-center items-center border bg-white'>必要筋力:13</div>
        {/* 値 */}
        <input name='itemStr' defaultValue={13} className='flex w-[70px] h-[25px] pl-7 justify-center items-center border bg-white' readOnly />
        {/* 値段 */}
        <input name='itemPrice' defaultValue={300} className='flex w-[50px] h-[25px] pl-2 items-center border bg-white' readOnly />
        <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border hover:bg-slate-300 '}`}>買う</button>
      </form>
    </div>
  </div>
)}
export default Armor