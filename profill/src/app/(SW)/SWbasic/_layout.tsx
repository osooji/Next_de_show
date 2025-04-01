import React from 'react'

const BasicLayout = () => {
  return (
    <div className="flex width-auto hight-auto justify-center ">
      <div className="flex-col width-auto hight-auto bg-black">
        param
      </div>
      <div className="flex width-297 hight-210 bg-red-200" >
      SwBasic
      </div>
      <div>{children}</div>
    </div>
  )
}
export default BasicLayout