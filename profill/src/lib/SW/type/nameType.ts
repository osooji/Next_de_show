export type charNameType= {
  charId:number,
  charName?:string|number,
  race?:string|number,
  sex?:string|number,
  money?:string|number,
  exp?:string|number,
  skillLevel?:string|number,
  skills:
  {
    skillName?:string|number,
    skillLevel?:string|number
  }[];
}
