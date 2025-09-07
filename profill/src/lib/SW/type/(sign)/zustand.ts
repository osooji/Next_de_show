import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type statesType = {
  DEX:number,AGI:number,INT:number,STR:number,HP:number,SP:number,exe:number,money:number,itemList:{name:string,value:number}[],weaponList:{name:string,value:number}[],armorList:{name:string,value:number}[],magicList:{name:string,value:number}[],job:{name:string,Lv:number}[]
}
// type itemType ={
//   name:string,
//   value:number
// }[]
type methodType = {
  incrementDEX: (DEX:number) => void,
  incrementAGI: (AGI:number) => void,
  incrementINT: (INT:number) => void,
  incrementSTR: (STR:number) => void,
  incrementHP: (HP:number) => void,
  incrementSP: (SP:number) => void,
  incrementExe:(exe:number) => void,
  decrementExe:(exe:number) => void,
  incrementMoney:(price:number) => void,
  decrementMoney:(price:number) => void,
  incrementItems:(item:{name:string,value:number}) => void,
  decrementItems:(name:{name:string,value:number}) => void,
  addWeaponList:(weapon:{name:string,value:number}) => void,
  addArmorList:(armor:{name:string,value:number}) => void,
  addMagicList:(magic:{name:string,value:number}) => void,
  addMagicJob:(Job:{name:string,Lv:number}) => void,
}

export const store = create< statesType & methodType >()(
  persist((set) => ({
    DEX:0,AGI:0,INT:0,STR:0,HP:0,SP:0,exe:0,money:0,itemList:[],weaponList:[],armorList:[],magicList:[],job:[],
    incrementDEX: (DEX) => set((state) => ({DEX:state.DEX+DEX})),
    incrementAGI: (AGI) => set((state) => ({AGI:state.AGI+AGI})),
    incrementINT: (INT) => set((state) => ({INT:state.INT+INT})),
    incrementSTR: (STR) => set((state) => ({STR:state.STR+STR})),
    incrementHP: (HP) => set((state) => ({HP:state.HP+HP})),
    incrementSP: (SP) => set((state) => ({SP:state.SP+SP})),
    incrementExe: (exe) => set((state) => ({exe:state.exe + exe })),
    decrementExe: (exe) => set((state) => ({exe:state.exe - exe})),
    incrementMoney: (price) => set((state) => ({money:state.money + price })),
    decrementMoney: (price) => set((state) => ({money:state.money - price})),
    incrementItems: (item) => set((state) => ({itemList:[...state.itemList,item] })),
    decrementItems: (name) => set((state) => ({itemList:state.itemList.filter((p)=>(p!==name ))})),
    addWeaponList: (weapon) => set((state) => ({weaponList:[...state.weaponList,weapon]})),
    addArmorList: (armor) => set((state) => ({armorList:[...state.armorList,armor]})),
    addMagicList: (magic) => set((state) => ({magicList:[...state.magicList,magic]})),
    addMagicJob: (job) => set((state) => ({job:[...state.job,job]})),
  }),
  {
    name:"statesList",
    storage:createJSONStorage(() => localStorage)
  })
);

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears:state.bears + 1})),
//   removeAllBears: () => set({ bears:0 }),
//   updateBears: (newBears) => set({bears: newBears }),
// }))

// const useCartStore = create()(
//   persist(
//     (set) => ({
//       cart: [],
//       hasHydrated: false,
//       addToCart: (product) =>
//         set((state) => {
//           const existingIndex = state.cart.findIndex(p=>
//             p.id === product.id &&
//             p.selectedSize === product.selectedSize &&
//             p.selectedColor === product.selectedColor
//           )

//           if(existingIndex !== -1){
//             const updatedCart = [...state.cart]
//             updatedCart[existingIndex].quantity += product.quantity || 1
//             return { cart: [] }
//           }
//         return  {
//           cart:[
//             ...state.cart,
//             {
//               ...product,
//               quantity: product.quantity || 1,
//               selectedSize:product.selectedSize,
//               selectedColor:product.selectedColor,
//             }
//           ]
//         }
//         }),
//       removeFormCart: (product) => set((state) =>
//         ({ cart: state.cart.filter((p)=>!(p.id === product.id &&
//           p.selectedSize === product.selectedSize &&
//           p.selectedColor === product.selectedColor
//         )) }) ),
//       clearCart: () => set( {cart: []} ),
//     }),
//     {
//       name:"cart",
//       storage: createJSONStorage(() => localStorage),
//       onRehydrateStorage: () => (state) => {
//         if(state){
//           state.hasHydrated = true
//         }
//       }
//     }
//   )
// );

