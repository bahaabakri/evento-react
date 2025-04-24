import api from "@/utils/api";
import dayjs from "dayjs";
import { EventType } from "react-hook-form";

export type AddEventActionState = {
    errorMessage:null | string;
    successMessage:null | string;
}
export default async function addEventAction(prevState:AddEventActionState, formData:FormData):Promise<AddEventActionState> {
    const formDataObj:Partial<{date:string}> = Object.fromEntries(formData)
    // console.log(formDataObj)
    const imagesIds = formData.getAll("imagesIds")
    const data = {
        ...formDataObj,
        date: dayjs(formDataObj.date).toISOString(),
        imagesIds
    }
    try {
        await api.post<EventType>('events', data)
        return {
            errorMessage: null,
            successMessage: 'Created Event Successfully'
        }
    } 
    catch(err) {
        return {
            errorMessage: 'Something went wrong',
            successMessage: null
        }
    }

}