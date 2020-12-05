import { IPOI, IRoom, TEntityNumber } from "../types";

export interface IAppState {
  connected: boolean
  poiSelected: IPOI | undefined;
  roomLocated: IRoom | undefined;
  dataScanned: string | undefined
}
