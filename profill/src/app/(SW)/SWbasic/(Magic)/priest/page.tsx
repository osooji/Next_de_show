import Priest from '@/components/(Magic)/(priest)/priest'
import { priestMagicList } from '@/lib/SW/MagicList/priest'
import React from 'react'


const page = () => {
  return (
    <div>
      {/* プリースト技能 */}
      <div><Priest priestMagicList={priestMagicList}/></div>
    </div>
  )
}

export default page