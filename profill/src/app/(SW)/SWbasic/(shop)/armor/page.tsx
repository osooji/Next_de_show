import React from 'react'
import Armor from '@/components/(SHOP)/armor'
import {  armors1, armors2 } from '@/lib/SW/itemsList/armorList'


const page = () => {
  return (
    <div>
      {/* 防具 */}
      <div><Armor armors1={armors1} armors2={armors2} /></div>
    </div>
  )
}

export default page