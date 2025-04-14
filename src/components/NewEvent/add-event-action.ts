import dayjs from "dayjs";

export type AddEventActionState = {
    errorMessage:null | string;
    successMessage:null | string;
}
export default async function addEventAction(prevState:AddEventActionState, formData:FormData):Promise<AddEventActionState> {
    const formDataObj:Partial<{date:string}> = Object.fromEntries(formData)
    // console.log(formDataObj)
    const data = {
        ...formDataObj,
        date: dayjs(formDataObj.date).toISOString()
    }
    console.log(data)
    return {
        errorMessage: null,
        successMessage: null
    }
}