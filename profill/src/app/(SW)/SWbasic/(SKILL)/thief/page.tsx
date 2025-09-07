import Thief from '@/components/(SKILL)/(thief)/thief'
import { thiefSkill } from '@/lib/SW/skillList/thief'
import React from 'react'


const page = () => {
  return (
    <div>
      {/* シーフ技能 */}
      <div><Thief thiefSkill={thiefSkill}/></div>
    </div>
  )
}

export default page