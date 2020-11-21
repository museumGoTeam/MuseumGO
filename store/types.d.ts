import { IPOI, IRoom } from "../types";

export interface IAppState {
  poiSelected: IPOI | undefined;
  roomLocated: IRoom | undefined;
}
