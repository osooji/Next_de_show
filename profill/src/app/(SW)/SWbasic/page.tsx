'use client'
import Charseet from '@/components/charseet/charseet'
import SettingState from '@/components/settingState'
import React, { useState } from 'react'

const SwBasic = () => {
  const [A,setA] = useState<number|null>()
  return (
  <div className="flex w-screen h-screen bg-yellow-50 justify-center items-center">
    <Charseet 
    A='{A}'
    B=''
    C=''
    D=''
    E=''
    F=''
    G=''
    H='' />
    <div className="w-[200px] h-[420px] bg-white m-4">
      <SettingState />
    </div>
  </div>
  )
}

export default SwBasic