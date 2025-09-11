'use client'

import React from 'react'
import { PriestSectList1, PriestSectList2, PriestSectList3, PriestSectList4, PriestSectList5, PriestSectList6 } from './priestSectList'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { priestSectList } from '@/lib/SW/type/(Magic)/priestSectList'

const PriestSect = ({priestSectList}:{priestSectList:priestSectList}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const priestSect = searchParams.get("priestSect");

  const handleLvList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("priestSect",listName)
    router.push(`${pathName}?${params}`)
  }

  const LvList = ["fairs","mairi","rada","chaza","mafa","buraki"];

  return (
  <div className='w-[796px] flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-1 flex-col justify-center items-center border">
      <div className='absolute h-[420px] flex flex-col  right-[-42px]'>
        {LvList.map((Lv,index) => (<button key={Lv} onClick={() => handleLvList(`${Lv}`)} className={` z-20 bg-white w-[42px] h-[42px] top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-slate-300`}>{Lv}</button>))}
      </div>
        <div className='absolute left-[-1px] h-[420px]'>
          <div className='h-[45px] flex items-center'>
            {/* 魔法の名前 */}
            <div className='flex w-[250px] h-[45px] px-5 items-center border'>魔法の名前</div>
            {/* 消費精神力 */}
            <div className='flex w-[45px] h-[45px] justify-center items-center border'>SP</div>
            {/* 距離 */}
            <div className='flex w-[55px] h-[45px] px-1 justify-center items-center border'>距離</div>
            {/* 効果時間 */}
            <div className='flex w-[150px] h-[45px] justify-center items-center border'>効果時間</div>
            {/* 抵抗 */}
            <div className='flex w-[94px] h-[45px] justify-center items-center border '>抵抗</div>
          </div>
        </div>
      {priestSect==="fairs" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestSectList.fairs.map((magic,index) =>
        <PriestSectList1  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priestSect==="mairi" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestSectList.mairi.map((magic,index) =>
        <PriestSectList2  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priestSect==="rada" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestSectList.rada.map((magic,index) =>
        <PriestSectList3  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priestSect==="chaza" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestSectList.chaza.map((magic,index) =>
        <PriestSectList4  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priestSect==="mafa" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestSectList.mafa.map((magic,index) =>
        <PriestSectList5  key={index} Lv={magic.Lv} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {priestSect==="buraki" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {priestSectList.buraki.map((magic,index) =>
        <PriestSectList6  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} Lv={magic.Lv} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
    </div>
  </div>
)}
export default PriestSect