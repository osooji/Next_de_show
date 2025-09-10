import React from 'react'
import BattleSeet from '@/components/(SW)/battleSeet/battleSeet'
import { ratingNumber0, ratingNumber1 } from '@/lib/SW/userItems/ratingNumber'



const page = () => {
  return (
    <div>
      {/* 戦闘画面 */}
      <div className=' flex justify-center items-center'><BattleSeet  ratingNumber0={ratingNumber0} ratingNumber1={ratingNumber1}/></div>
    </div>
  )
}

export default page