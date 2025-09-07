import React from 'react'

const page = ({params}:{params:{battleSeetId:string}}) => {
  return (
    <div>{params.battleSeetId}</div>
  )
}

export default page