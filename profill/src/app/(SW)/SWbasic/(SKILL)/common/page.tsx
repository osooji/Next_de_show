import Common from '@/components/(SKILL)/(common)/common'
import { commonSkill } from '@/lib/SW/skillList/common'
import React from 'react'


const page = () => {
  return (
    <div>
      {/* 一般技能 */}
      <div><Common commonSkill={commonSkill}/></div>
    </div>
  )
}

export default page