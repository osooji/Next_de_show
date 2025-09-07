import PriestSect from '@/components/(Magic)/(priestSect)/priestSect'
import { priestSectList } from '@/lib/SW/MagicList/priestSectList'
import React from 'react'


const page = () => {
  return (
    <div>
      {/* プリースト技能 */}
      <div><PriestSect priestSectList={priestSectList} /></div>
    </div>
  )
}

export default page