import React from 'react'

const page = ({params}:{params:{itemSeetId:string}}) => {
  return (
    <div>{params.itemSeetId}</div>
  )
}

export default page