import BardMagic from '@/components/(Magic)/(bard)/bard'
import { bardMagicList } from '@/lib/SW/MagicList/bardMagic'
import React from 'react'


const page = () => {
  return (
    <div>
      {/* プリースト技能 */}
      <div><BardMagic bardMagicList={bardMagicList}/></div>
    </div>
  )
}

export default page