import React from 'react'
import { usersStateType } from '@/lib/SW/type/stateType'


export const States = ({statesItems}:{statesItems:usersStateType}) => {
  // const stateFetch = await fetch('C:/Users/osooji/react/Next_de_show/profill/src/lib/SW/userItems/stateItems.json');
  // const statesItems:usersStateType = await stateFetch.json();
  return (
    <div key={statesItems.userId} className='w-[360px] h-[264px]'>
      <div className='w-[360px] h-[26px]'>能力値</div>
        <div className='flex'>
          {/* 能力値A,C,E,G */}
          <div className='flex-col w-[30px] h-[240px]'>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>A</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.states.A}
              </div>
            </div>
            <div className='w-[30px] h-[80px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>C</div>
              </div>
              <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.states.C}
              </div>
            </div>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>E</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.states.E}
              </div>
            </div>
            <div className='w-[30px] h-[80px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>G</div>
              </div>
              <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.states.G}
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
              {statesItems.states.B}
              </div>
            </div>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>D</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.states.D}
              </div>
            </div>
            <div className='w-[30px] h-[80px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>F</div>
              </div>
              <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.states.F}
              </div>
            </div>
            <div className='w-[30px] h-[40px] flex-col relative items-center'>
              <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>H</div>
              </div>
              <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.states.H}
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
              {statesItems.stateName.DEX}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>敏捷度</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateName.AGI}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>知力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateName.INT}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>筋力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateName.STR}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>生命力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateName.HP}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                <div className='z-20 text-[10px] bg-white'>精神力</div>
              </div>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateName.SP}
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
              {statesItems.stateBonus.DEX_Bonus}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateBonus.AGI_Bonus}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateBonus.INT_Bonus}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateBonus.STR_Bonus}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateBonus.HP_Bonus}
              </div>
            </div>
            <div className='w-[40px] h-[40px] flex-col relative items-center'>
              <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {statesItems.stateBonus.SP_Bonus}
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
              {statesItems.resists.map((resist,index) =>
                <div key={index} className='w-[180px] h-[40px] flex'>
                  {/* 抵抗 */}
                  <div className='flex w-[40px] h-[40px] relative'>
                    <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                      <div className='z-20 text-[10px] bg-white'>抵抗力</div>
                    </div>
                    <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                      {resist.RES}
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
                      {resist.DAM}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default States;