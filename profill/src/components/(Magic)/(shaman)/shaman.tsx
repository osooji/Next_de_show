'use client'

import { shamanMagicList } from '@/lib/SW/type/(Magic)/shamanMagicList'
import React from 'react'
import { ShamanList1, ShamanList2, ShamanList3, ShamanList4, ShamanList5, ShamanList6, ShamanList7, ShamanList8, ShamanList9 } from './shamanList'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Shaman = ({shamanMagicList}:{shamanMagicList:shamanMagicList}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const Lv = searchParams.get("Lv");

    const handleLvClick = (Lvl:string) => {
      const params = new URLSearchParams(searchParams);
      params.set("Lv",Lvl)
      router.push(`${pathName}?${params}`)
    }

const LvList = ["fire","water","wind","earth","l_d_p","mind","other","top","top2"];

  return (
  <div className='flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-4 flex-col justify-center items-center border">
      <div className='absolute h-[420px] flex flex-col  right-[-42px]'>
        {LvList.map((Lv,index) => (
          <button key={Lv} onClick={() => handleLvClick(`${Lv}`)} className={` z-20 bg-white w-[42px] h-[42px] top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-slate-300`}>{Lv}</button>))}
      </div>
        <div className='absolute left-[-1px] h-[420px]'>
          <div className=' flex items-center'>
            {/* 魔法の名前 */}
            <div className='flex w-[250px]  justify-center items-center border'>魔法の名前</div>
            {/* 消費精神力 */}
            <div className='flex w-[45px]  justify-center items-center border'>SP</div>
            {/* 距離 */}
            <div className='flex w-[55px]  justify-center items-center border'>距離</div>
            {/* 効果時間 */}
            <div className='flex w-[150px]  justify-center items-center border'>効果時間</div>
            {/* 抵抗 */}
            <div className='flex w-[94px]  justify-center items-center border '>抵抗</div>
          </div>

      {Lv==="fire" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.fire.map((magic,index) =>
        <ShamanList1  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="water" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.water.map((magic,index) =>
        <ShamanList2  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="wind" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.wind.map((magic,index) =>
        <ShamanList3  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="earth" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.earth.map((magic,index) =>
        <ShamanList4  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="l_d_p" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.l_d_p.map((magic,index) =>
        <ShamanList5  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="mind" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.mind.map((magic,index) =>
        <ShamanList6  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="other" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.other.map((magic,index) =>
        <ShamanList7  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="top" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.top.map((magic,index) =>
        <ShamanList8  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="top2" &&
      <div className=''>
        {/* mapメソッド */}
        {shamanMagicList.top2.map((magic,index) =>
        <ShamanList9  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      </div>
    </div>
  </div>
)}
export default Shaman