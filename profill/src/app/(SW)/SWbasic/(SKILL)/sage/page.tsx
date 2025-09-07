import Sage from '@/components/(SKILL)/(sage)/sage'
import { sageSkill } from '@/lib/SW/skillList/sage'
import React from 'react'

const page = () => {
  return (
    <div>
    {/* セージ技能 */}
    <div><Sage sageSkill={sageSkill}/></div>
    </div>
  )
}

export default page