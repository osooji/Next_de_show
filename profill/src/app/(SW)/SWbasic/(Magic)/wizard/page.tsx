import Wizard from '@/components/(Magic)/(wizard)/wizard'
import { wizardMagicList } from '@/lib/SW/MagicList/wizard'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      {/* ソーサラー技能 */}
      <Suspense><Wizard wizardMagicList={wizardMagicList}/></Suspense>
    </div>
  )
}

export default page