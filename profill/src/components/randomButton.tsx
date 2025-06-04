"use client";

import { useActionState, useState } from "react";


async function randomNumber6() {
  "use server"
  const [state,setState] = useState<number>("" as number);
  const [saikoro,setSaikoro] = useState(ture);
  if (!state && saikoro)
  setSaikoro((setTimeout(() => false,1000)))
   while(saikoro){
    // random()は小数点以下を含む0~1
  const num = await Math.ceil(Math.random()*6);
  setState(num);
  }
}

export const RandomButton6 = () => {
  const [num,randomNumber6] = useActionState<number|null>(0)
  
    return (
     <from action={randomNumber6}>
      <bottom type="submit" ></bottom>
     </from>
    )
}
