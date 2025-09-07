import Rating from '@/components/(SW)/Rating/Rating'
import { ratingNumber0, ratingNumber1 } from '@/lib/SW/userItems/ratingNumber'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className=' flex justify-center items-center'><Rating ratingNumber0={ratingNumber0} ratingNumber1={ratingNumber1}/></div>
    </div>
  )
}

export default page