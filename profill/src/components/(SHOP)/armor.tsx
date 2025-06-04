"use client"
import { armor1Type, armor2Type } from '@/lib/SW/type/(shop)/armorListType'
import React, { useState } from 'react'

// let formData = {
//   name:"",
//   str:"",
// };

type listType = {
  itemName:string, itemStr:number,itemPrice:number
}

const Armor = ({armors1, armors2}:{armors1:armor1Type, armors2:armor2Type}) => {
  const init:listType = {itemName:"",itemStr:0,itemPrice:0};
  const [formState, setFormState] = useState(init)
  const [state, setState] = useState<number[]>([1,2,5])
  const [stateArmor2, setStateArmor2] = useState<number[]>([5,8,10,11,13])


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
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormState({...formState, [name]:value});
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // バリエーション
    // 送信
    setFormState(formState)
    console.log(formState)
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
      <div className='h-[40px] flex items-center pl-4 border'>非金属鎧</div>
        {/* mapメソッド */}
        {armors1.noMetal.map((armor,index) =>
        <div key={index} className='flex justify-center items-center border'>
          <form onSubmit={handleSubmit} className='flex justify-center items-center border'>
            {/* 防具の名前 */}
            <input onChange={handleInputChange} name="itemName" value={armor.name} className='flex w-[280px] h-[25px] px-5 items-center border' />
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[25px] pl-4 items-center border'>必要筋力:{armor.min}~{armor.max}</div>
            {/* 筋力の数値を選択 */}
            {/* -ボタン */}
            <button onClick={() => handleClickSubtract(index,armor.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >-</button>
            {/* 値 */}
            <input onChange={handleInputChange} name="itemStr" value={state[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border' />
            {/* +ボタン */}
            <button onClick={() => handleClickAdd(index,armor.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >+</button>
            {/* 値段 */}
            <input onChange={handleInputChange} name="itemPrice" value={state[index]*armor.multiplication+armor.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center border' />
            {/* 買うボタン */}
            <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border hover:bg-slate-300'>買う</button>
          </form>
        </div>
        )}
      {/* 防具の種類 */}
      <div className='h-[40px] flex items-center pl-4 border'>金属鎧</div>
        {/* mapメソッド */}
        {armors2.metal.map((armor,index) =>
        <div key={index} className='flex justify-between items-center border'>
          {/* <form > */}
            {/* 防具の名前 */}
            <input  name="name" value={armor.name} className='flex w-[280px] h-[25px] px-5 items-center border' />
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[25px] pl-4 items-center border'>必要筋力:{armor.min}~{armor.max}</div>
            {/* 筋力の数値を選択 */}
            {/* -ボタン */}
            <button onClick={() => handleClickSubtract2(index,armor.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >-</button>
            {/* 値 */}
            <input value={stateArmor2[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border' />
            {/* +ボタン */}
            <button onClick={() => handleClickAdd2(index,armor.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border hover:bg-slate-300' >+</button>
            {/* 値段 */}
            <input value={stateArmor2[index]*armor.multiplication+armor.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center border' />
            {/* 買うボタン */}
            <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border hover:bg-slate-300'>買う</button>
          {/* </form> */}
        </div>
        )}
      {/* 防具の種類 */}
      <div className='h-[40px] flex items-center pl-4 border'>盾</div>
      <div className='flex justify-between items-center border'>
        {/* 防具の名前 */}
        <input  name="name" value="スモールシールド" className='flex w-[280px] h-[25px] px-5 items-center border' />
        {/* 必要筋力 */}
        <div className='flex w-[140px] h-[25px] justify-center items-center border'>必要筋力:1</div>
        {/* 値 */}
        <input value={1} className='flex w-[70px] h-[25px] pl-8 justify-center items-center border' />
        {/* 値段 */}
        <div className='flex w-[50px] h-[25px] justify-center items-center border'>60</div>
        <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border hover:bg-slate-300'>買う</button>
      </div>
      <div className='flex justify-between items-center border'>
        {/* 防具の名前 */}
        <input  name="name" value="ラージシールド" className='flex w-[280px] h-[25px] px-5 items-center border bg-white' />
        {/* 必要筋力 */}
        <div className='flex w-[140px] h-[25px] justify-center items-center border bg-white'>必要筋力:13</div>
        {/* 値 */}
        <input value={13} className='flex w-[70px] h-[25px] pl-7 justify-center items-center border bg-white' />
        {/* 値段 */}
        <div className='flex w-[50px] h-[25px] justify-center items-center border bg-white'>300</div>
        <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
      </div>
    </div>
)}
export default Armor