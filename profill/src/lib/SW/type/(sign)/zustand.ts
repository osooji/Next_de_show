import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type statesType = {
  name:string,race:string,sex:string,A:number,B:number,C:number,D:number,E:number,F:number,G:number,H:number,DEX:number,AGI:number,INT:number,STR:number,HP:number,SP:number,exe:number,money:number,itemList:{name:string,value:number}[],
  weaponList:{name:string,value:number}[],armorList:{name:string,value:number}[],shieldList:{name:string,value:number}[],magicList:{name:string,value:number}[],
  skillList:{skillName:string,skillLv:number}[],job:{jobName:string,jobLv:number}[],
  jobName:string[],jobLv:number[],skillName:string[],skillLv:number[],
  allJob:{name:string,Lv:number}[]
}
// type itemType ={
//   name:string,
//   value:number
// }[]
type methodType = {
  setName: (name:string) => void,
  setRace: (race:string) => void,
  setSex: (sex:string) => void,
  ASet: (A:number) => void
  BSet: (B:number) => void
  CSet: (C:number) => void
  DSet: (D:number) => void
  ESet: (E:number) => void
  FSet: (F:number) => void
  GSet: (G:number) => void
  HSet: (H:number) => void
  incrementDEX: (A:number,B:number) => void,
  incrementAGI: (C:number,B:number) => void,
  incrementINT: (C:number,D:number) => void,
  incrementSTR: (E:number,F:number) => void,
  incrementHP: (G:number,F:number) => void,
  incrementSP: (G:number,H:number) => void,
  incrementExe:(exe:number) => void,
  decrementExe:(exe:number) => void,
  incrementMoney:(price:number) => void,
  decrementMoney:(price:number) => void,
  incrementItems:(item:{name:string,value:number}) => void,
  decrementItems:(name:{name:string,value:number}) => void,

  reItems:() => void,
  addWeaponList:(weapon:{name:string,value:number}) => void,
  reWeaponList:() => void,
  addArmorList:(armor:{name:string,value:number}) => void,
  reArmorList:() => void,
  addShieldList:(shield:{name:string,value:number}) => void,
  reShieldList:() => void,
  addMagicList:(magic:{name:string,value:number}) => void,
  reMagicList:() => void,

  addSkillList:(skill:{skillName:string,skillLv:number}) => void,
  addJob:(job:{jobName:string,jobLv:number}) => void,
  addAllJob: (job:{name:string,Lv:number}) => void,

  addSkills:(skill:{skillName:string,skillLv:number}) => void,
  addJobs:(job:{jobName:string,jobLv:number}) => void,


}

export const store = create< statesType & methodType >()(
  persist((set) => ({
    name:"",race:"",sex:"",A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,DEX:0,AGI:0,INT:0,STR:0,HP:0,SP:0,exe:3000,money:1000,
    itemList:[],weaponList:[],armorList:[],shieldList:[],magicList:[],
    skillList:[],job:[],
    jobName:[],jobLv:[],skillName:[],skillLv:[],
    allJob:[{name:'fighter',Lv:0},{name:'thief',Lv:0},{name:'ranger',Lv:0},{name:'bard',Lv:0},{name:'sage',Lv:0},{name:'wizard',Lv:0},{name:'priest',Lv:0},{name:'shaman',Lv:0},],
    setName: (name) => set({name:name}),
    setRace: (race) => set({race:race}),
    setSex: (sex) => set({sex:sex}),
    ASet: (A) => set((state) => ({A:state.A+A})),
    BSet: (B) => set((state) => ({B:state.B+B})),
    CSet: (C) => set((state) => ({C:state.C+C})),
    DSet: (D) => set((state) => ({D:state.D+D})),
    ESet: (E) => set((state) => ({E:state.E+E})),
    FSet: (F) => set((state) => ({F:state.F+F})),
    GSet: (G) => set((state) => ({G:state.G+G})),
    HSet: (H) => set((state) => ({H:state.H+H})),
    incrementDEX: (A,B) => set({DEX:A+B+1}),
    incrementAGI: (C,B) => set({AGI:C+B+1}),
    incrementINT: (C,D) => set({INT:C+D+1}),
    incrementSTR: (E,F) => set({STR:E+F+1}),
    incrementHP: (G,F) => set({HP:G+F+1}),
    incrementSP: (G,H) => set({SP:G+H+1}),
    incrementExe: (exe) => set((state) => ({exe:state.exe + exe })),
    decrementExe: (exe) => set((state) => ({exe:state.exe - exe})),
    incrementMoney: (price) => set((state) => ({money:state.money + price })),
    decrementMoney: (price) => set((state) => ({money:state.money - price})),
    incrementItems: (item) => set((state) => ({itemList:[...state.itemList,item] })),
    decrementItems: (name) => set((state) => ({itemList:state.itemList.filter((p)=>(p!==name ))})),
    reItems: () => set({itemList:[]}),

    addWeaponList: (weapon) => set((state) => ({weaponList:[...state.weaponList,weapon]})),
    reWeaponList: () => set({weaponList:[]}),
    addArmorList: (armor) => set((state) => ({armorList:[...state.armorList,armor]})),
    reArmorList: () => set({armorList:[]}),
    addShieldList: (shield) => set((state) => ({shieldList:[...state.shieldList,shield]})),
    reShieldList: () => set({shieldList:[]}),
    addMagicList: (magic) => set((state) => ({magicList:[...state.magicList,magic]})),
    reMagicList: () => set({magicList:[]}),


    addSkillList:(skill) => set((state) => {
      const skillIndex = state.skillList.findIndex(p=>p.skillName === skill.skillName )
      if (skillIndex !== -1){
        const skills = [...state.skillList]
        skills[skillIndex].skillLv +=1
        return {skillList: []}
      }
      return {skillList:[...state.skillList]}
    }),
    addJob: (job) => set((state) => {
      const jobIndex = state.job.findIndex(p=>p.jobName === job.jobName )
      if (jobIndex !== -1){
        const jobs = [...state.job]
        jobs[jobIndex].jobLv +=1
        return {job: []}
      }
      return {job:[...state.job]}
    }),
    addAllJob: (job) => set((state) => {
      const jobIndex = state.allJob.findIndex(p=>p.name === job.name )
      if (jobIndex !== -1){
        const jobs = [...state.allJob]
        jobs[jobIndex].Lv +=1
        return {allJob: jobs}
      }
      return {allJob:[...state.allJob]}
    }),

    addJobs: (job) => set((state) => ({job:[...state.job,job]})),
    addSkills: (skill) => set((state) => ({skillList:[...state.skillList,skill]})),

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

