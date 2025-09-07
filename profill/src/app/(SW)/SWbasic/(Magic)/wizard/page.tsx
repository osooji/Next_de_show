import Wizard from '@/components/(Magic)/(wizard)/wizard'
import { wizardMagicList } from '@/lib/SW/MagicList/wizard'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* ソーサラー技能 */}
      <div><Wizard wizardMagicList={wizardMagicList}/></div>
    </div>
  )
}

export default page