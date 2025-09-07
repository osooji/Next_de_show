import React from 'react'
import { ratingNumType0, ratingNumType1 } from '@/lib/SW/type/(menu)/ratingType'

const Rating = ({ratingNumber0,ratingNumber1}:{ratingNumber0:ratingNumType0,ratingNumber1:ratingNumType1}) => {
  return (
    <div className='flex-col w-[480px] h-[460px] bg-white p-[10px] border shadow-2xl'>
      <div className='w-[480px] h-[25px] flex justify-center'>レーティング表</div>
      {/* レーティング表 0-25 */}
      <div className='w-[450px] h-[195px] relative'>
        {/* 左上 */}
        <div className='absolute border top-0 left-0 w-[60px] h-[30px] bg-white'></div>
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
\        <div className='absolute border right-0 bottom-0 w-[390px] h-[180px]'>
          <div className='relative flex '>
            {ratingNumber0.keyNumber0.map((rating,index) =>
            <div key={index} className='flex-col text-[10px] justify-center items-center'>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.num}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.a}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.b}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.c}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.d}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.e}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.f}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.g}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.h}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.i}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.j}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.k}</div>
            </div>
            )}
          </div>
        </div>
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
        <div className='absolute border right-0 bottom-0 w-[390px] h-[180px]'>
          <div className='relative flex '>
            {ratingNumber1.keyNumber1.map((rating,index) =>
            <div key={index} className='flex-col text-[10px] justify-center items-center'>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.num}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.a}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.b}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.c}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.d}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.e}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.f}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.g}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.h}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.i}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.j}</div>
              <div className='flex justify-center border w-[15px] h-[15px]'>{rating.k}</div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rating