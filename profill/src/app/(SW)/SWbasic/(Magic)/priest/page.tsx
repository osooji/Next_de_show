import Priest from '@/components/(Magic)/(priest)/priest'
import { priestMagicList } from '@/lib/SW/MagicList/priest'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      {/* プリースト技能 */}
      <Suspense><Priest priestMagicList={priestMagicList}/></Suspense>
    </div>
  )
}

export default page