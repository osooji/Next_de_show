import React from 'react'
import BattleSeet from '@/components/(SW)/battleSeet/battleSeet'



const page = () => {
  return (
    <div>
      {/* 戦闘画面 */}
      <div className=' flex justify-center items-center p-auto w-full h-screen'><BattleSeet /></div>
    </div>
  )
}

export default page