export type armor1Type = {
  noMetal:{
    name:string,min:number,max:number,multiplication:number,addition:number
  }[]
}

export type armor2Type = {
  metal:{
    name:string,min:number,max:number,multiplication:number,addition:number
  }[]
}

export type listType = {
  itemName:string, itemStr:number,itemPrice:number
}

export type armorActionType = {
  success:string,
  error:string
}