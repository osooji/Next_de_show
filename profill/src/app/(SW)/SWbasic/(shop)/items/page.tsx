import React, { Suspense } from 'react'
import Items from '@/components/(SHOP)/items'
import { item } from '@/lib/SW/itemsList/itemList'


const page = () => {
  return (
    <div>
      {/* アイテム */}
      <Suspense><Items itemList={item}/></Suspense>
    </div>
  )
}

export default page