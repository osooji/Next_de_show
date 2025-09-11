import Common from '@/components/(SKILL)/(common)/common'
import { commonSkill } from '@/lib/SW/skillList/common'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      {/* 一般技能 */}
      <Suspense><Common commonSkill={commonSkill}/></Suspense>
    </div>
  )
}

export default page