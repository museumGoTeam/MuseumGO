import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./types";
import { IPOI, IRoom, TEntityNumber } from "../types";
import Message from "../atomic/atoms/Snackbar";



const initialState: IAppState = {
  connected: false,
  poiSelected: undefined,
  roomLocated: undefined,
};

const slice = createSlice({
  name: "museumgo-slice",
  initialState: initialState,
  reducers: {
    onInit(state) {
      state.connected = true
    },
    onLocateRoom(state, action: PayloadAction<IRoom>) {
        const room = action.payload
        Message.info(`You are in the room : ${room.label}`)
        state.roomLocated = room
    },
    onSelectPoi(state, action: PayloadAction<IPOI>) {
        const poi = action.payload
        state.poiSelected = poi
    },
  },
});

export const {onInit, onLocateRoom, onSelectPoi} = slice.actions

export default slice.reducer
