import React from 'react'
import Magic from '@/components/(SHOP)/magic'
import { magicItem } from '@/lib/SW/itemsList/magicItemList'


const page = () => {
  return (
    <div>
      {/* 魔法道具 */}
      <div><Magic magicItem={magicItem}/></div>
    </div>
  )
}

export default page