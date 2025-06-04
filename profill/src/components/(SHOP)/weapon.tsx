'use client'
import { weaponType } from '@/lib/SW/type/(shop)/weaponListType'
import React, { useState } from 'react'

// let formData = {
//   name:"",
//   str:"",
// };

const Weapon = ({weapon}:{weapon:weaponType}) => {
  // const [formState, setFormState] = useState<FormData>(formData)
  const [isList1, setIsList1] = useState<boolean>(false)
  const [isList2, setIsList2] = useState<boolean>(false)
  const [isList3, setIsList3] = useState<boolean>(false)
  const [isList4, setIsList4] = useState<boolean>(false)
  const [isList5, setIsList5] = useState<boolean>(false)
  const [isList6, setIsList6] = useState<boolean>(false)
  const [isList7, setIsList7] = useState<boolean>(false)
  const [state, setState] = useState<number[]>([1,1,1,3,3,6,6,7,8,8,12])
  const [state0, setState0] = useState<number[]>([13,11,14,15,16])
  const [state1, setState1] = useState<number[]>([4,10,18])
  const [state2, setState2] = useState<number[]>([1,2,4,4,10])
  const [state3, setState3] = useState<number[]>([5,9,16])
  const [state4, setState4] = useState<number[]>([1,1])
  const [state5, setState5] = useState<number[]>([1,1,8])
  const [state6, setState6] = useState<number[]>([7,11,10])
  const [state7, setState7] = useState<number[]>([2,6,10])
  const [state8, setState8] = useState<number[]>([2,6,20])
  const [state9, setState9] = useState<number[]>([5,10])
  const [state10, setState10] = useState<number[]>([1,1])
  const [state11, setState11] = useState<number[]>([1])
  const [state12, setState12] = useState<number[]>([5,7,3])
  const [state13, setState13] = useState<number[]>([5,10,20])
  const [state14, setState14] = useState<number[]>([10,12,8,1,1,1,5,1])
  const [state15, setState15] = useState<number[]>([1,1,1])

  // const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = e.target;
  //   setFormState({...formData, [name]:value});
  // }
  const handleClick1 = () => {
    setIsList1(!isList1)
  }
  const handleClick2 = () => {
    setIsList2(!isList2)
  }
  const handleClick3 = () => {
    setIsList3(!isList3)
  }
  const handleClick4 = () => {
    setIsList4(!isList4)
  }
  const handleClick5 = () => {
    setIsList5(!isList5)
  }
  const handleClick6 = () => {
    setIsList6(!isList6)
  }
  const handleClick7 = () => {
    setIsList7(!isList7)
  }
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
  const handleClickAdd0 = (index:number, max:number) => {
    const str = state0.map((s:number,i:number) => {
      if (i === index && max > state0[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState0(str);
  }
  const handleClickSubtract0 = (index:number,min:number) => {
    const str = state0.map((s:number,i:number) => {
      if (i === index && min < state0[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState0(str);
  }
  const handleClickAdd1 = (index:number, max:number) => {
    const str = state1.map((s:number,i:number) => {
      if (i === index && max > state1[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState1(str);
  }
  const handleClickSubtract1 = (index:number,min:number) => {
    const str = state1.map((s:number,i:number) => {
      if (i === index && min < state1[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState1(str);
  }
  const handleClickAdd2 = (index:number, max:number) => {
    const str = state2.map((s:number,i:number) => {
      if (i === index && max > state2[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState2(str);
  }
  const handleClickSubtract2 = (index:number,min:number) => {
    const str = state2.map((s:number,i:number) => {
      if (i === index && min < state2[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState2(str);
  }
  const handleClickAdd3 = (index:number, max:number) => {
    const str = state3.map((s:number,i:number) => {
      if (i === index && max > state3[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState3(str);
  }
  const handleClickSubtract3 = (index:number,min:number) => {
    const str = state3.map((s:number,i:number) => {
      if (i === index && min < state3[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState3(str);
  }
  const handleClickAdd4 = (index:number, max:number) => {
    const str = state4.map((s:number,i:number) => {
      if (i === index && max > state4[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState4(str);
  }
  const handleClickSubtract4 = (index:number,min:number) => {
    const str = state4.map((s:number,i:number) => {
      if (i === index && min < state4[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState4(str);
  }
  const handleClickAdd5 = (index:number, max:number) => {
    const str = state5.map((s:number,i:number) => {
      if (i === index && max > state5[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState5(str);
  }
  const handleClickSubtract5 = (index:number,min:number) => {
    const str = state5.map((s:number,i:number) => {
      if (i === index && min < state5[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState5(str);
  }
  const handleClickAdd6 = (index:number, max:number) => {
    const str = state6.map((s:number,i:number) => {
      if (i === index && max > state6[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState6(str);
  }
  const handleClickSubtract6 = (index:number,min:number) => {
    const str = state6.map((s:number,i:number) => {
      if (i === index && min < state6[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState6(str);
  }
  const handleClickAdd7 = (index:number, max:number) => {
    const str = state7.map((s:number,i:number) => {
      if (i === index && max > state7[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState7(str);
  }
  const handleClickSubtract7 = (index:number,min:number) => {
    const str = state7.map((s:number,i:number) => {
      if (i === index && min < state7[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState7(str);
  }
  const handleClickAdd8 = (index:number, max:number) => {
    const str = state8.map((s:number,i:number) => {
      if (i === index && max > state8[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState8(str);
  }
  const handleClickSubtract8 = (index:number,min:number) => {
    const str = state8.map((s:number,i:number) => {
      if (i === index && min < state8[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState8(str);
  }
  const handleClickAdd9 = (index:number, max:number) => {
    const str = state9.map((s:number,i:number) => {
      if (i === index && max > state9[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState9(str);
  }
  const handleClickSubtract9 = (index:number,min:number) => {
    const str = state9.map((s:number,i:number) => {
      if (i === index && min < state9[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState9(str);
  }
  const handleClickAdd10 = (index:number, max:number) => {
    const str = state10.map((s:number,i:number) => {
      if (i === index && max > state10[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState10(str);
  }
  const handleClickSubtract10 = (index:number,min:number) => {
    const str = state10.map((s:number,i:number) => {
      if (i === index && min < state10[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState10(str);
  }
  const handleClickAdd11 = (index:number, max:number) => {
    const str = state11.map((s:number,i:number) => {
      if (i === index && max > state11[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState11(str);
  }
  const handleClickSubtract11 = (index:number,min:number) => {
    const str = state11.map((s:number,i:number) => {
      if (i === index && min < state11[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState11(str);
  }
  const handleClickAdd12 = (index:number, max:number) => {
    const str = state12.map((s:number,i:number) => {
      if (i === index && max > state12[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState12(str);
  }
  const handleClickSubtract12 = (index:number,min:number) => {
    const str = state12.map((s:number,i:number) => {
      if (i === index && min < state12[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState12(str);
  }
  const handleClickAdd13 = (index:number, max:number) => {
    const str = state13.map((s:number,i:number) => {
      if (i === index && max > state13[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState13(str);
  }
  const handleClickSubtract13 = (index:number,min:number) => {
    const str = state13.map((s:number,i:number) => {
      if (i === index && min < state13[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState13(str);
  }
  const handleClickAdd14 = (index:number, max:number) => {
    const str = state14.map((s:number,i:number) => {
      if (i === index && max > state14[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState14(str);
  }
  const handleClickSubtract14 = (index:number,min:number) => {
    const str = state14.map((s:number,i:number) => {
      if (i === index && min < state14[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState14(str);
  }
  const handleClickAdd15 = (index:number) => {
    const numPrice = state15.map((s:number,i:number) => {
      if (i === index && 50 > state15[index]) {
        return s+1
      }else{
        return s
      }
    })
    setState15(numPrice);
  }
  const handleClickSubtract15 = (index:number) => {
    const numPrice = state15.map((s:number,i:number) => {
      if (i === index && 0 < state15[index]) {
        return s-1
      }else{
        return s
      }
    })
    setState15(numPrice);
  }
  // const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setFormState(formData)
  //   console.log(formState)
  // }

  return (
    <div className='relative w-[594px] h-[420px] m-4 bg-white flex justify-center items-center border'>
      <div>
        <button onClick={handleClick1} className='absolute w-[50px] h-[50px] bg-white top-0 right-[-50px] border hover:bg-red-300'>1</button>
        <button onClick={handleClick2} className='absolute w-[50px] h-[50px] bg-white top-[50px] right-[-50px] border hover:bg-red-300'>2</button>
        <button onClick={handleClick3} className='absolute w-[50px] h-[50px] bg-white top-[100px] right-[-50px] border hover:bg-red-300'>3</button>
        <button onClick={handleClick4} className='absolute w-[50px] h-[50px] bg-white top-[150px] right-[-50px] border hover:bg-red-300'>4</button>
        <button onClick={handleClick5} className='absolute w-[50px] h-[50px] bg-white top-[200px] right-[-50px] border hover:bg-red-300'>5</button>
        <button onClick={handleClick6} className='absolute w-[50px] h-[50px] bg-white top-[250px] right-[-50px] border hover:bg-red-300'>6</button>
        <button onClick={handleClick7} className='absolute w-[50px] h-[50px] bg-white top-[300px] right-[-50px] border hover:bg-red-300'>7</button>
      </div>
      {/* 武器武器の種類 0 片手剣*/}
      {isList1 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 武器の名前 片手剣*/}
            <div className='flex w-[250px] h-[40px] px-5 items-center border'>名称（武器一覧）</div>
            <div className='flex w-[30px] h-[40px] px-3 justify-center items-center border'>手</div>
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 武器武器の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>片手剣</div>
          {/* mapメソッド */}
          {weapon.sword.map((sword,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={sword.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{sword.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{sword.min}~{sword.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract(index,sword.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd(index,sword.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state[index]*sword.multiplication+sword.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 武器武器の種類 1 両手剣、斧*/}
      {isList2 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 武器の名前 両手剣、斧*/}
            <div className='flex w-[250px] h-[40px] px-5 items-center border'>名称（武器一覧）</div>
            <div className='flex w-[30px] h-[40px] px-3 justify-center items-center border'>手</div>
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 武器武器の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>両手剣</div>
          {/* mapメソッド */}
          {weapon.twoHandsSword.map((twoHandsSword,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={twoHandsSword.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{twoHandsSword.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{twoHandsSword.min}~{twoHandsSword.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract0(index,twoHandsSword.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state0[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd0(index,twoHandsSword.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state0[index]*twoHandsSword.multiplication+twoHandsSword.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 斧 */}
          <div className='h-[40px] flex items-center pl-4 border'>斧</div>
          {/* mapメソッド */}
          {weapon.axe.map((axe,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={axe.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{axe.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{axe.min}~{axe.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract1(index,axe.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state1[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd1(index,axe.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state1[index]*axe.multiplication+axe.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 武器の名前 2 槍、 槌矛　戦棍、棍棒 */}
      {isList3 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 武器の名前 */}
            <div className='flex w-[250px] h-[40px] px-5 items-center border'>名称（武器一覧）</div>
            <div className='flex w-[30px] h-[40px] px-3 justify-center items-center border'>手</div>
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>

          {/* 武器武器の種類 槍 */}
          <div className='h-[40px] flex items-center pl-4 border'>槍</div>
          {/* mapメソッド */}
          {weapon.spear.map((spear,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={spear.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{spear.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{spear.min}~{spear.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract2(index,spear.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state2[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd2(index,spear.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state2[index]*spear.multiplication+spear.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 槌矛　戦棍 */}
          <div className='h-[40px] flex items-center pl-4 border'>槌矛　戦棍</div>
            {/* mapメソッド */}
            {weapon.mace.map((mace,index) =>
            <div key={index} className='flex justify-center items-center border'>
              {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
                {/* 武器の名前 */}
                <input  name="name" value={mace.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
                <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{mace.hand1}</div>
                {/* 必要筋力 */}
                <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{mace.min}~{mace.max}</div>
                {/* 筋力の数値を選択 */}
                {/* -ボタン */}
                <button onClick={() => handleClickSubtract3(index,mace.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
                {/* 値 */}
                <input value={state3[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
                {/* +ボタン */}
                <button onClick={() => handleClickAdd3(index,mace.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
                {/* 値段 */}
                <input value={state3[index]*mace.multiplication+mace.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
                {/* 買うボタン */}
                <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
              {/* </form> */}
            </div>
          )}
          {/* 武器武器の種類 棍棒*/}
          <div className='h-[40px] flex items-center pl-4 border'>棍棒</div>
          {/* mapメソッド */}
          {weapon.club.map((club,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={club.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{club.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{club.min}~{club.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract4(index,club.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state4[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd4(index,club.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state4[index]*club.multiplication+club.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 武器の名前 3 杖、連接棍棒、戦槌*/}
      {isList4 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 武器の名前 */}
            <div className='flex w-[250px] h-[40px] px-5 items-center border'>名称（武器一覧）</div>
            <div className='flex w-[30px] h-[40px] px-3 justify-center items-center border'>手</div>
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 武器武器の種類 杖*/}
          <div className='h-[40px] flex items-center pl-4 border'>杖</div>
          {/* mapメソッド */}
          {weapon.staff.map((staff,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={staff.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{staff.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{staff.min}~{staff.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract5(index,staff.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state5[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd5(index,staff.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state5[index]*staff.multiplication+staff.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 連接棍棒*/}
          <div className='h-[40px] flex items-center pl-4 border'>連接棍棒</div>
          {/* mapメソッド */}
          {weapon.flail.map((flail,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={flail.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{flail.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{flail.min}~{flail.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract6(index,flail.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state6[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd6(index,flail.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state6[index]*flail.multiplication+flail.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 戦槌*/}
          <div className='h-[40px] flex items-center pl-4 border'>戦槌</div>
          {/* mapメソッド */}
          {weapon.warHammer.map((warHammer,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={warHammer.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{warHammer.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{warHammer.min}~{warHammer.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract7(index,warHammer.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state7[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd7(index,warHammer.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state7[index]*warHammer.multiplication+warHammer.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 武器の名前 4 弓、弩、投石器*/}
      {isList5 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 武器の名前 */}
            <div className='flex w-[250px] h-[40px] px-5 items-center border'>名称（武器一覧）</div>
            <div className='flex w-[30px] h-[40px] px-3 justify-center items-center border'>手</div>
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 武器武器の種類 弓*/}
          <div className='h-[40px] flex items-center pl-4 border'>弓</div>
          {/* mapメソッド */}
          {weapon.bow.map((bow,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={bow.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{bow.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{bow.min}~{bow.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract8(index,bow.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state8[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd8(index,bow.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state8[index]*bow.multiplication+bow.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 弩*/}
          <div className='h-[40px] flex items-center pl-4 border'>弩</div>
          {/* mapメソッド */}
          {weapon.crossBow.map((crossBow,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={crossBow.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{crossBow.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{crossBow.min}~{crossBow.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract9(index,crossBow.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state9[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd9(index,crossBow.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state9[index]*crossBow.multiplication+crossBow.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 投石器*/}
          <div className='h-[40px] flex items-center pl-4 border'>投石器</div>
          {/* mapメソッド */}
          {weapon.sling.map((sling,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={sling.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{sling.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{sling.min}~{sling.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract10(index,sling.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state10[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd10(index,sling.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state10[index]*sling.multiplication+sling.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 武器の名前 5 石、絡みつき武器、巻き上げ弩*/}
      {isList6 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 武器の名前 */}
            <div className='flex w-[250px] h-[40px] px-5 items-center border'>名称（武器一覧）</div>
            <div className='flex w-[30px] h-[40px] px-3 justify-center items-center border'>手</div>
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 武器武器の種類 石*/}
          <div className='h-[40px] flex items-center pl-4 border'>石</div>
          {/* mapメソッド */}
          {weapon.rock.map((rock,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={rock.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{rock.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{rock.min}~{rock.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract11(index,rock.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state11[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd11(index,rock.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state11[index]*rock.multiplication+rock.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 絡みつき武器*/}
          <div className='h-[40px] flex items-center pl-4 border'>絡みつき武器</div>
          {/* mapメソッド */}
          {weapon.throwing.map((throwing,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={throwing.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{throwing.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{throwing.min}~{throwing.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract12(index,throwing.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state12[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd12(index,throwing.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state12[index]*throwing.multiplication+throwing.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 巻き上げ弩*/}
          <div className='h-[40px] flex items-center pl-4 border'>巻き上げ弩</div>
          {/* mapメソッド */}
          {weapon.crannequin.map((crannequin,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={crannequin.name} className='flex w-[250px] h-[25px] pl-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{crannequin.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{crannequin.min}~{crannequin.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract13(index,crannequin.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state8[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd13(index,crannequin.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state13[index]*crannequin.multiplication+crannequin.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 武器の名前 6 その他、矢 */}
      {isList7 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 武器の名前 */}
            <div className='flex w-[250px] h-[40px] px-5 items-center border'>名称（武器一覧）</div>
            <div className='flex w-[30px] h-[40px] px-3 justify-center items-center border'>手</div>
            {/* 必要筋力 */}
            <div className='flex w-[140px] h-[40px] justify-center items-center border'>必要筋力の範囲</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>筋力値</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 武器武器の種類 その他*/}
          <div className='h-[40px] flex items-center pl-4 border'>その他</div>
          {/* mapメソッド */}
          {weapon.others.map((others,index) =>
          <div key={index} className='flex justify-center items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={others.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{others.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{others.min}~{others.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract14(index,others.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state14[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd14(index,others.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state14[index]*others.multiplication+others.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 武器武器の種類 矢*/}
          <div className='h-[40px] flex items-center pl-4 border'>矢（ひとつ１２本）弾（ひとつ２０個）</div>
          {/* mapメソッド */}
          {weapon.arrow.map((arrow,index) =>
          <div key={index} className='flex justify-between items-center border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 武器の名前 */}
              <input  name="name" value={arrow.name} className='flex w-[370px] h-[25px] pl-5 items-center border bg-white ' />
              {/* 束*/}
              <input value={state15[index]*arrow.stock} className='flex w-[50px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* 個数の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract15(index)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 個数*/}
              <input value={state15[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd15(index)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state15[index]*arrow.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
    </div>
  )
}

export default Weapon