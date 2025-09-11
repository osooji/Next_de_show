import Shaman from '@/components/(Magic)/(shaman)/shaman'
import { shamanMagicList } from '@/lib/SW/MagicList/shaman'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      {/* シャーマン技能 */}
      <Suspense><Shaman shamanMagicList={shamanMagicList}/></Suspense>
    </div>
  )
}

export default page