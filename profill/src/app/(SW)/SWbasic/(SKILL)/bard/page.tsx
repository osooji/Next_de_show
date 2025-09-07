import Bard from '@/components/(SKILL)/(bard)/bard'
import { bardSkill } from '@/lib/SW/skillList/bard'
import React from 'react'

const page = () => {
  return (
    <div>
    {/* バード技能 */}
    <div><Bard bardSkill={bardSkill} /></div>
    </div>
  )
}

export default page