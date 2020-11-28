import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./types";
import { IPOI, IRoom } from "../types";
import Message from "../atomic/atoms/Snackbar";



const initialState: IAppState = {
  poiSelected: undefined,
  roomLocated: undefined,
};

const slice = createSlice({
  name: "museumgo-slice",
  initialState: initialState,
  reducers: {
    onLocateRoom(state, action: PayloadAction<IRoom>) {
        const room = action.payload
        Message.info(`You are in the room : ${room.label}`)
        state.roomLocated = room
    },
    onSelectPoi(state, action: PayloadAction<IPOI>) {
        const poi = action.payload
        state.poiSelected = poi
    }
  },
});

export const {onLocateRoom, onSelectPoi} = slice.actions

export default slice.reducer
