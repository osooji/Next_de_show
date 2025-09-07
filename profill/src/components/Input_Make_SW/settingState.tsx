'use client'

import { PrismaClient } from '@prisma/client'
import React, { useState } from 'react'

const SettingState = () => {
  const [stateA,setStateA] = useState<number>(0)
  const [stateB,setStateB] = useState<number>(0)
  const [stateC,setStateC] = useState<number>(0)
  const [stateD,setStateD] = useState<number>(0)
  const [stateE,setStateE] = useState<number>(0)
  const [stateF,setStateF] = useState<number>(0)
  const [stateG,setStateG] = useState<number>(0)
  const [stateH,setStateH] = useState<number>(0)
  const [stateDEX,setStateDEX] = useState<number>(0)
  const [stateAGI,setStateAGI] = useState<number>(0)
  const [stateINT,setStateINT] = useState<number>(0)
  const [stateSTR,setStateSTR] = useState<number>(0)
  const [stateHP,setStateHP] = useState<number>(0)
  const [stateSP,setStateSP] = useState<number>(0)

  const [isState, setIsState] = useState<boolean>(false)

  const A = () => {
    if(!stateA) setStateA(Math.ceil(Math.random()*6));
  }
  const B = () => {
    if(!stateB) setStateB(Math.ceil(Math.random()*6));
  }
  const C = () => {
    if(!stateC) setStateC(Math.ceil(Math.random()*6));
  }
  const D = () => {
    if(!stateD) setStateD(Math.ceil(Math.random()*6));
  }
  const E = () => {
    if(!stateE) setStateE(Math.ceil(Math.random()*6));
  }
  const F = () => {
    if(!stateF) setStateF(Math.ceil(Math.random()*6));
  }
  const G = () => {
    if(!stateG) setStateG(Math.ceil(Math.random()*6));
  }
  const H = () => {
    if(!stateH) setStateH(Math.ceil(Math.random()*6));
  }
  const DEX = () => {
    if(!stateDEX) setStateDEX(Math.ceil(Math.random()*6));
  }
  const AGI = () => {
    if(!stateAGI) setStateAGI(Math.ceil(Math.random()*6));
  }
  const INT = () => {
    if(!stateINT) setStateINT(Math.ceil(Math.random()*6));
  }
  const STR = () => {
    if(!stateSTR) setStateSTR(Math.ceil(Math.random()*6));
  }
  const HP = () => {
    if(!stateHP) setStateHP(Math.ceil(Math.random()*6));
  }
  const SP = () => {
    if(!stateSP) setStateSP(Math.ceil(Math.random()*6));
  }
  const reset = () => {
    setStateA(0)
    setStateB(0)
    setStateC(0)
    setStateD(0)
    setStateE(0)
    setStateF(0)
    setStateG(0)
    setStateH(0)
    setStateDEX(0)
    setStateAGI(0)
    setStateINT(0)
    setStateSTR(0)
    setStateHP(0)
    setStateSP(0)
  }

  async function submitState(){
    // "use server"
    const prisma = PrismaClient();

    await prisma.UserStates.States.create({
      data:{
        A:stateA,
        B:stateB,
        C:stateC,
        D:stateD,
        E:stateE,
        F:stateF,
        G:stateG,
        H:stateH,
        DEX:stateDEX,
        AGI:stateAGI,
        INT:stateINT,
        STR:stateSTR,
        HP:stateHP,
        SP:stateSP,
      }
    })
    setIsState(true);
  }


  return (
    <div>
      {isState &&
      <div className="w-[594px] h-[420px] bg-white m-4 flex justify-center items-center border  shadow-2xl">
        <div className='w-[560px] h-[400px] relative flex  '>
          
        </div>
      </div>
      } :
      {!isState &&
      <div className='flex'>
        <div className='relative w-[200px] h-[420px] flex-col justify-center border bg-white'>
          <div className='absolute flex justify-around items-center w-[200px] h-[25px] top-[-25px] right-0 border bg-white'>
            <div className='flex justify-center items-center w-[60px] h-[20px] text-[10px] '>ステータス</div>
            <button className='w-[50px] h-[20px] text-[10px] border hover:bg-slate-500' onClick={reset}>リセット</button>
            <button onClick={() => submitState} className='w-[30px] h-[20px] text-[10px] border hover:bg-slate-500'>決定</button>
          </div>
          {/* A */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>A</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateA}
            </div>
            <button onClick={A} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* B */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>B</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateB}
            </div>
            <button onClick={B} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* C */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>C</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateC}
            </div>
            <button onClick={C} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* D */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>D</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateD}
            </div>
            <button onClick={D} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* E */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>E</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateE}
            </div>
            <button onClick={E} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* F */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>F</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateF}
            </div>
            <button onClick={F} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* G */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>G</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateG}
            </div>
            <button onClick={G} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* H */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>H</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateH}
            </div>
            <button onClick={H} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* 器用度 */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>器用度</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateDEX}</div>
            <button onClick={DEX} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* 敏捷度 */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>敏捷度</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateAGI}</div>
            <button onClick={AGI} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* 知力 */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>知力</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateINT}</div>
            <button onClick={INT} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* 筋力 */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>筋力</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateSTR}</div>
            <button onClick={STR} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* 生命力 */}
          <div className='w-[190px] h-[30px] flex justify-around items-center'>
            <div className='w-[50px] h-[20px] flex justify-center items-center'>生命力</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateHP}</div>
            <button onClick={HP} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
          {/* 精神力 */}
          <div className='w-[190px] h-[30px] flex justify-around items-center '>
            <div className='w-[50px] h-[20px] flex justify-center items-center '>精神力</div>
            <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateSP}</div>
            <button onClick={SP} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
          </div>
        </div>
        <div className='relative w-[200px] h-[420px] flex-col justify-center border bg-white'>

        </div>
      </div>
      }
    </div>
  )
}

export default SettingState