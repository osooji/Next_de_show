import React from 'react'
import { usersStateType } from '@/lib/SW/type/stateType'

async function SettingState() {
    const stateFetch = await fetch('C:/Users/osooji/react/Next_de_show/profill/src/lib/SW/userItems/stateItems.json');
    const stateJson:usersStateType = await stateFetch.json();
  return (
    <div className='w-[200px] h-[420px] flex-col justify-center border'>
      {/* A */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>A</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.A}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* B */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>B</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.B}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* C */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>C</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.C}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* D */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>D</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.D}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* E */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>E</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.E}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* F */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>F</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.F}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* G */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>G</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.G}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* H */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>H</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>              {stateJson.states.H}
        </div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* 器用度 */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>器用度</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateJson.stateName.DEX}</div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* 敏捷度 */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>敏捷度</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateJson.stateName.AGI}</div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* 知力 */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>知力</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateJson.stateName.INT}</div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* 筋力 */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>筋力</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateJson.stateName.STR}</div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* 生命力 */}
      <div className='w-[190px] h-[30px] flex justify-around items-center'>
        <div className='w-[50px] h-[20px] flex justify-center items-center'>生命力</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateJson.stateName.HP}</div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
      {/* 精神力 */}
      <div className='w-[190px] h-[30px] flex justify-around items-center '>
        <div className='w-[50px] h-[20px] flex justify-center items-center '>精神力</div>
        <div className='w-[40px] h-[20px] flex justify-center items-center border'>{stateJson.stateName.SP}</div>
        <div className='w-[30px] h-[20px] flex items-center text-[10px] border'>ボタン</div>
      </div>
    </div>
  )
}

export default SettingState