'use client'
import { weaponBuy } from '@/action/actions'
import { weaponActionType, weaponType } from '@/lib/SW/type/(shop)/weaponListType'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useActionState, useState } from 'react'

const Weapon = ({weapon}:{weapon:weaponType}) => {
  const [formState, formAction, isPending] = useActionState<weaponActionType>(weaponBuy,{success:'',error:''})
  const [state, setState] = useState<number[]>([1,1,1,3,3,6,6,7,8,8,12])/*片手剣*/
  const [state0, setState0] = useState<number[]>([13,11,14,15,16])/*両手剣*/
  const [state1, setState1] = useState<number[]>([4,10,18])/*斧*/
  const [state2, setState2] = useState<number[]>([1,2,4,4,10])/*槍*/
  const [state3, setState3] = useState<number[]>([5,9,16])/*槌矛　戦棍*/
  const [state4, setState4] = useState<number[]>([1,1])/*棍棒*/
  const [state5, setState5] = useState<number[]>([1,1,8])/*杖*/
  const [state6, setState6] = useState<number[]>([7,11,10])/*連接棍棒*/
  const [state7, setState7] = useState<number[]>([2,6,10])/*戦槌*/
  const [state8, setState8] = useState<number[]>([2,6,20])/*弓*/
  const [state9, setState9] = useState<number[]>([5,10])/*弩*/
  const [state10, setState10] = useState<number[]>([1,1])/*投石器*/
  const [state11, setState11] = useState<number[]>([1])/*石*/
  const [state12, setState12] = useState<number[]>([5,7,3])/*絡みつき武器*/
  const [state13, setState13] = useState<number[]>([5,10,20])/*巻き上げ弩*/
  const [state14, setState14] = useState<number[]>([10,12,8,1,1,1,5,1])/*その他*/
  const [state15, setState15] = useState<number[]>([1,1,1])/*矢*/

  /*片手剣筋力値プラス*/
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
  /*片手剣筋力値マイナス*/
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
  /*両手剣筋力値プラス*/
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
  /*両手剣筋力値マイナス*/
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
  /*斧筋力値プラス*/
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
  /*斧筋力値マイナス*/
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
  /*槍筋力値プラス*/
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
  /*槍筋力値マイナス*/
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
  /*槌矛　戦棍筋力値プラス*/
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
  /*槌矛　戦棍筋力値マイナス*/
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
  /*棍棒筋力値プラス*/
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
  /*棍棒筋力値マイナス*/
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
  /*杖筋力値プラス*/
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
  /*杖筋力値マイナス*/
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
  /*連接棍棒筋力値プラス*/
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
  /*連接棍棒筋力値マイナス*/
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
  /*戦槌筋力値プラス*/
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
  /*戦槌筋力値マイナス*/
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
  /*弓筋力値プラス*/
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
  /*弓筋力値マイナス*/
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
  /*弩筋力値プラス*/
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
  /*弩筋力値マイナス*/
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
  /*投石器筋力値プラス*/
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
  /*投石器筋力値マイナス*/
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
  /*石筋力値プラス*/
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
  /*石筋力値マイナス*/
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
  /*絡みつき武器筋力値プラス*/
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
  /*絡みつき武器筋力値マイナス*/
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
  /*巻き上げ弩筋力値プラス*/
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
  /*巻き上げ弩筋力値マイナス*/
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
  /*その他筋力値プラス*/
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
  /*その他筋力値マイナス*/
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
  /*矢筋力値プラス*/
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
  /*矢筋力値マイナス*/
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const wea = searchParams.get("weapon");

  const handleList = (weaponName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("weapon",weaponName)
    router.push(`${pathName}?${params}`)
  }

  const numList = [1,2,3,4,5,6,7];

  return (
    <div className='relative w-[594px] h-[420px] m-4 bg-white flex justify-center items-center '>
      {/* 武器画面切り替えボタン */}
      <div className='absolute h-[420px] flex flex-col right-[-50px]'>
        {numList.map((num,index) => (<button key={num} onClick={() => handleList(`${num}`)} className={`z-20 w-[50px] h-[50px] bg-white top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-red-300`}>{num}</button>))}
      </div>
      {/* 武器屋画面 */}
      <div className="absolute bg-white flex-col justify-center items-center">
      <div className='flex justify-center items-center text-[40px]'>武器屋</div>
        <div className='flex justify-center items-center text-[24px]'>片手剣</div>
        <div className='flex justify-center items-center text-[24px]'>両手剣、斧</div>
        <div className='flex justify-center items-center text-[24px]'>槍、槌矛 戦棍、棍棒</div>
        <div className='flex justify-center items-center text-[24px]'>杖、連接棍棒、戦槌</div>
        <div className='flex justify-center items-center text-[24px]'>弓、弩、投石器</div>
        <div className='flex justify-center items-center text-[24px]'>石、絡みつき武器、巻き上げ弩</div>
        <div className='flex justify-center items-center text-[24px]'>その他、矢</div>
      </div>
      <div className="absolute w-[594px] bg-white top-0 flex ">
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
      </div>
      {/* 武器武器の種類 0 片手剣*/}
      {wea==="1" &&
        <div className="absolute w-[594px] h-[420px] bg-white top-[40px] flex-col border">
          {/* 武器武器の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>片手剣</div>
          {/* mapメソッド */}
          {weapon.sword.map((sword,index) =>
          <div key={index} className='flex '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={sword.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{sword.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{sword.min}~{sword.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract(index,sword.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd(index,sword.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state[index]*sword.multiplication+sword.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 武器武器の種類 1 両手剣、斧*/}
      {wea==="2" &&
        <div className="absolute w-[594px] h-[420px] bg-white top-[40px] flex-col border">
          {/* 武器武器の種類 */}
          <div className='h-[40px] flex items-center pl-4 '>両手剣</div>
          {/* mapメソッド */}
          {weapon.twoHandsSword.map((twoHandsSword,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={twoHandsSword.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{twoHandsSword.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{twoHandsSword.min}~{twoHandsSword.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract0(index,twoHandsSword.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state0[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd0(index,twoHandsSword.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state0[index]*twoHandsSword.multiplication+twoHandsSword.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 斧 */}
          <div className='h-[40px] flex items-center pl-4 '>斧</div>
          {/* mapメソッド */}
          {weapon.axe.map((axe,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input name="itemName" defaultValue={axe.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{axe.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{axe.min}~{axe.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract1(index,axe.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state1[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd1(index,axe.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state1[index]*axe.multiplication+axe.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 武器の名前 2 槍、槌矛　戦棍、棍棒 */}
      {wea==="3" &&
        <div className="absolute w-[594px] h-[420px] bg-white top-[40px] flex-col border">
          {/* 武器武器の種類 槍 */}
          <div className='h-[40px] flex items-center pl-4 '>槍</div>
          {/* mapメソッド */}
          {weapon.spear.map((spear,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={spear.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{spear.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{spear.min}~{spear.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract2(index,spear.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state2[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd2(index,spear.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state2[index]*spear.multiplication+spear.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 槌矛　戦棍 */}
          <div className='h-[40px] flex items-center pl-4 '>槌矛 戦棍</div>
            {/* mapメソッド */}
            {weapon.mace.map((mace,index) =>
            <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
                {/* 武器の名前 */}
                <input  name="itemName" defaultValue={mace.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
                <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{mace.hand1}</div>
                {/* 必要筋力 */}
                <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{mace.min}~{mace.max}</div>
                {/* 筋力の数値を選択 */}
                {/* -ボタン */}
                <button onClick={() => handleClickSubtract3(index,mace.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
                {/* 値 */}
                <input name='itemStr' defaultValue={state3[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
                {/* +ボタン */}
                <button onClick={() => handleClickAdd3(index,mace.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
                {/* 値段 */}
                <input name='itemPrice' defaultValue={state3[index]*mace.multiplication+mace.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
                {/* 買うボタン */}
                <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
              </form>
            </div>
          )}
          {/* 武器武器の種類 棍棒*/}
          <div className='h-[40px] flex items-center pl-4 '>棍棒</div>
          {/* mapメソッド */}
          {weapon.club.map((club,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={club.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{club.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{club.min}~{club.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract4(index,club.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state4[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd4(index,club.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state4[index]*club.multiplication+club.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 武器の名前 3 杖、連接棍棒、戦槌*/}
      {wea==="4" &&
        <div className="absolute w-[594px] h-[420px] bg-white top-[40px] flex-col border">
          {/* 武器武器の種類 杖*/}
          <div className='h-[40px] flex items-center pl-4 '>杖</div>
          {/* mapメソッド */}
          {weapon.staff.map((staff,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={staff.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{staff.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{staff.min}~{staff.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract5(index,staff.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state5[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd5(index,staff.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state5[index]*staff.multiplication+staff.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 連接棍棒*/}
          <div className='h-[40px] flex items-center pl-4 '>連接棍棒</div>
          {/* mapメソッド */}
          {weapon.flail.map((flail,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={flail.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{flail.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{flail.min}~{flail.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract6(index,flail.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state6[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd6(index,flail.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state6[index]*flail.multiplication+flail.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 戦槌*/}
          <div className='h-[40px] flex items-center pl-4 '>戦槌</div>
          {/* mapメソッド */}
          {weapon.warHammer.map((warHammer,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={warHammer.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{warHammer.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{warHammer.min}~{warHammer.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract7(index,warHammer.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state7[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd7(index,warHammer.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state7[index]*warHammer.multiplication+warHammer.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 武器の名前 4 弓、弩、投石器*/}
      {wea==="5" &&
        <div className="absolute w-[594px] h-[420px] bg-white top-[40px] flex-col border">
          {/* 武器武器の種類 弓*/}
          <div className='h-[40px] flex items-center pl-4 '>弓</div>
          {/* mapメソッド */}
          {weapon.bow.map((bow,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={bow.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{bow.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{bow.min}~{bow.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract8(index,bow.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state8[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd8(index,bow.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state8[index]*bow.multiplication+bow.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 弩*/}
          <div className='h-[40px] flex items-center pl-4 '>弩</div>
          {/* mapメソッド */}
          {weapon.crossBow.map((crossBow,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={crossBow.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{crossBow.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{crossBow.min}~{crossBow.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract9(index,crossBow.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state9[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd9(index,crossBow.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state9[index]*crossBow.multiplication+crossBow.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 投石器*/}
          <div className='h-[40px] flex items-center pl-4 '>投石器</div>
          {/* mapメソッド */}
          {weapon.sling.map((sling,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="itemName" defaultValue={sling.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{sling.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{sling.min}~{sling.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract10(index,sling.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input name='itemStr' defaultValue={state10[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd10(index,sling.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state10[index]*sling.multiplication+sling.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 武器の名前 5 石、絡みつき武器、巻き上げ弩*/}
      {wea==="6" &&
        <div className="absolute w-[594px] h-[420px] bg-white top-[40px] flex-col border">
          {/* 武器武器の種類 石*/}
          <div className='h-[40px] flex items-center pl-4 '>石</div>
          {/* mapメソッド */}
          {weapon.rock.map((rock,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="name" defaultValue={rock.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{rock.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{rock.min}~{rock.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract11(index,rock.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input defaultValue={state11[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd11(index,rock.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state11[index]*rock.multiplication+rock.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 絡みつき武器*/}
          <div className='h-[40px] flex items-center pl-4 '>絡みつき武器</div>
          {/* mapメソッド */}
          {weapon.throwing.map((throwing,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="name" defaultValue={throwing.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{throwing.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{throwing.min}~{throwing.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract12(index,throwing.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input defaultValue={state12[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd12(index,throwing.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state12[index]*throwing.multiplication+throwing.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 巻き上げ弩*/}
          <div className='h-[40px] flex items-center pl-4 '>巻き上げ弩</div>
          {/* mapメソッド */}
          {weapon.crannequin.map((crannequin,index) =>
          <div key={index} className='flex justify-center items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="name" defaultValue={crannequin.name} className='flex w-[250px] h-[25px] pl-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{crannequin.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{crannequin.min}~{crannequin.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract13(index,crannequin.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input defaultValue={state8[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd13(index,crannequin.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state13[index]*crannequin.multiplication+crannequin.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
        </div>
      }
      {/* 武器の名前 6 その他、矢 */}
      {wea==="7" &&
        <div className="absolute w-[594px] h-[420px] bg-white top-[40px] flex-col border">
          {/* 武器武器の種類 その他*/}
          <div className='h-[40px] flex items-center pl-4 '>その他</div>
          {/* mapメソッド */}
          {weapon.others.map((others,index) =>
          <div key={index} className='flex justify-center items-center '>
        <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="name" defaultValue={others.name} className='flex w-[250px] h-[25px] px-5 items-center border bg-white ' />
              <div className='flex w-[30px] h-[25px] px-2 items-center border bg-white '>{others.hand1}</div>
              {/* 必要筋力 */}
              <div className='flex w-[140px] h-[25px] pl-4 items-center border bg-white '>必要筋力:{others.min}~{others.max}</div>
              {/* 筋力の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract14(index,others.min)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 値 */}
              <input defaultValue={state14[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd14(index,others.max)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state14[index]*others.multiplication+others.addition} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
          {/* 武器武器の種類 矢*/}
          <div className='h-[40px] flex items-center pl-4 '>矢（ひとつ１２本）弾（ひとつ２０個）</div>
          {/* mapメソッド */}
          {weapon.arrow.map((arrow,index) =>
          <div key={index} className='flex justify-between items-center '>
            <form action={formAction} className='flex justify-center items-center '>
              {/* 武器の名前 */}
              <input  name="name" defaultValue={arrow.name} className='flex w-[370px] h-[25px] pl-5 items-center border bg-white ' />
              {/* 束*/}
              <input defaultValue={state15[index]*arrow.stock} className='flex w-[50px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* 個数の数値を選択 */}
              {/* -ボタン */}
              <button onClick={() => handleClickSubtract15(index)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >-</button>
              {/* 個数*/}
              <input defaultValue={state15[index]} className='flex w-[30px] h-[25px] px-1 justify-center items-center border bg-white ' />
              {/* +ボタン */}
              <button onClick={() => handleClickAdd15(index)} className='flex w-[20px] h-[25px] px-1 justify-center items-center border bg-white hover:bg-slate-300' >+</button>
              {/* 値段 */}
              <input name='itemPrice' defaultValue={state15[index]*arrow.price} className='flex w-[50px] h-[25px] px-1 justify-center items-center bg-white border' />
              {/* 買うボタン */}
              <button type='submit' disabled={isPending} className={`flex w-[54px] h-[25px] justify-center items-center border bg-white hover:bg-slate-300 ${isPending&&'cursor-not-allowed'}`}>{isPending ? 'OK':'買う'}</button>
            </form>
          </div>
          )}
        </div>
      }
    </div>
  )
}

export default Weapon