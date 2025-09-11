'use client'

import { priestMagicList } from '@/lib/SW/type/(Magic)/priestMagicType'
import React from 'react'
import { PriestList1, PriestList10, PriestList2, PriestList3, PriestList4, PriestList5, PriestList6, PriestList7, PriestList8, PriestList9 } from './priestList'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Priest = ({priestMagicList}:{priestMagicList:priestMagicList}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const priest = searchParams.get("priest");

  const handleLvList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("priest",listName)
    router.push(`${pathName}?${params}`)
  }

  const LvList = ["Lv1","Lv2","Lv3","Lv4","Lv5","Lv6","Lv7","Lv8","Lv9","Lv10"];

  return (
  <div className='w-[796px] flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-1 flex-col justify-center items-center border">
      <div className='absolute flex flex-col  right-[-42px]'>
        {LvList.map((Lv,index) => (<button key={Lv} onClick={() => handleLvList(`${Lv}`)} className={` z-20 bg-white w-[42px] h-[42px] top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-slate-300`}>{Lv}</button>))}
      </div>
        <div className='absolute left-[-1px]'>
          <div className='flex items-center'>
            {/* 魔法の名前 */}
            <div className='flex w-[250px] h-[45px] justify-center items-center border'>魔法の名前</div>
            {/* 消費精神力 */}
            <div className='flex w-[45px] h-[45px] justify-center items-center border'>SP</div>
            {/* 距離 */}
            <div className='flex w-[55px] px-1 h-[45px] justify-center items-center border'>距離</div>
            {/* 効果時間 */}
            <div className='flex w-[150px] h-[45px] justify-center items-center border'>効果時間</div>
            {/* 抵抗 */}
            <div className='flex w-[94px] h-[45px] justify-center items-center border '>抵抗</div>
          </div>
      {priest==="Lv1" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_1.map((magic,index) =>
        <PriestList1  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv2" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_2.map((magic,index) =>
        <PriestList2  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv3" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_3.map((magic,index) =>
        <PriestList3  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv4" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_4.map((magic,index) =>
        <PriestList4  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv5" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_5.map((magic,index) =>
        <PriestList5  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv6" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_6.map((magic,index) =>
        <PriestList6  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv7" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_7.map((magic,index) =>
        <PriestList7  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv8" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_8.map((magic,index) =>
        <PriestList8  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv9" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_9.map((magic,index) =>
        <PriestList9  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priest==="Lv10" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestMagicList.level_10.map((magic,index) =>
        <PriestList10  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      </div>
    </div>
  </div>
)}
export default Priest