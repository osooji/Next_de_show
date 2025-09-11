'use client'

// import { jobList, skillJob } from '@/lib/SW/(job)/JobList';
import { store } from '@/lib/SW/type/(sign)/zustand'
import React, { useState } from 'react'

const SettingState = () => {
  const [submit, setSubmit] = useState<boolean>(false)

  const stateA = store(state => state.A);
  const stateB = store(state => state.B);
  const stateC = store(state => state.C);
  const stateD = store(state => state.D);
  const stateE = store(state => state.E);
  const stateF = store(state => state.F);
  const stateG = store(state => state.G);
  const stateH = store(state => state.H);
  const setStateA = store(state => state.ASet);
  const setStateB = store(state => state.BSet);
  const setStateC = store(state => state.CSet);
  const setStateD = store(state => state.DSet);
  const setStateE = store(state => state.ESet);
  const setStateF = store(state => state.FSet);
  const setStateG = store(state => state.GSet);
  const setStateH = store(state => state.HSet);
  const incrementDEX = store(state => state.incrementDEX);
  const incrementAGI = store(state => state.incrementAGI);
  const incrementINT = store(state => state.incrementINT);
  const incrementSTR = store(state => state.incrementSTR);
  const incrementHP = store(state => state.incrementHP);
  const incrementSP = store(state => state.incrementSP);
  const exe = store(state => state.exe);
  const decrementExe = store(state => state.decrementExe);
  const allJob = store(state => state.allJob);
  const addAllJob = store(state => state.addAllJob);

  const A = () => {
    incrementDEX(stateA,stateB)
    if(!stateA)
    setStateA(Math.ceil(Math.random()*12));
    if(!stateB){
      setStateB(0)
    }
    incrementDEX(stateA,stateB)
  }
  const B = () => {
    incrementDEX(stateA,stateB)
    incrementAGI(stateC,stateB)
    if(!stateB)
    setStateB(Math.ceil(Math.random()*12));
    if(!stateA){
      setStateA(0)
    }
    if(!stateC){
      setStateC(0)
    }
    incrementDEX(stateA,stateB)
    incrementAGI(stateC,stateB)
  }
  const C = () => {
    incrementAGI(stateC,stateB)
    incrementINT(stateC,stateD)
    if(!stateC)
    setStateC(Math.ceil(Math.random()*12));
    if(!stateB){
      setStateB(0)
    }
    if(!stateC){
      setStateC(0)
    }
    incrementAGI(stateC,stateB)
    incrementINT(stateC,stateD)
  }
  const D = () => {
    incrementINT(stateC,stateD)
    if(!stateD)
    setStateD(Math.ceil(Math.random()*12));
    if(!stateC){
      setStateC(0)
    }
    incrementINT(stateC,stateD)
  }
  const E = () => {
    incrementSTR(stateE,stateF)
    if(!stateE)
    setStateE(Math.ceil(Math.random()*12));
    if(!stateF){
      setStateF(0)
    }
    incrementSTR(stateE,stateF)
  }
  const F = () => {
    incrementSTR(stateE,stateF)
    incrementHP(stateG,stateF)
    if(!stateF)
    setStateF(Math.ceil(Math.random()*12));
    if(!stateE){
      setStateE(0)
    }
    if(!stateG){
      setStateG(0)
    }
    incrementSTR(stateE,stateF)
    incrementHP(stateG,stateF)
  }
  const G = () => {
    incrementHP(stateG,stateF)
    incrementSP(stateG,stateH)
    if(!stateG)
    setStateG(Math.ceil(Math.random()*12));
    if(!stateF){
      setStateF(0)
    }
    if(!stateH){
      setStateH(0)
    }
    incrementHP(stateG,stateF)
    incrementSP(stateG,stateH)
  }
  const H = () => {
    incrementSP(stateG,stateH)
    if(!stateH)
    setStateH(Math.ceil(Math.random()*12));
    if(!stateG){
      setStateG(0)
    }
    incrementSP(stateG,stateH)
  }
  const submitButton = () => {
    incrementDEX(stateA,stateB)
    incrementAGI(stateC,stateB)
    incrementINT(stateC,stateD)
    incrementSTR(stateE,stateF)
    incrementHP(stateG,stateF)
    incrementSP(stateG,stateH)
    setSubmit(true)
  }
  const exeA = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateA(1)
      incrementDEX(stateA,stateB)
    };
  }
  const exeB = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateB(1)
      incrementDEX(stateA,stateB)
      incrementAGI(stateC,stateB)
    };
  }
  const exeC = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateC(1)
      incrementAGI(stateC,stateB)
      incrementINT(stateC,stateD)
    };
  }
  const exeD = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateD(1)
      incrementINT(stateC,stateD)
    };
  }
  const exeE = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateE(1)
      incrementSTR(stateE,stateF)
    };
  }
  const exeF = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateF(1)
      incrementSTR(stateE,stateF)
      incrementHP(stateG,stateF)
    };
  }
  const exeG = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateG(1)
      incrementHP(stateG,stateF)
      incrementSP(stateG,stateH)
    };
  }
  const exeH = () => {
    if(exe > 1000) {
      decrementExe(1000)
      setStateH(1)
      incrementSP(stateG,stateH)
    };
  }
  const handleAddAllJob = (name:string,Lv:number) =>{
    const product = {name,Lv}
    if(((name === 'bard' || name === 'sage' || name === 'ranger') && exe > 500*Lv) || exe > 1000*Lv || (name === 'wizard' && exe > 1000*Lv+1000)) {
    if(name === 'bard' || name === 'sage' || name === 'ranger'){decrementExe(500+Lv*500)}
    else if (name === 'wizard'){ decrementExe(1000+Lv*1000)}
    else decrementExe(1000+Lv*1000)
    addAllJob(product)
    }
  }

  return (
    <div className="flex justify-center items-center  shadow-2xl">
      {submit} ?
      <div className='flex'>
        <div className=' w-[160px] flex-col justify-center bg-white'>
          <div className='flex justify-center items-center py-1 bg-white'>経験値:{exe}</div>
            {/* A */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>A</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateA}
              </div>
              <button onClick={exeA} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            {/* B */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>B</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateB}
              </div>
              <button onClick={exeB} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            {/* C */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>C</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateC}
              </div>
              <button onClick={exeC} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            {/* D */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>D</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateD}
              </div>
              <button onClick={exeD} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            {/* E */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>E</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateE}
              </div>
              <button onClick={exeE} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            {/* F */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>F</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateF}
              </div>
              <button onClick={exeF} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            {/* G */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>G</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateG}
              </div>
              <button onClick={exeG} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            {/* H */}
            <div className='flex items-center justify-center p-2 gap-2'>
              <div className='w-[30px] flex justify-center items-center'>H</div>
              <div className='w-[30px] flex justify-center items-center border'>{stateH}
              </div>
              <button onClick={exeH} className='w-[40px] flex justify-center items-center border hover:bg-slate-500'>+1</button>
            </div>
            <div className='flex items-center justify-center p-2 gap-2'>
              <button onClick={submitButton} className='w-[100px] flex justify-center items-center border hover:bg-slate-500'>決定</button>
            </div>
          </div>
          <div className='w-[150px] flex-col justify-center bg-white'>
            <div className='flex justify-center items-center py-1 bg-white'>職業(JOB)</div>
            {allJob.map(job => (
              <div key={job.name} className='flex items-center justify-center p-2 gap-2' >
                <div className='w-[70px] flex justify-center items-center  px-2'>{job.name}</div>
                <div className='w-[30px] flex justify-center items-center border px-2'>{job.Lv}</div>
                <button onClick={() => handleAddAllJob(job.name,job.Lv)} className='w-[30px] flex justify-center items-center border hover:bg-slate-500  px-1'>+1</button>
              </div>
            ))}
        </div>
      </div>
      :
      <div className='w-[160px] h-[420px] flex-col justify-center bg-white'>
        <div className='flex justify-center items-center w-[200px] h-[25px] py-4 mb-4 bg-white'>ステータス</div>
        {/* A */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>A</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateA}
          </div>
          <button onClick={A} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* B */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>B</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateB}
          </div>
          <button onClick={B} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* C */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>C</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateC}
          </div>
          <button onClick={C} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* D */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>D</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateD}
          </div>
          <button onClick={D} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* E */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>E</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateE}
          </div>
          <button onClick={E} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* F */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>F</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateF}
          </div>
          <button onClick={F} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* G */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>G</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateG}
          </div>
          <button onClick={G} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* H */}
        <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>H</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateH}
          </div>
          <button onClick={H} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div>
        {/* 器用度 */}
        {/* <div className='w-[160px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>器用度</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateDEX}</div>
          <button onClick={DEX} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div> */}
        {/* 敏捷度 */}
        {/* <div className='w-[190px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>敏捷度</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateAGI}</div>
          <button onClick={AGI} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div> */}
        {/* 知力 */}
        {/* <div className='w-[190px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>知力</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateINT}</div>
          <button onClick={INT} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div> */}
        {/* 筋力 */}
        {/* <div className='w-[190px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>筋力</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateSTR}</div>
          <button onClick={STR} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div> */}
        {/* 生命力 */}
        {/* <div className='w-[190px] h-[30px] flex justify-around items-center'>
          <div className='w-[50px] h-[20px] flex justify-center items-center'>生命力</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateHP}</div>
          <button onClick={HP} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div> */}
        {/* 精神力 */}
        {/* <div className='w-[190px] h-[30px] flex justify-around items-center '>
          <div className='w-[50px] h-[20px] flex justify-center items-center '>精神力</div>
          <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateSP}</div>
          <button onClick={SP} className='w-[40px] h-[20px] flex justify-center items-center text-[10px] border hover:bg-slate-500'>ボタン</button>
        </div> */}
      </div>}
      {/* <div className='relative w-[200px] h-[420px] flex-col justify-center border bg-white'>

      </div> */}
    </div>
  )
}

export default SettingState