import React from 'react'
import Items from '@/components/(SHOP)/items'
import { item } from '@/lib/SW/itemsList/itemList'


const page = () => {
  return (
    <div>
      {/* アイテム */}
      <div><Items itemList={item}/></div>
    </div>
  )
}

export default page