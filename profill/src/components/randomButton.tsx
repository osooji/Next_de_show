"use client";

import React, { useState } from 'react'

export const randomNumber() => {
  while(true){
    let num:number = Math.ceil(Math.random()*6);
    return num;
  }
}

const RandomButton = () => {
  const [num,setNum] = useState<number|null>(0)
  
    return (
      <div>
        {num}
      </div>
    )
}

export default RandomButton