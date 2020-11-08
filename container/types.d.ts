import { IPOI, IRoom } from "../types"

export interface IAppState {
    room: IRoom | undefined
    poi: IPOI | undefined
}


export interface IAction {
    type: TActionType
    payload: TPayload
}


type TActionType = ""
type TPayload = ""