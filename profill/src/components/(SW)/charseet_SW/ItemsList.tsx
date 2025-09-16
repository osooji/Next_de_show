'use client'

import { store } from '@/lib/SW/type/(sign)/zustand'
import React from 'react'

const ItemsList = () => {
  const weapon = store(state => state.weaponList)
  const armor = store(state => state.armorList)
  const shield = store(state => state.shieldList)
  const item = store(state => state.itemList)
  const reWeaponList = store((state) => (state.reWeaponList))
  const reArmorList = store((state) => (state.reArmorList))
  const reShieldList = store((state) => (state.reShieldList))
  const reItems = store((state) => (state.reItems))




  return (
    <div className="w-[594px] h-[420px] bg-white flex flex-col">
      <div className='flex items-center'>
        <div className='flex items-center w-[198px] h-[21px] pl-2 border'>武器<button type='button' onClick={reWeaponList}><div className='px-2 ml-20 text-[10px] text-white bg-gray-700 rounded-full'>武器クリア</div></button>
        </div>
        <div className='flex items-center w-[198px] h-[21px] pl-2 border'>防具<button type='button' onClick={reArmorList}><div className='px-2 ml-8 text-[10px] text-white bg-gray-700 rounded-full'>鎧クリア</div></button><button type='button' onClick={reShieldList}><div className='px-2 text-[10px] text-white bg-gray-700 rounded-full'>盾クリア</div></button>
        </div>
        <div className='flex items-center w-[198px] h-[21px] pl-2 border'>アイテム<button type='button' onClick={reItems}>
          <div className='px-2 ml-8 text-[10px] text-white bg-gray-700 rounded-full'>アイテムクリア</div></button>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-col w-[198px] pl-2 overflow-y-auto:true'>
          {weapon.map(weapon =>
            <div key={weapon.name}>{weapon.name}:{weapon.value}</div>
          )}
        </div>
        <div className='flex flex-col w-[198px] pl-2 overflow-y-auto:true'>
          <div>
            {armor.map(armor =>
              <div key={armor.name}>{armor.name}:{armor.value}</div>
            )}
          </div>
          <div>
            {shield.map(shield =>
              <div key={shield.name}>{shield.name}:{shield.value}</div>
            )}
          </div>
        </div>
        <div className='flex flex-col w-[198px] pl-2 overflow-y-auto:true'>
          {item.map(item =>
            <div key={item.name}>{item.name}:{item.value}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemsList