import Message from "../atomic/atoms/Snackbar"
import axios from 'axios'
import { APIRes, IRoom } from "../types"



const URI: string = "http://192.168.1.31/api"


function getInfo<T>(res: APIRes): T | void  {
    if (res.success) {
        Message.success(res.message)
        if (res.data) return res.data as T
        return
    }
    Message.error(res.message)
}

export default function useClient() {
    return {
        getRoom : async (_id: string): Promise<IRoom | void> => {
            const res: APIRes = (await axios.get(`${URI}/rooms/${_id}`)).data
            return getInfo<IRoom>(res);
        }
    }
}