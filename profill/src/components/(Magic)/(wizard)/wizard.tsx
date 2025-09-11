"use client"

import React from 'react'
import { wizardMagicList } from '@/lib/SW/type/(Magic)/wizardMagicListType'
import { WizardList1, WizardList10, WizardList2, WizardList3, WizardList4, WizardList5, WizardList6, WizardList7, WizardList8, WizardList9 } from './wizardList'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'



const Wizard = ({wizardMagicList}:{wizardMagicList:wizardMagicList}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const PathName = usePathname();
  const Lv = searchParams.get("Lv");

  const handleLvClick = (level:string | null) => {
    const params = new URLSearchParams(searchParams)
    params.set("Lv",level || "0")
    router.push(`${PathName}?${params}`)
  }

  const LvList = ["Lv1","Lv2","Lv3","Lv4","Lv5","Lv6","Lv7","Lv8","Lv9","Lv10"]

  return (
  <div className='w-[796px] flex items-end mx-4'>
    <div className="relative w-[594px] h-[420px] bg-white m-1 flex-col justify-center items-center border">
      <div className='absolute h-[420px] flex flex-col  right-[-42px]'>
        {LvList.map((Lvl,index) => (
          <button key={Lvl} onClick={() => handleLvClick(Lvl)} className={` z-20 bg-white w-[42px] h-[42px] top-[${index*42}px] border focus:bg-black focus:text-white hover:bg-slate-300`}>{Lvl}</button>))}
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
      {Lv==="Lv1"&&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_1.map((magic,index) =>
        <WizardList1  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv2" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_2.map((magic,index) =>
        <WizardList2  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv3" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_3.map((magic,index) =>
        <WizardList3  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv4" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_4.map((magic,index) =>
        <WizardList4  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv5" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_5.map((magic,index) =>
        <WizardList5  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv6" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_6.map((magic,index) =>
        <WizardList6  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv7" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_7.map((magic,index) =>
        <WizardList7  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv8" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_8.map((magic,index) =>
        <WizardList8  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv9" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_9.map((magic,index) =>
        <WizardList9  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
      {Lv==="Lv10" &&
      <div className='absolute top-[45px] left-[-1px] h-[420px]'>
        {/* mapメソッド */}
        {wizardMagicList.level_10.map((magic,index) =>
        <WizardList10  key={index} name={magic.name} sp={magic.sp} range={magic.range} time={magic.time} resist={magic.resist} initial={index} effect={magic.effect} category={magic.category} magnification={magic.magnification} content={magic.content} ID={magic.ID}/>
        )}
      </div>
      }
    </div>
  </div>
)}
export default Wizard