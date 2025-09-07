import Ranger from '@/components/(SKILL)/(ranger)/ranger'
import { rangerSkill } from '@/lib/SW/skillList/ranger'
import React from 'react'

const page = () => {
  return (
    <div>
    {/* レンジャー技能 */}
    <div><Ranger rangerSkill={rangerSkill}/></div>
    </div>
  )
}

export default page