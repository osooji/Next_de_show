import React from 'react'
import { Rating0, Rating1 } from '@/lib/SW/userItems/rating'

const Rating = () => {
  return (
    <div className='flex-col w-[480px] h-[470px] bg-white p-[10px] border shadow-2xl'>
      <div className='w-[480px] h-[35px] flex justify-center'>レーティング表</div>
      
      {/* レーティング表 0-25 */}
      <div className='w-[450px] h-[195px] relative'>
        {/* 左上 */}
        <div className='absolute border top-0 left-0 w-[60px] h-[30px]'></div>
        {/* 右上 */}
        <div className='absolute border top-0 right-0 w-[390px] h-[15px] text-[10px] flex justify-center'>キーナンバー</div>
        {/* 左下 */}
        <div className='absolute border bottom-0 left-0 w-[30px] h-[165px] text-[10px] flex justify-center items-center'>2D</div>
        {/* ダイス二つの出目 */}
        <div className='absolute border bottom-0 left-[30px] w-[30px] h-[165px] flex-col text-[10px] justify-center items-center'>
          <div className='flex justify-center border w-[30px] h-[15px]'>2</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>3</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>4</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>5</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>6</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>7</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>8</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>9</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>10</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>11</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>12</div>
        </div>
        {/* 本体 */}
        <Rating0 />
      </div>

      {/* 空欄 */}
      <div className='w-[450px] h-[20px]'></div>

      {/* // レーティング表  26-50 */}
      <div className='w-[450px] h-[195px] relative'>
        {/* 左上 */}
        <div className='absolute border top-0 left-0 w-[60px] h-[30px]'></div>
        {/* 右上 */}
        <div className='absolute border top-0 right-0 w-[390px] h-[15px] text-[10px] flex justify-center'>キーナンバー</div>
        {/* 左下 */}
        <div className='absolute border bottom-0 left-0 w-[30px] h-[165px] text-[10px] flex justify-center items-center'>2D</div>
        {/* ダイス二つの出目 */}
        <div className='absolute border bottom-0 left-[30px] w-[30px] h-[165px] flex-col text-[10px] justify-center items-center'>
          <div className='flex justify-center border w-[30px] h-[15px]'>2</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>3</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>4</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>5</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>6</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>7</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>8</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>9</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>10</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>11</div>
          <div className='flex justify-center border w-[30px] h-[15px]'>12</div>
        </div>
        {/* 本体 */}
        <Rating1 />
      </div>

      {/* 念のため残してる */}
          {/* <div className='absolute border right-0 bottom-0 w-[390px] h-[180px]'>
            <div className='relative flex '>
              <div className='flex-col text-[10px] justify-center items-center'>
                <div className='flex justify-center border w-[15px] h-[15px]'>0</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>1</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>2</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>3</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>4</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>5</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>6</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>7</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>8</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>9</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>10</div>
                <div className='flex justify-center border w-[15px] h-[15px]'>11</div>
              </div>
            </div>
          </div> */}

            {/* {--for文の書き方--
              (function () {
                const list = [];
                for(let i=0;i<11;i++){
                list.push(<div className='flex justify-center border w-[15px] h-[15px]'>{index}</div>);
                }
              return <div>{list}</div>
              }())
            } */}
    </div>
  )
}

export default Rating