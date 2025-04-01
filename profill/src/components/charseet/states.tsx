import React from 'react'

const States = ({A}) => {
  return (
    <div className='w-[360px] h-[264px]'>
      <div className='w-[360px] h-[26px]'>能力値</div>
      <div className='flex'>
        {/* 能力値A,C,E,G */}
        <div className='flex-col w-[30px] h-[240px]'>
          <div className='w-[30px] h-[40px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>A</div>
            </div>
            <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              {A}
            </div>
          </div>
          <div className='w-[30px] h-[80px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>C</div>
            </div>
            <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              6
            </div>
          </div>
          <div className='w-[30px] h-[40px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>E</div>
            </div>
            <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              15
            </div>
          </div>
          <div className='w-[30px] h-[80px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>G</div>
            </div>
            <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              10
            </div>
          </div>
        </div>
        {/* +の列 */}
        <div className='flex-col w-[10px] h-[240px] '>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>+</div>
        </div>
        {/* 能力値B,D,F,H */}
        <div className='flex-col w-[30px] h-[240px]'>
          <div className='w-[30px] h-[80px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>B</div>
            </div>
            <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              5
            </div>
          </div>
          <div className='w-[30px] h-[40px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>D</div>
            </div>
            <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              8
            </div>
          </div>
          <div className='w-[30px] h-[80px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>F</div>
            </div>
            <div className='w-[30px] h-[70px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              10
            </div>
          </div>
          <div className='w-[30px] h-[40px] flex-col relative items-center'>
            <div className='w-[30px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>H</div>
            </div>
            <div className='w-[30px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              13
            </div>
          </div>
        </div>
        {/* =の列 */}
        <div className='flex-col w-[10px] h-[240px] '>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
          <div className='w-[10px] h-[40px] flex justify-center items-center'>=</div>
        </div>
        {/* 合計値 */}
        <div className='flex-col w-[40px] h-[240px]'>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>器用度</div>
            </div>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              16
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>敏捷度</div>
            </div>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              11
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>知力</div>
            </div>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              14
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>筋力</div>
            </div>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              25
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>生命力</div>
            </div>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              20
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
              <div className='z-20 text-[10px] bg-white'>精神力</div>
            </div>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              23
            </div>
          </div>
        </div>
        {/* 空欄 */}
        <div className='flex-col w-[10px] h-[240px] '></div>
        {/* ボーナス */}
        <div className='flex-col w-[40px] h-[240px]'>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
          <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
            <div className='z-20 text-[6px] bg-white'>（ボーナス）</div>
            </div>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +2
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +1
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +2
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +4
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +3
            </div>
          </div>
          <div className='w-[40px] h-[40px] flex-col relative items-center'>
            <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              +3
            </div>
          </div>
        </div>
        {/* 空欄 */}
        <div className='flex-col w-[10px] h-[240px] '></div>
        {/* 画像、抵抗力、ダメージ */}
        <div className='flex-col w-[180px] h-[240px]'>
          <div className='w-[180px] h-[160px] flex-col relative items-center'>
            <div className='w-[180px] h-[10px] flex justify-center items-center absolute '>
            </div>
            <div className='w-[180px] h-[150px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
              画像
            </div>
          </div>
          {/* 抵抗、ダメージ */}
          <div className='w-[180px] h-[80px] flex items-center'>
            {/* 抵抗 */}
            <div className='w-[40px] h-[80px] flex-col'>
              <div className='flex-col w-[40px] h-[40px] relative'>
                <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                  <div className='z-20 text-[10px] bg-white'>抵抗力</div>
                </div>
                <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                  16
                </div>
              </div>
              <div className='flex-col w-[40px] h-[40px] relative'>
                <div className='w-[40px] h-[10px] flex justify-center items-center absolute '>
                  <div className='z-20 text-[10px] bg-white'>抵抗力</div>
                </div>
                <div className='w-[40px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                  16
                </div>
              </div>
            </div>
            {/* 空欄 */}
            <div className='flex-col w-[10px] h-[80px] '></div>
            {/* ダメージ */}
            <div className='flex-col w-[130px] h-[80px]'>
              <div className='flex-col w-[130px] h-[40px] relative'>
                <div className='w-[130px] h-[10px] flex justify-center items-center absolute '>
                  <div className='z-20 text-[10px] bg-white'>抵抗力</div>
                </div>
                <div className='w-[130px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                  16
                </div>
              </div>
              <div className='flex-col w-[130px] h-[40px] relative'>
                <div className='w-[130px] h-[10px] flex justify-center items-center absolute '>
                  <div className='z-20 text-[10px] bg-white'>抵抗力</div>
                </div>
                <div className='w-[130px] h-[30px] border absolute bottom-[5px] flex justify-center items-center text-lg'>
                  16
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default States