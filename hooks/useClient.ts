import { APIRes, IRoom } from "../types"
import axios from 'axios'

const URI: string = "http://4a921379a9cd.ngrok.io/api"


function getInfo<T>(res: APIRes): T | void  {
    if (res.success) {
        console.log("Success !")
        if (res.data) return res.data as T
        return
    } 
}

export default function useClient() {
    return {
        getRoom : async (_id: string): Promise<IRoom | void> => {
            const res: APIRes = (await axios.get(`${URI}/rooms/${_id}`)).data
            return getInfo<IRoom>(res);
        }
    }
}