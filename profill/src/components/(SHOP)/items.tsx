"use client"
import { itemType } from '@/lib/SW/type/(shop)/itemListType'
import React, { useState } from 'react'

const Items = ({itemList}:{itemList:itemType}) => {
    // const [formState, setFormState] = useState<FormData>(formData)
    const [isList1, setIsList1] = useState<boolean>(false)
    const [isList2, setIsList2] = useState<boolean>(false)
    const [isList3, setIsList3] = useState<boolean>(false)
    const [isList4, setIsList4] = useState<boolean>(false)
    const [state, setState] = useState<number[]>([1,1,1,1,1,1])
    const [state0, setState0] = useState<number[]>([1,1,1,1,1])
    const [state1, setState1] = useState<number[]>([1,1,1,1])
    const [state2, setState2] = useState<number[]>([1,1,1,1])
    const [state3, setState3] = useState<number[]>([1,1,1,1])
    const [state4, setState4] = useState<number[]>([1,1,1,1])
    const [state5, setState5] = useState<number[]>([1,1,1,1,1,1])
    const [state6, setState6] = useState<number[]>([1,1,1])
    const [state7, setState7] = useState<number[]>([1])

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
    const handleClickAdd = (index:number, max:number) => {
      const num = state.map((s:number,i:number) => {
        if (i === index && max > state[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState(num);
    }
    const handleClickSubtract = (index:number,min:number) => {
      const num = state.map((s:number,i:number) => {
        if (i === index && min < state[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState(num);
    }
    const handleClickAdd0 = (index:number, max:number) => {
      const num = state0.map((s:number,i:number) => {
        if (i === index && max > state0[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState0(num);
    }
    const handleClickSubtract0 = (index:number,min:number) => {
      const num = state0.map((s:number,i:number) => {
        if (i === index && min < state0[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState0(num);
    }
    const handleClickAdd1 = (index:number, max:number) => {
      const num = state1.map((s:number,i:number) => {
        if (i === index && max > state1[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState1(num);
    }
    const handleClickSubtract1 = (index:number,min:number) => {
      const num = state1.map((s:number,i:number) => {
        if (i === index && min < state1[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState1(num);
    }
    const handleClickAdd2 = (index:number, max:number) => {
      const num = state2.map((s:number,i:number) => {
        if (i === index && max > state2[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState2(num);
    }
    const handleClickSubtract2 = (index:number,min:number) => {
      const num = state2.map((s:number,i:number) => {
        if (i === index && min < state2[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState2(num);
    }
    const handleClickAdd3 = (index:number, max:number) => {
      const num = state3.map((s:number,i:number) => {
        if (i === index && max > state3[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState3(num);
    }
    const handleClickSubtract3 = (index:number,min:number) => {
      const num = state3.map((s:number,i:number) => {
        if (i === index && min < state3[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState3(num);
    }
    const handleClickAdd4 = (index:number, max:number) => {
      const num = state4.map((s:number,i:number) => {
        if (i === index && max > state4[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState4(num);
    }
    const handleClickSubtract4 = (index:number,min:number) => {
      const num = state4.map((s:number,i:number) => {
        if (i === index && min < state4[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState4(num);
    }
    const handleClickAdd5 = (index:number, max:number) => {
      const num = state5.map((s:number,i:number) => {
        if (i === index && max > state5[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState5(num);
    }
    const handleClickSubtract5 = (index:number,min:number) => {
      const num = state5.map((s:number,i:number) => {
        if (i === index && min < state5[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState5(num);
    }
    const handleClickAdd6 = (index:number, max:number) => {
      const num = state6.map((s:number,i:number) => {
        if (i === index && max > state6[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState6(num);
    }
    const handleClickSubtract6 = (index:number,min:number) => {
      const num = state6.map((s:number,i:number) => {
        if (i === index && min < state6[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState6(num);
    }
    const handleClickAdd7 = (index:number, max:number) => {
      const num = state7.map((s:number,i:number) => {
        if (i === index && max > state7[index]) {
          return s+1
        }else{
          return s
        }
      })
      setState7(num);
    }
    const handleClickSubtract7 = (index:number,min:number) => {
      const num = state7.map((s:number,i:number) => {
        if (i === index && min < state7[index]) {
          return s-1
        }else{
          return s
        }
      })
      setState7(num);
    }
  return (
    <div className='relative w-[594px] h-[420px] m-4 bg-white flex justify-center items-center border'>
      <div>
        <button onClick={handleClick1} className='absolute w-[50px] h-[50px] bg-white top-0 right-[-50px] border hover:bg-red-300'>1</button>
        <button onClick={handleClick2} className='absolute w-[50px] h-[50px] bg-white top-[50px] right-[-50px] border hover:bg-red-300'>2</button>
        <button onClick={handleClick3} className='absolute w-[50px] h-[50px] bg-white top-[100px] right-[-50px] border hover:bg-red-300'>3</button>
        <button onClick={handleClick4} className='absolute w-[50px] h-[50px] bg-white top-[150px] right-[-50px] border hover:bg-red-300'>4</button>
      </div>
      {/* 道具の種類 0 袋、キャンプ道具*/}
      {isList1 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 道具の名前 袋*/}
            <div className='flex w-[420px] h-[40px] px-5 items-center border'>名称（道具一覧）</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>個数</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>袋</div>
          {/* mapメソッド */}
          {itemList.bag.map((bag,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={bag.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract(index,bag.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd(index,bag.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state[index]*bag.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>キャンプ道具</div>
          {/* mapメソッド */}
          {itemList.camp.map((camp,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={camp.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract0(index,camp.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state0[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd0(index,camp.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state0[index]*camp.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 道具の種類 1 照明、ツール*/}
      {isList2 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 道具の名前 袋*/}
            <div className='flex w-[420px] h-[40px] px-5 items-center border'>名称（道具一覧）</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>個数</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>照明</div>
          {/* mapメソッド */}
          {itemList.lighting.map((lighting,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={lighting.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract1(index,lighting.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state1[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd1(index,lighting.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state1[index]*lighting.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>ツール</div>
          {/* mapメソッド */}
          {itemList.tool.map((tool,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={tool.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract2(index,tool.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state2[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd2(index,tool.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state2[index]*tool.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 道具の種類 2 その他、食料*/}
      {isList3 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 道具の名前 袋*/}
            <div className='flex w-[420px] h-[40px] px-5 items-center border'>名称（道具一覧）</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>個数</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>その他</div>
          {/* mapメソッド */}
          {itemList.others.map((others,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={others.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract3(index,others.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state3[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd3(index,others.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state3[index]*others.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>食料</div>
          {/* mapメソッド */}
          {itemList.food.map((food,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={food.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract4(index,food.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state4[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd4(index,food.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state4[index]*food.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
        </div>
      }
      {/* 道具の種類 3 馬、宿*/}
      {isList4 &&
        <div className="absolute w-[594px] bg-white top-0 flex-col border">
          <div className='h-[40px] flex items-center'>
            {/* 道具の名前 袋*/}
            <div className='flex w-[420px] h-[40px] px-5 items-center border'>名称（道具一覧）</div>
            {/* 値 */}
            <div className='flex w-[70px] h-[40px] px-1 justify-center items-center border'>個数</div>
            {/* 値段 */}
            <div className='flex w-[50px] h-[40px] justify-center items-center border'>金額</div>
            <div className='flex w-[54px] h-[40px] justify-center items-center border '>決済</div>
          </div>
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>馬</div>
          {/* mapメソッド */}
          {itemList.horse.map((horse,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={horse.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract5(index,horse.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state5[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd5(index,horse.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state5[index]*horse.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>宿</div>
          {/* mapメソッド */}
          {itemList.inn.map((inn,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={inn.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract6(index,inn.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state6[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd6(index,inn.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state6[index]*inn.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' className='flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300'>買う</button>
            {/* </form> */}
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 border'>宿</div>
          {/* mapメソッド */}
          {itemList.livingExp.map((livingExp,index) =>
          <div key={index} className='flex border'>
            {/* <form className='flex justify-between items-center ' action="/(SW)/SWbasic/(shop)/sword/sword.ts" method='POST'> */}
              {/* 道具の名前 */}
              <input  name="name" value={livingExp.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract7(index,livingExp.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input value={state7[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd7(index,livingExp.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input value={state7[index]*livingExp.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
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

export default Items