'use client'

import { store } from '@/lib/SW/type/(sign)/zustand'
import React, { useEffect, useState } from 'react'
import { ratingNumType0, ratingNumType1 } from '@/lib/SW/type/(menu)/ratingType'



const BattleSeet = ({ratingNumber0,ratingNumber1}:{ratingNumber0:ratingNumType0,ratingNumber1:ratingNumType1}) => {
  const [weaponState, setWeaponState] = useState<string|null>("")
  const [weaponValueState, setWeaponValueState] = useState<number>(0)
  const [shieldState, setShieldState] = useState<string|null>("")
  // const [shieldValueState, setShieldValueState] = useState<number|null>(0)
  const [armorState, setArmorState] = useState<string|null>("")
  const [armorValueState, setArmorValueState] = useState<number>(0)
  const [skillState, setSkillState] = useState<string|null>("")
  const [skillValueState, setSkillValueState] = useState<number>(0)

  const DEX = store(state => state.DEX);
  const AGI = store(state => state.AGI);
  const STR = store(state => state.STR);
  const weapon = store(state => state.weaponList);
  const armor = store(state => state.armorList);
  const shield = store(state => state.shieldList);
  const allJob = store(state => state.allJob);
  const cloneAllJob = structuredClone(allJob)
  const maxNum = cloneAllJob.sort((a,b) => b.Lv - a.Lv)
  const battleJob = allJob.filter((p) => {return p.name === 'fighter' || p.name === 'thief' || p.name === 'ranger'})

  const handleChangeWeapon = (name:string) => {
    setWeaponState(JSON.parse(name).name)
    setWeaponValueState(JSON.parse(name).value)
  }
  const handleChangeShield = (name:string) => {
    setShieldState(name)
    // setShieldValueState(value)
  }
  const handleChangeArmor = (name:string) => {
    setArmorState(JSON.parse(name).name)
    setArmorValueState(JSON.parse(name).value)
  }
  const handleChangeSkill = (job:string) => {
    setSkillState(JSON.parse(job).name)
    setSkillValueState(JSON.parse(job).Lv)
  }
  useEffect(() => {

  },[])
  return (
    <div className='flex gap-4'>
      <div className="w-[594px] h-[420px] bg-white flex justify-center items-center shadow-2xl">
        {/* 左 */}
        <div className='w-[240px] h-[420px] flex '>
          {/* 名称 */}
          <div className='w-[190px]'>
            <div className='h-[40px] border'></div>
            {/* 技能 */}
            <div className='h-[70px] flex-col pt-1 pl-2 border'>持ってる技能
              <div className='h-[50px] flex-col items-center'>
              <select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleChangeSkill(e.target.value)}>
                <option className='flex justify-center items-center'></option>
                {battleJob.map(job =>
                // (job.name === 'fighter' ? setSkillState('fighter') : job.name === 'thief' ? setSkillState('thief') : setSkillState('ranger'))
                  <option key={job.name} value={JSON.stringify(job)} className='flex justify-center items-center'>{job.name}</option>
                )}
              </select>
                {/* <div className='text-[12px]'>ファイター/シーフ技能</div>
                <div className='text-[12px]'>レンジャー技能</div> */}
              </div>
            </div>
            {/* 冒険者レベル */}
            <div className='h-[30px] flex items-center p-2 border'>冒険者レベル</div>
            {/* 能力値ボーナス */}
            <div className='h-[90px] pt-1 pl-2 border'>能力値ボーナス
            <div className='h-[50px] flex-col items-center'>
                <div className='text-[12px]'>器用度ボーナス</div>
                <div className='text-[12px]'>敏捷度ボーナス</div>
                <div className='text-[12px]'>筋力ボーナス</div>
              </div>
            </div>
            {/* 武器 */}
            <div className='h-[50px] flex-col pl-2 border'>武器
              <div className='h-[30px] text-[12px]'>
                <select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleChangeWeapon(e.target.value)}>
                  <option className='flex justify-center items-center'></option>
                  {weapon.map(weapon => (
                    <option key={weapon.name} id={weapon.name} value={JSON.stringify(weapon)} >{weapon.name}.{weapon.value}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* 盾 */}
            <div className='h-[50px] flex-col pl-2 border'>盾
              <div className='h-[30px] text-[12px]'>
              <select  onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleChangeShield(e.target.value)}>
              <option className='flex justify-center items-center'></option>
              {shield.map(shield => (
                    <option key={shield.name} value={shield.name}>{shield.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* 鎧 */}
            <div className='h-[50px] flex-col pl-2 border'>鎧
              <div className='h-[30px] text-[12px]'>
              <select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleChangeArmor(e.target.value)}>
              <option className='flex justify-center items-center'></option>
              {armor.map(armor => (
                    <option key={armor.name} value={JSON.stringify(armor)}>{armor.name}:{armor.value}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* 総計 */}
            <div className='h-[40px] flex items-center pl-2 border'>総計</div>
          </div>
          <div className='w-[50px]'>
            <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-3 border'>
              <div className='text-[12px]'>必要</div>
              <div className='text-[12px]'>筋力</div>
            </div>
            <div className='h-[70px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'></div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'>-</div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
                <div className='h-[50px] flex justify-center items-center pt-4 border'>{weaponValueState}</div>
                <div className='h-[50px] flex justify-center items-center pt-4 border'>{shieldState ? 1 : "-"}</div>
                <div className='h-[50px] flex justify-center items-center pt-4 border'>{armorValueState}</div>
            <div className='h-[40px] flex justify-center items-center border'></div>
          </div>
        </div>
        {/* 中 */}
        <div className='w-[200px] h-[420px] flex ml-[2px]'>
          <div className='w-[50px]'>
          <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
            <div className='flex justify-center text-[12px]'>攻撃力</div>
            <div className='flex justify-center text-[12px]'>修正</div>
          </div>
            <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
              <div className=' flex justify-center items-center'>{`${skillState === 'fighter' || skillState === 'thief' ? skillValueState : '-'}`}</div>
              <div className=' flex justify-center items-center'>{`${skillState === 'ranger' ? skillValueState : '-'}`}</div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'>-</div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>{Math.floor(DEX/6)}</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            {/* 魔法武器なら記入 */}
            <div className='h-[50px] flex justify-center items-center pt-4 border'>*</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
              <div className='h-[40px] flex justify-center items-center border'>{`${ skillValueState? skillValueState+(Math.floor(DEX/6)) : 0+(Math.floor(DEX/6))}`}</div>
          </div>
          <div className='w-[50px]'>
          <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
            <div className='flex justify-center pt-2 text-[12px]'>打撃力</div>
          </div>
            <div className='w-[50px] h-[70px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'>-</div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
              <div className='h-[50px] flex justify-center items-center pt-4 border text-red-700'>{`${weaponState ? weaponValueState : '-'}`}</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
              <div className='h-[40px] flex justify-center items-center border text-red-700'>{`${weaponState ? weaponValueState : '-'}`}</div>
          </div>
          <div className='w-[50px]'>
          <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
            <div className='flex justify-center text-[8px]'>クリティカル</div>
            <div className='flex justify-center text-[12px]'>値</div>
          </div>
            <div className='w-[50px] h-[70px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>{skillState === 'thief' ? -1 : '-'}</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'></div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            {/* 魔法武器なら記入 */}
            <div className='h-[50px] flex justify-center items-center pt-4 border'>*</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[40px] flex justify-center items-center border'>{`${ skillState === 'thief' ? 9 : 10}`}</div>
          </div>
          <div className='w-[50px]'>
          <div  className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
            <div className='flex justify-center text-[12px]'>追加</div>
            <div className='flex justify-center text-[10px]'>ダメージ</div>
          </div>
            <div className='w-[50px] h-[70px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>{skillState === 'fighter' || skillState === 'thief' ? skillValueState : '-'}</div>
              <div className='flex justify-center items-center'>{skillState === 'ranger' ? skillValueState : '-'}</div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'>-</div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>{Math.floor(STR/6)}</div>
            </div>
            {/* 魔法武器なら記入 */}
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
              <div className='h-[40px] flex justify-center items-center border'>{`${skillState === 'fighter' || skillState ===  'thief' ||skillState ===  'ranger' ? skillValueState + (Math.floor(STR/6)) : 0 + Math.floor(STR/6)}`}</div>
          </div>
        </div>
        {/* 右 */}
        <div className='w-[150px] h-[420px] flex ml-[2px]'>
          <div className='w-[50px]'>
          <div  className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
            <div className='flex justify-center text-[12px]'>回避力</div>
            <div className='flex justify-center text-[12px]'>修正</div>
          </div>
            <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>

              <div className='flex justify-center items-center'>{(skillState === 'fighter' || skillState === 'thief') ? skillValueState : '-'}</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'>-</div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>{Math.floor(AGI/6)}</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>{shieldState ? 1 : '*'}</div>
            {/* 魔法鎧なら記入 */}
            <div className='h-[50px] flex justify-center items-center pt-4 border'>*</div>
              <div className='h-[40px] flex justify-center items-center border'>{`${(skillState === 'fighter' || skillState === 'thief') ? skillValueState + Math.floor(AGI/6) : 0 + Math.floor(AGI/6)}`}</div>
          </div>
          <div className='w-[50px]'>
          <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
            <div className='flex justify-center pt-2 text-[12px]'>防御力</div>
          </div>
            <div className='w-[50px] h-[70px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'>-</div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
              <div className='h-[50px] flex justify-center items-center pt-4 border text-red-700'>{`${armorState ? armorValueState : 0}`}</div>
              <div className='h-[40px] flex justify-center items-center border text-red-700'>{`${armorState ? armorValueState : 0}`}</div>
          </div>
          <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
            <div className='flex justify-center text-[10px]'>ダメージ</div>
            <div className='flex justify-center text-[12px]'>減少</div>
            <div className='w-[50px] h-[70px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[30px] flex justify-center items-center border'>{maxNum[0].Lv}</div>
            <div className='h-[90px] flex-col justify-center border'>
              <div className='pt-4'></div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
              <div className='flex justify-center items-center'>-</div>
            </div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[50px] flex justify-center items-center pt-4 border'>-</div>
            <div className='h-[40px] flex justify-center items-center border'>{maxNum[0].Lv}</div>
          </div>
        </div>
      </div>
      {/* rating */}
      <div className='flex flex-col h-[420px] mi-8 bg-white'>
        <div className='flex justify-center p-2'>レーティング表</div>
        <div className=' flex justify-center gap-2 pl-2'>
          <div className=' flex '>
          {ratingNumber0.keyNumber0.map((rating,index) =>
          rating.num === weaponValueState &&
            <div key={index} className='flex-col text-[10px] justify-center items-center'>
              <div className='flex justify-center border px-2 py-1 text-sm text-red-700'>武器：{rating.num}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>2、打撃力：{rating.a}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>3、打撃力：{rating.b}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>4、打撃力：{rating.c}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>5、打撃力：{rating.d}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>6、打撃力：{rating.e}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>7、打撃力：{rating.f}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>8、打撃力：{rating.g}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>9、打撃力：{rating.h}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>10、打撃力：{rating.i}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>11、打撃力：{rating.j}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>12、打撃力：{rating.k}</div>
            </div>
          )}
          </div>
          <div className=' flex '>
          {ratingNumber1.keyNumber1.map((rating,index) =>
          rating.num === weaponValueState &&
            <div key={index} className='flex-col text-[10px] justify-center items-center'>
              <div className='flex justify-center border px-2 py-1 text-sm text-red-700'>武器：{rating.num}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>2、打撃力：{rating.a}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>3、打撃力：{rating.b}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>4、打撃力：{rating.c}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>5、打撃力：{rating.d}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>6、打撃力：{rating.e}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>7、打撃力：{rating.f}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>8、打撃力：{rating.g}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>9、打撃力：{rating.h}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>10、打撃力：{rating.i}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>11、打撃力：{rating.j}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>12、打撃力：{rating.k}</div>
            </div>
          )}
          </div>
          <div className=' flex '>
          {ratingNumber0.keyNumber0.map((rating,index) =>
          rating.num === armorValueState &&
            <div key={index} className='flex-col text-[10px] justify-center items-center'>
              <div className='flex justify-center border px-2 py-1 text-sm text-red-700'>鎧：{rating.num}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>2、打撃力：{rating.a}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>3、打撃力：{rating.b}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>4、打撃力：{rating.c}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>5、打撃力：{rating.d}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>6、打撃力：{rating.e}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>7、打撃力：{rating.f}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>8、打撃力：{rating.g}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>9、打撃力：{rating.h}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>10、打撃力：{rating.i}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>11、打撃力：{rating.j}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>12、打撃力：{rating.k}</div>
            </div>
          )}
          </div>
          <div className=' flex '>
          {ratingNumber1.keyNumber1.map((rating,index) =>
          rating.num === armorValueState &&
            <div key={index} className='flex-col text-[10px] justify-center items-center'>
              <div className='flex justify-center border px-2 py-1 text-sm text-red-700'>鎧：{rating.num}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>2、打撃力：{rating.a}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>3、打撃力：{rating.b}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>4、打撃力：{rating.c}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>5、打撃力：{rating.d}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>6、打撃力：{rating.e}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>7、打撃力：{rating.f}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>8、打撃力：{rating.g}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>9、打撃力：{rating.h}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>10、打撃力：{rating.i}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>11、打撃力：{rating.j}</div>
              <div className='flex justify-center border px-2 py-1 text-sm'>12、打撃力：{rating.k}</div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BattleSeet