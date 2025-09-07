import Shaman from '@/components/(Magic)/(shaman)/shaman'
import { shamanMagicList } from '@/lib/SW/MagicList/shaman'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* シャーマン技能 */}
      <div><Shaman shamanMagicList={shamanMagicList}/></div>
    </div>
  )
}

export default page