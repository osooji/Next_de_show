import React from 'react'
import States from './states'
import Magic from './magic'
import Name from './name'

const Charseet = ({A}:number) => {
  return (
  <div className="w-[594px] h-[420px] bg-white m-4 flex justify-center items-center">
    <div className='w-[560px] h-[400px] relative flex  '>
      <div className='flex-col '>
        <div className='top-0 left-0 '><States A={A}/></div>
        <div className='left-0 bottom-0 absolute'><Magic /></div>
      </div>
      <div className='absolute right-0 bottom-0'>
        <Name />
      </div>
    </div>
  </div>
  )
}

export default Charseet