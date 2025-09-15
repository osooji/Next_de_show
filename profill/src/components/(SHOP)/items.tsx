"use client"
// import { itemBuy } from '@/action/actions'
import {  itemType } from '@/lib/SW/type/(shop)/itemListType'
import { store } from '@/lib/SW/type/(sign)/zustand'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Items = ({itemList}:{itemList:itemType}) => {
    // const [formState, formAction, isPending] = useActionState<itemActionType>(itemBuy,{success:'',error:')
  const [state, setState] = useState<number[]>([1,1,1,1,1,1])
  const [state0, setState0] = useState<number[]>([1,1,1,1,1])
  const [state1, setState1] = useState<number[]>([1,1,1,1])
  const [state2, setState2] = useState<number[]>([1,1,1,1])
  const [state3, setState3] = useState<number[]>([1,1,1,1])
  const [state4, setState4] = useState<number[]>([1,1,1,1])
  const [state5, setState5] = useState<number[]>([1,1,1,1,1,1])
  const [state6, setState6] = useState<number[]>([1,1,1])
  const [state7, setState7] = useState<number[]>([1])

  const decrementMoney = store((state) => (state.decrementMoney))
  const addItemsList = store((state) => (state.incrementItems))
  // const reItems = store((state) => (state.reItems))
  const money = store((state) => (state.money))

  const formAction = (formData:FormData) => {
    const name = formData.get('itemName') as string
    const value = Number(formData.get('itemNum'));
    const price = Number(formData.get('itemPrice'));
    if(money - price > 0) {
      decrementMoney(price);
      addItemsList({name,value});
      // reItems()
      alert(`${name}:${value}買いました`)
    } else alert('お金が足りません')
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const item = searchParams.get("item");

  const handleList = (itemName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("item",itemName)
    router.push(`${pathName}?${params}`)
    // location.reload()
  }

  const numList = [1,2,3,4];

useEffect(() => {},[])

  return (
    <div className='relative w-[594px] h-[420px] m-4 bg-white flex justify-center items-center border'>
      <div className='absolute h-[420px] flex flex-col  right-[-50px]'>
        {numList.map((num,index) => (
          <button key={num} onClick={() => handleList(`${num}`)} className={`z-20 w-[50px] h-[50px] bg-white top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-red-300`} >{num}</button>
          ))}
      </div>
      {/*アイテム画面 */}
      <div className="absolute bg-white flex-col justify-center items-center">
      <div className='flex justify-center items-center text-[40px]'>アイテム屋</div>
        <div className='flex justify-center items-center text-[24px]'>キャンプ道具</div>
        <div className='flex justify-center items-center text-[24px]'>照明、ツール</div>
        <div className='flex justify-center items-center text-[24px]'>その他、食料</div>
        <div className='flex justify-center items-center text-[24px]'>馬、宿</div>
      </div>
      <div className="absolute w-[594px] bg-white top-0 flex ">
        <div className='h-[40px] flex items-center'>
          {/* 道具の名前 袋*/}
          <div className='flex w-[379px] h-[40px] px-5 items-center border'>名称（道具一覧）</div>
          {/* 値 */}
          <div className='flex w-[90px] h-[40px] px-1 justify-center items-center border'>個数</div>
          {/* 値段 */}
          <div className='flex w-[70px] h-[40px] justify-center items-center border'>金額</div>
          <div className='flex w-[53px] h-[40px] justify-center items-center border '>決済</div>
        </div>
      </div>
      {/* 道具の種類 0 袋、キャンプ道具*/}
      {item==="1" &&
        <div className="absolute w-[594px] bg-white top-[40px] flex-col border">
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>袋</div>
          {/* mapメソッド */}
          {itemList.bag.map((bag,index) =>
          <div key={bag.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={bag.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract(index,bag.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state[index]} readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd(index,bag.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state[index]*bag.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state[index]*bag.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>キャンプ道具</div>
          {/* mapメソッド */}
          {itemList.camp.map((camp,index) =>
          <div key={camp.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={camp.name} className='w-[380px] h-[25px] px-5 bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract0(index,camp.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state0[index]} readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state0[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd0(index,camp.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state0[index]*camp.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state0[index]*camp.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 道具の種類 1 照明、ツール*/}
      {item==="2" &&
        <div className="absolute w-[594px] bg-white top-[40px] flex-col border">
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>照明</div>
          {/* mapメソッド */}
          {itemList.lighting.map((lighting,index) =>
          <div key={lighting.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={lighting.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract1(index,lighting.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state1[index]} readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state1[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd1(index,lighting.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state1[index]*lighting.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state1[index]*lighting.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>ツール</div>
          {/* mapメソッド */}
          {itemList.tool.map((tool,index) =>
          <div key={tool.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={tool.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract2(index,tool.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state2[index]} readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state2[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd2(index,tool.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state2[index]*tool.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state2[index]*tool.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 道具の種類 2 その他、食料*/}
      {item==="3" &&
        <div className="absolute w-[594px] bg-white top-[40px] flex-col border">
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>その他</div>
          {/* mapメソッド */}
          {itemList.others.map((others,index) =>
          <div key={others.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={others.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract3(index,others.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state3[index]} readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state3[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd3(index,others.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state3[index]*others.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state3[index]*others.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>食料</div>
          {/* mapメソッド */}
          {itemList.food.map((food,index) =>
          <div key={food.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={food.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract4(index,food.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state4[index]} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state4[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd4(index,food.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state4[index]*food.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state4[index]*food.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 道具の種類 3 馬、宿*/}
      {item==="4" &&
        <div className="absolute w-[594px] bg-white top-[40px] flex-col border">
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>馬</div>
          {/* mapメソッド */}
          {itemList.horse.map((horse,index) =>
          <div key={horse.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={horse.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract5(index,horse.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state5[index]} readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state5[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd5(index,horse.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state5[index]*horse.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state5[index]*horse.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>宿</div>
          {/* mapメソッド */}
          {itemList.inn.map((inn,index) =>
          <div key={inn.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={inn.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract6(index,inn.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state6[index]} readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state6[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd6(index,inn.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state6[index]*inn.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state6[index]*inn.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
          {/* 道具の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>宿</div>
          {/* mapメソッド */}
          {itemList.livingExp.map((livingExp,index) =>
          <div key={livingExp.id} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 道具の名前 */}
              <input name="itemName" defaultValue={livingExp.name} className='w-[380px] h-[25px] px-5 border bg-white ' readOnly/>
              {/* -ボタン */}
              <button type='button' onClick={() => handleClickSubtract7(index,livingExp.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input type='hidden' name='itemNum' defaultValue={state7[index]}  readOnly/><div className='flex justify-center w-[50px] h-[25px] border bg-white'>{state7[index]}</div>
              {/* +ボタン */}
              <button type='button' onClick={() => handleClickAdd7(index,livingExp.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input type='hidden' name='itemPrice' defaultValue={state7[index]*livingExp.price} readOnly/><div className='flex justify-center w-[70px] h-[25px] border bg-white'>{state7[index]*livingExp.price}</div>
              {/* 買うボタン */}
              <button type='submit' className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300`}>買う</button>
            </form>
          </div>
          )}
        </div>
      }
    </div>
  )
}

export default Items