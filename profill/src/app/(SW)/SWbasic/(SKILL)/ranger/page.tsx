import Ranger from '@/components/(SKILL)/(ranger)/ranger'
import { rangerSkill } from '@/lib/SW/skillList/ranger'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
    {/* レンジャー技能 */}
    <Suspense><Ranger rangerSkill={rangerSkill}/></Suspense>
    </div>
  )
}

export default page