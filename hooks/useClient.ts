import Message from "../atomic/atoms/Snackbar"
import axios, { AxiosError } from 'axios'
import { APIRes, IMap, IPOI, IRoom, ItineraryPos, TEntityNumber } from "../types"



const ROOT_URI: string = "http://192.168.1.31:5000"
const API_URI: string = `${ROOT_URI}/api`


function getInfo<T>(res: APIRes<T>): T | undefined  {
    if (res.success) {
        Message.success(res.message)
        if (res.data) return res.data as T
    }
    Message.error(res.message)
}

export default function useClient() {
    return {
        checkCon: async (): Promise<boolean> => {
            try {
                await axios.get(`${ROOT_URI}/`, {timeout: 5000})
                return true
            } catch (e) {
                const error: AxiosError = e
                Message.error(`Check your connectivity: ${error.message}`, true)
                return false
            }
        },
        getRoom : async (_id: string): Promise<IRoom | undefined> => {
            const res = (await axios.get<APIRes<IRoom>>(`${API_URI}/rooms/${_id}`)).data
            return getInfo<IRoom>(res);
        },
        getPois: async (): Promise<IPOI[] | undefined> => {
            const res = (await axios.get<APIRes<IPOI[]>>(`${API_URI}/poi`)).data
            return res.data
        },
        getItinerary: async (itineraryPos: ItineraryPos): Promise<TEntityNumber[][]> => {
            const res = (await axios.post<TEntityNumber[][]>(`http://192.168.1.31:5000/api/map/itinerary`, itineraryPos)).data
            return res
        }
    }
}