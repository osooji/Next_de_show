import React, { Suspense } from 'react'
import Weapon from '@/components/(SHOP)/weapon'
import { weapon } from '@/lib/SW/itemsList/weaponList'


const page = () => {
  return (
    <div>
      {/* 武器 */}
      <Suspense><Weapon weapon={weapon}/></Suspense>
    </div>
  )
}

export default page