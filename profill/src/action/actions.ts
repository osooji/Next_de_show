"use server";

// import { weaponActionType } from './../lib/SW/type/(shop)/weaponListType';
// import { armorActionType } from "@/lib/SW/type/(shop)/armorListType";
// import { itemActionType } from '@/lib/SW/type/(shop)/itemListType';
// import { magicActionType } from '@/lib/SW/type/(shop)/magicListType';
// import { stateActionType } from '@/lib/SW/type/(menu)/stateType';
import { PrismaClient } from "@prisma/client";
import { cookies } from 'next/headers';
import { signUpType } from '@/lib/SW/type/(sign)';
import { store } from "@/lib/SW/type/(sign)/zustand";

const prisma = new PrismaClient();

export async function signUp(state:signUpType,formData:FormData):Promise<signUpType>{
  const setName = store(state => state.setName)
  const setRace = store(state => state.setRace)
  const setSex = store(state => state.setSex)
  const stateClone:signUpType = structuredClone(state);
  try{
    const ID = formData.get('ID') as string;
    const name = formData.get('name') as string;
    const race = formData.get('race') as string;
    const sex = formData.get('sex') as string;
    setName(name)
    setRace(race)
    setSex(sex)
    stateClone.data.ID = ID;
    stateClone.data.name = name;
    stateClone.data.race = race;
    stateClone.data.sex = sex;

    if (!ID || !name || !race || !sex) {stateClone.message = '入力が足りない'; throw new Error(stateClone.message)};
    await prisma.signUp.create({
      data:{
        ID,
        name,
        race,
        sex
      }
    })
    stateClone.message='成功';
    (await cookies()).set({name:'ID',value:ID,})
    // (await cookies()).set({name:'name',value:stateClone.data.name})
    return stateClone;
  }catch(err) {
    stateClone.message= err instanceof Error? err.message : 'signUpに失敗しました';
    return stateClone
  };
}

export const signGet = async(ID:string) => {
  await prisma.signUp.findUnique({
    where:ID
  })
}

export const signDelete = async (ID:string) => {
  await prisma.signUp.delete({
    where:{
      ID:ID,
    }
  })
}

// export async function signIn(state:signInType, formData:FormData):Promise<signInType>{
//   const stateClone:signInType = structuredClone(state);
//   try{
//     const ID = formData.get('ID');
//     const name = formData.get('name');
//     stateClone.data.ID = ID;
//     stateClone.data.name = name;
//     if (!ID || !name) {stateClone.message = '入力が足りない'; throw new Error(stateClone.message)};
//     await prisma.Sign.findUnique({
//       where:{
//         ID:stateClone.data.ID
//       }
//     })
//     stateClone.message='成功';
//     return stateClone;
//   }catch(err) {
//     stateClone.message= err instanceof Error? err.message : 'signInに失敗しました';
//     return stateClone
//   }
// }
// export async function signOut(){

// }

// export async function weaponBuy(formState:weaponActionType,formData:FormData){
//   let success = formState.success;
//   let error = formState.error;
//   const weapon = formData.get('itemName');
//   const weaponStr = Number(formData.get('itemStr'));
//   const itemPrice = Number(formData.get('itemPrice'));
//   try{
//     if(1000 - itemPrice < 0) {
//       return alert('お金がたりません')
//     }
//     // else if (armor && armorStr) {
//     //   await prisma.UserStates.armor.findMany({
//     //     where:
//     //   })
//     // }
//   else {
//     await prisma.UserStates.weapon.create({
//       data:{
//         weapon:weapon,
//         weaponStr:weaponStr
//       }
//     })
//   }
//   success = '買いました'
//   console.log(success);
//   }catch(err) {
//     error = '買えません';
//     console.log(error)
//     console.log(err)};
// }

// export async function armorBuy(formState:armorActionType,formData:FormData){
//   let success = formState.success;
//   let error = formState.error;
//   const armor = formData.get('itemName') as string;
//   const armorStr = Number(formData.get('itemStr'));
//   const itemPrice = Number(formData.get('itemPrice'));
//   try{
//     if(1000 - itemPrice < 0) {
//       return alert('お金がたりません')
//     }
//     // else if (armor && armorStr) {
//     //   await prisma.UserStates.armor.findMany({
//     //     where:

//     //   })
//     // }
//     else {
//       await prisma.UserStates.armor.create({
//       data:{
//         armor:armor,
//         armorStr:armorStr
//       }
//       })
//       success = '買いました'
//       console.log(success);
//     }
//   }catch(err) {
//     error = '買えません';
//     console.log(err);
//     console.log(error);
//   }
// }

// export async function itemBuy(formState:itemActionType,formData:FormData){
//   let success = formState.success;
//   let error = formState.error;
//   const item = formData.get('itemName');
//   const itemNum = Number(formData.get('itemNum'));
//   const itemPrice = Number(formData.get('itemPrice'));
//   try{
//     if(1000 - itemPrice < 0) {
//       return alert('お金がたりません')
//     }
//         // else if (armor && armorStr) {
//     //   await prisma.UserStates.armor.findMany({
//     //     where:

//     //   })
//     // }
//   else {
//     await prisma.item.create({
//       data:{
//         item:item,
//         itemNum:itemNum
//       }
//     })
//     success = '買いました'
//     console.log(success);
//   }
//   }catch(err) {
//     error = '買えません';
//     console.log(error)
//     console.log(err)
//   };
// }

// export async function magicBuy(formState:magicActionType,formData:FormData){
//   let success = formState.success;
//   let error = formState.error;
//   const magicItem = formData.get('itemName');
//   const magicSp = Number(formData.get('itemSp'));
//   const itemPrice = Number(formData.get('itemPrice'));
//   try{
//     if(1000 - itemPrice < 0) {
//       return alert('お金がたりません')
//     }
//         // else if (armor && armorStr) {
//     //   await prisma.UserStates.armor.findMany({
//     //     where:

//     //   })
//     // }
//   else {
//     await prisma.armor.create({
//       data:{
//         magicItem,magicSp
//       }
//     })
//     success = '買いました'
//     console.log(success);
//   }
//   }catch(err) {
//     error = '買えません';
//     console.log(error);
//     console.log(err)};
// }

// export async function states(formState:stateActionType,formData:FormData){
//   let success = formState.success;
//   let error = formState.error;
//   try{
//     const A = formData.get('A');
//     const B = formData.get('B');
//     const C = formData.get('C');
//     const D = formData.get('D');
//     const E = formData.get('E');
//     const F = formData.get('F');
//     const G = formData.get('G');
//     const H = formData.get('H');
//     const DEX = formData.get('DEX');
//     const AGI = formData.get('AGI');
//     const INT = formData.get('INT');
//     const STR = formData.get('STR');
//     const HP = formData.get('HP');
//     const SP = formData.get('SP');
//     await prisma.state.create({
//       data:{
//         A:A,
//         B:B,
//         C:C,
//         D:D,
//         E:E,
//         F:F,
//         G:G,
//         H:H,
//         DEX:DEX,
//         AGI:AGI,
//         INT:INT,
//         STR:STR,
//         HP:HP,
//         SP:SP,
//       }
//     })
//     success = '買いました'
//     console.log(success);
//   }catch(err) {
//     error = '失敗です';
//     console.log(error)
//     console.log(err)
//   };
// }