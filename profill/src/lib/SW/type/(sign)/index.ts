import {z} from "zod";

export type signInType = {
  message: string,
  data:{
    ID:string,
    name:string,
    race:string,
    sex:string,
  }
}

export type signUpType = {
  message: string,
  data:{
    ID:string,
    name:string,
    race:string,
    sex:string,
  }
}

export const signUpZod = z.object({
  // バリデーションkey:型.最小(最小値,エラー時の文字)
  Id:z.string().min(1, "Idを決めてください。"),
  name:z.string().min(1, "名前を決めてください。"),
  race:z.string().min(1, "種族を決めてください。"),
  sex:z.string().min(1, "性別を決めてください。"),
})