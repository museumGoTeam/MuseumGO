import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./types";
import { IPOI, IRoom, TEntityNumber } from "../types";
import Message from "../atomic/atoms/Snackbar";



const initialState: IAppState = {
  connected: false,
  poiSelected: undefined,
  roomLocated: undefined,
  dataScanned: undefined
};

const slice = createSlice({
  name: "museumgo-slice",
  initialState: initialState,
  reducers: {
    onInit(state) {
      state.connected = true
    },
    onScan(state, action: PayloadAction<string>) {
      const data = action.payload
      state.dataScanned = data
    },
    onLocateRoom(state, action: PayloadAction<IRoom>) {
        const room = action.payload
        Message.info(`You are in the room : ${room.label}`)
        state.roomLocated = room
        state.dataScanned = room._id
        console.log("LOCATE ROOM")
    },
    onSelectPoi(state, action: PayloadAction<IPOI>) {
        const poi = action.payload
        state.poiSelected = poi
    },
    onFinish(state) {
      state.roomLocated = undefined
      state.poiSelected = undefined 
      state.dataScanned = undefined
    }
  },
});

export const {onInit, onScan, onLocateRoom, onSelectPoi, onFinish} = slice.actions

export default slice.reducer
