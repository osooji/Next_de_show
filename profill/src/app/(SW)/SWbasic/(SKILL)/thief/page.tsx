import Thief from '@/components/(SKILL)/(thief)/thief'
import { thiefSkill } from '@/lib/SW/skillList/thief'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      {/* シーフ技能 */}
      <Suspense><Thief thiefSkill={thiefSkill}/></Suspense>
    </div>
  )
}

export default page