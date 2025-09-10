'use client'

import React from 'react'
import { store } from '@/lib/SW/type/(sign)/zustand';


export const States = () => {
    const A = store(state => state.A);
    const B = store(state => state.B);
    const C = store(state => state.C);
    const D = store(state => state.D);
    const E = store(state => state.E);
    const F = store(state => state.F);
    const G = store(state => state.G);
    const H = store(state => state.H);
    const DEX = store(state => state.DEX);
    const AGI = store(state => state.AGI);
    const INT = store(state => state.INT);
    const STR = store(state => state.STR);
    const HP = store(state => state.HP);
    const SP = store(state => state.SP);
    const allJob = store((state) => state.allJob)
    const cloneAllJob = structuredClone(allJob);
    const maxNum = cloneAllJob.sort((a,b) => b.Lv - a.Lv)

  return (
    <div className='w-[360px] h-[264px]'>
      <div className='w-[360px] h-[26px]'>能力値</div>
        <div className='flex'>
          {/* 能力値A,C,E,G */}
          <div className='flex-col w-[30px] h-[240px]'>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>A</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {A}
              </div>
            </div>
            <div className='w-[30px] h-[80px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>C</div>
              </div>
              <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {C}
              </div>
            </div>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>E</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {E}
              </div>
            </div>
            <div className='w-[30px] h-[80px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>G</div>
              </div>
              <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {G}
              </div>
            </div>
          </div>
          {/* +の列 */}
          <div className='flex-col w-[10px] h-[240px] '>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
          </div>
          {/* 能力値B,D,F,H */}
          <div className='flex-col w-[30px] h-[240px]'>
            <div className='w-[30px] h-[80px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>B</div>
              </div>
              <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {B}
              </div>
            </div>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>D</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {D}
              </div>
            </div>
            <div className='w-[30px] h-[80px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>F</div>
              </div>
              <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {F}
              </div>
            </div>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>H</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {H}
              </div>
            </div>
          </div>
          {/* =の列 */}
          <div className='flex-col w-[10px] h-[240px] '>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
            <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
          </div>
          {/* 合計値 */}
          <div className='flex-col w-[40px] h-[240px]'>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>器用度</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {DEX}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>敏捷度</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {AGI}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>知力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {INT}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>筋力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {STR}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>生命力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {HP}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>精神力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {SP}
              </div>
            </div>
          </div>
          {/* 空欄 */}
          <div className='flex-col w-[10px] h-[240px] '></div>
          {/* ボーナス */}
          <div className='flex-col w-[40px] h-[240px]'>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[6px] bg-white'>（ボーナス）</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +{Math.floor(DEX/6)}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +{Math.floor(AGI/6)}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +{Math.floor(INT/6)}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +{Math.floor(STR/6)}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +{Math.floor(HP/6)}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +{Math.floor(SP/6)}
              </div>
            </div>
          </div>
          {/* 空欄 */}
          <div className='flex-col w-[10px] h-[240px] '></div>
          {/* 画像、抵抗力、ダメージ */}
          <div className='flex-col w-[180px] h-[240px]'>
            <div className='w-[180px] h-[160px] flex-col relative items-center'>
              <div className='w-[180px] h-[10px] flex justify-center items-center absolute '>
              </div>
              <div className='w-[180px] h-[150px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                画像
              </div>
            </div>
            {/* 抵抗、ダメージ */}
            <div className='w-[180px] h-[80px] flex-col items-center'>
                <div className='w-[180px] h-[40px] flex'>
                  {/* 抵抗 */}
                  <div className='flex w-[40px] h-[40px] relative'>
                    <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                      <div className='z-20 text-[10px] bg-white'>抵抗力</div>
                    </div>
                    <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                    {Math.floor(HP/6)+maxNum[0].Lv}
                    </div>
                  </div>
                  {/* 空欄 */}
                  <div className='flex w-[10px] h-[40px] '></div>
                  {/* ダメージ */}
                  <div className='flex-col w-[130px] h-[40px] relative'>
                    <div className='w-[130px] h-[10px] flex justify-center items-center absolute '>
                      <div className='z-20 text-[10px] bg-white'>ダメージ</div>
                    </div>
                    <div className='w-[130px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                      なし
                    </div>
                  </div>
                </div>
                <div className='w-[180px] h-[40px] flex'>
                  {/* 抵抗 */}
                  <div className='flex w-[40px] h-[40px] relative'>
                    <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                      <div className='z-20 text-[10px] bg-white'>抵抗力</div>
                    </div>
                    <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                    {Math.floor(SP/6)+maxNum[0].Lv}
                    </div>
                  </div>
                  {/* 空欄 */}
                  <div className='flex w-[10px] h-[40px] '></div>
                  {/* ダメージ */}
                  <div className='flex-col w-[130px] h-[40px] relative'>
                    <div className='w-[130px] h-[10px] flex justify-center items-center absolute '>
                      <div className='z-20 text-[10px] bg-white'>ダメージ</div>
                    </div>
                    <div className='w-[130px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                      なし
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default States;