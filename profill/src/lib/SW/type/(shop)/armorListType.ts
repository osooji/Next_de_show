export type armor1Type = {
  noMetal:{
    id:number,name:string,min:number,max:number,multiplication:number,addition:number
  }[]
}

export type armor2Type = {
  metal:{
    id:number,name:string,min:number,max:number,multiplication:number,addition:number
  }[]
}

export type listType = {
  itemName:string, itemStr:number,itemPrice:number
}

export type armorActionType = {
  success:string,
  error:string
}