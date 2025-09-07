import React from 'react'

const battleSeet = () => {
  return (
    <div className="w-[594px] h-[420px] bg-white m-4 flex justify-center items-center shadow-2xl">
      {/* 左 */}
      <div className='w-[240px] h-[420px] flex '>
        {/* 名称 */}
        <div className='w-[190px]'>
          <div className='h-[40px] border'></div>
          {/* 技能 */}
          <div className='h-[70px] flex-col pt-1 pl-2 border'>持ってる技能
            <div className='h-[50px] flex-col items-center'>
              <div className='text-[12px]'>ファイター/シーフ技能</div>
              <div className='text-[12px]'>レンジャー技能</div>
            </div>
          </div>
          {/* 冒険者レベル */}
          <div className='h-[30px] flex items-center p-2 border'>冒険者レベル</div>
          {/* 能力値ボーナス */}
          <div className='h-[90px] pt-1 pl-2 border'>能力値ボーナス
          <div className='h-[50px] flex-col items-center'>
              <div className='text-[12px]'>器用度ボーナス</div>
              <div className='text-[12px]'>敏捷度ボーナス</div>
              <div className='text-[12px]'>筋力ボーナス</div>
            </div>
          </div>
          {/* 武器 */}
          <div className='h-[50px] flex-col pl-2 border'>武器
            <div className='h-[30px] text-[12px]'>
              <select>
                <option>a</option>
                <option>b</option>
              </select>
            </div>
          </div>
          {/* 盾 */}
          <div className='h-[50px] flex-col pl-2 border'>盾
            <div className='h-[30px] text-[12px]'>
            <select>
                <option>a</option>
                <option>b</option>
              </select>
            </div>
          </div>
          {/* 鎧 */}
          <div className='h-[50px] flex-col pl-2 border'>鎧
            <div className='h-[30px] text-[12px]'>
            <select>
                <option>a</option>
                <option>b</option>
              </select>
            </div>
          </div>
          {/* 総計 */}
          <div className='h-[40px] flex items-center pl-2 border'>総計</div>
        </div>
        <div className='w-[50px]'>
          <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-3 border'>
            <div className='text-[12px]'>必要</div>
            <div className='text-[12px]'>筋力</div>
          </div>
          <div className='h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
      </div>
      {/* 中 */}
      <div className='w-[200px] h-[420px] flex ml-[2px]'>
        <div className='w-[50px]'>
        <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
          <div className='flex justify-center text-[12px]'>攻撃力</div>
          <div className='flex justify-center text-[12px]'>修正</div>
        </div>
          <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
        <div className='w-[50px]'>
        <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
          <div className='flex justify-center pt-2 text-[12px]'>打撃力</div>
        </div>
          <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
        <div className='w-[50px]'>
        <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
          <div className='flex justify-center text-[8px]'>クリティカル</div>
          <div className='flex justify-center text-[12px]'>値</div>
        </div>
          <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
        <div className='w-[50px]'>
        <div  className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
          <div className='flex justify-center text-[12px]'>追加</div>
          <div className='flex justify-center text-[10px]'>ダメージ</div>
        </div>
          <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
      </div>
      {/* 右 */}
      <div className='w-[150px] h-[420px] flex ml-[2px]'>
        <div className='w-[50px]'>
        <div  className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
          <div className='flex justify-center text-[12px]'>回避力</div>
          <div className='flex justify-center text-[12px]'>修正</div>
        </div>
          <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
        <div className='w-[50px]'>
        <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
          <div className='flex justify-center pt-2 text-[12px]'>防御力</div>
        </div>
          <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
        <div className='w-[50px] h-[40px] flex-col justify-center items-center pt-1 pl-1/2 border'>
          <div className='flex justify-center text-[10px]'>ダメージ</div>
          <div className='flex justify-center text-[12px]'>減少</div>
          <div className='w-[50px] h-[70px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[30px] flex justify-center items-center border'>1</div>
          <div className='h-[90px] flex-col justify-center border'>
            <div className='pt-4'></div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
            <div className='flex justify-center items-center'>1</div>
          </div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[50px] flex justify-center items-center pt-4 border'>1</div>
          <div className='h-[40px] flex justify-center items-center border'>1</div>
        </div>
      </div>
    </div>
  )
}

export default battleSeet