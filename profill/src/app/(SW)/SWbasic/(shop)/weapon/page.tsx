import React from 'react'
import Weapon from '@/components/(SHOP)/weapon'
import { weapon } from '@/lib/SW/itemsList/weaponList'


const page = () => {
  return (
    <div>
      {/* 武器 */}
      <div><Weapon weapon={weapon}/></div>
    </div>
  )
}

export default page