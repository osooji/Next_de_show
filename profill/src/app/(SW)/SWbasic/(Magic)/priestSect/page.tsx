import PriestSect from '@/components/(Magic)/(priestSect)/priestSect'
import { priestSectList } from '@/lib/SW/MagicList/priestSectList'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      {/* プリースト技能 */}
      <Suspense><PriestSect priestSectList={priestSectList} /></Suspense>
    </div>
  )
}

export default page