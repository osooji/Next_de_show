import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export const WizardList1 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const list = searchParams.get("list");

    const handleList = (listName:string) => {
      const params = new URLSearchParams(searchParams);
      params.set("list",listName)
      router.push(`${pathName}?${params}`)
    }
  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList2 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }
  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList3 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }
  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList4 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }
  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList5 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }
  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList6 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }
  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-1 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList7 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }

  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList8 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }

  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList9 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }

  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[25px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[25px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[25px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[25px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[25px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

export const WizardList10 = ({name,sp,range,time,resist,effect,category,magnification,content,ID}:{name:string,sp:number,range:number,time:string,resist:string,initial:number,effect:string,category:string,magnification:string,content:string,ID:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const list = searchParams.get("list");

  const handleList = (listName:string) => {
    const params = new URLSearchParams(searchParams);
    params.set("list",listName)
    router.push(`${pathName}?${params}`)
  }

  return (
    <div className='w-[1000px] flex justify-between'>
      <div className='w-[594px] flex'>
        {/* 魔法の名前 */}
        <button key={ID} onClick={() => handleList(`${ID}`)} className='flex w-[250px] h-[50px] px-2 pt-1 justify-center items-center border focus:bg-slate-400 hover:bg-gray-300'>{name}</button>
        {/* 消費精神力 */}
        <div className='flex w-[45px] h-[50px] px-2 pt-1 justify-center items-center border'>{sp}</div>
        {/* 距離 */}
        <div className='flex w-[55px] h-[50px] px-2 pt-1 justify-center items-center border'>{range}</div>
        {/* 効果時間 */}
        <div className='flex w-[150px] h-[50px] px-2 pt-1 justify-center items-center border'>{time}</div>
        {/* 抵抗 */}
        <div className='flex w-[94px] h-[50px] px-2 pt-1 justify-center items-center border'>{resist}</div>
      </div>
      <div className='absolute flex-col w-[300px] right-0 ml-[48px] top-1 border'>
        <div className='absolute w-[300px] h-[50px] top-[-50px] left-[-1px] flex justify-center items-center border bg-yellow-300'>詳細</div>
        {list===`${ID}` &&
        <div className='h-full flex-col bg-white'>
          <div className='pt-2 pl-4'>{name}</div>
          <div className='pt-2 pl-4'>【対象】: {effect}</div>
          <div className='pt-2 pl-4'>【種別】: {category}</div>
          <div className='pt-2 pl-4'>【拡大】: {magnification}</div>
          <div className='pt-2 pl-4'>【効果】: {content}</div>
        </div>
        }
      </div>
    </div>
  )
}

