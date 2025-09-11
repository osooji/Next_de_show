import BardMagic from '@/components/(Magic)/(bard)/bard'
import { bardMagicList } from '@/lib/SW/MagicList/bardMagic'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      {/* プリースト技能 */}
      <Suspense><BardMagic bardMagicList={bardMagicList}/></Suspense>
    </div>
  )
}

export default page