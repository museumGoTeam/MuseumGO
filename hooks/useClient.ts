import Message from "../atomic/atoms/Snackbar"
import axios from 'axios'
import { APIRes, IPOI, IRoom } from "../types"



const URI: string = "http://192.168.1.31:5000/api"


function getInfo<T>(res: APIRes<T>): T | undefined  {
    if (res.success) {
        Message.success(res.message)
        if (res.data) return res.data as T
    }
    Message.error(res.message)
}

export default function useClient() {
    return {
        getRoom : async (_id: string): Promise<IRoom | undefined> => {
            const res = (await axios.get<APIRes<IRoom>>(`${URI}/rooms/${_id}`)).data
            return getInfo<IRoom>(res);
        },
        getPois: async (): Promise<IPOI[] | undefined> => {
            const res = (await axios.get<APIRes<IPOI[]>>(`${URI}/poi`)).data
            return res.data
        }
    }
}