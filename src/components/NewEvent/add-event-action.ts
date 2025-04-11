export type AddEventActionState = {
    errorMessage:null | string;
    successMessage:null | string;
}
export default async function addEventAction(prevState:AddEventActionState, formData:FormData):Promise<AddEventActionState> {
    console.log(formData)
    return {
        errorMessage: null,
        successMessage: null
    }
}