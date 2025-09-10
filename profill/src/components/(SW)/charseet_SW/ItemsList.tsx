'use client'

import { store } from '@/lib/SW/type/(sign)/zustand'
import React from 'react'

const ItemsList = () => {
  const weapon = store(state => state.weaponList)
  const armor = store(state => state.armorList)
  const shield = store(state => state.shieldList)
  const item = store(state => state.itemList)

  return (
    <div className="w-[594px] h-[420px] bg-white flex flex-col">
      <div className='flex items-start'>
        <div className='w-[198px] h-[21px] border'>武器</div>
        <div className='w-[198px] h-[21px] border'>防具</div>
        <div className='w-[198px] h-[21px] border'>アイテム</div>
      </div>
      <div className='flex'>
        <div className='flex flex-col w-[198px]'>
          {weapon.map(weapon =>
            <div key={weapon.name}>{weapon.name}:{weapon.value}</div>
          )}
        </div>
        <div className='flex flex-col w-[198px]'>
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
        <div className='flex flex-col w-[198px]'>
          {item.map(item =>
            <div key={item.name}>{item.name}:{item.value}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemsList