import React from 'react'
import Charseet from '@/components/(SW)/charseet_SW/charseet'
import SettingState from '@/components/Input_Make_SW/settingState'

const page = () => {
  return (
    <div className='min-h-[440px] flex justify-around '>
      {/* ステータス */}
      <div><Charseet /></div>
      <div><SettingState /></div>
    </div>
  )
}

export default page