import React from 'react'
import States from './states'
import Magic from './magic'
import Name from './name'
import  statesItems  from '@/lib/SW/userItems/statesItems'
import { nameItems } from '@/lib/SW/userItems/nameItems'
import { magicItems } from '@/lib/SW/userItems/magicItems'


const Charseet = () => {
  return (
  <div className="w-[594px] h-[420px] bg-white m-4 flex justify-center items-center border  shadow-2xl">
    <div className='w-[560px] h-[400px] relative flex  '>
      <div className='flex-col '>
        <div className='top-0 left-0 '><States statesItems={statesItems}/></div>
        <div className='left-0 bottom-0 absolute'><Magic magicItems={magicItems} /></div>
      </div>
      <div className='absolute right-0 bottom-0'>
      <Name nameItems={nameItems} />
      </div>
    </div>
  </div>
  )
}

export default Charseet