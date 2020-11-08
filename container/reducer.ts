import { IRoom } from "../types";
import { IAction, IAppState } from "./types";

export default function reducer(state: IAppState, action: IAction): IAppState {
    switch(action.type) {
        case "GET_ROOM":
            const room = action.payload as IRoom
            return {...state, room}
        default:
            return state
    }
}