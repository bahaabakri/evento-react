
import CustomTextField from '@/UI/CustomTextField/CustomTextField'

import styles from './NewEvent.module.scss'
import CustomDateTimePicker from '@/UI/CustomDateTimePicker/CustomDateTimePicker'
import ImagePicker from '@/UI/ImagePicker/ImagePicker'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useActionState } from 'react';
import addEventAction from './add-event-action';
import Button from '@/UI/Button/Button';
import Alert from '@mui/material/Alert';
const addEventFormValidationSchema = yup.object({
    name: yup.string().required('Event name is required')
        .min(3, 'Please Type at least 3 characters')
        .max(255,'Please Type less than 255 characters')
    ,
    location: yup.string().required('Event location is required')
        .min(3, 'Please Type at least 3 characters')
        .max(255,'Please Type less than 255 characters')
    ,
    description: yup.string().required('Event description is required')
        .min(5, 'Please Type at least 5 characters')
        .max(255,'Please Type less than 255 characters')
    ,
    // date: yup
    // .date()
    // .typeError('Invalid date') // for cases where the value is not a valid Date
    // .nullable() // allows null (from clearing the DatePicker)
    // .required('Date is required'), // required field
    
})
const NewEvent = () => {

    const {
        register,
        formState: {errors, touchedFields, isValid}
    } = useForm({
        defaultValues: {
            name: '',
            location: '',
            description: '',
            // date: new Date()
        },
        mode: "onBlur",
        resolver: yupResolver(addEventFormValidationSchema)
    })

    const [addEventFormState, addEventFormAction , isPending] = useActionState(
        addEventAction,
        {
            errorMessage:null,
            successMessage:null
        } 
    )
    return (
        <div className={styles['new-event-wrapper']}>
            <div className={styles['new-event']}>
                <h1 className={styles['new-event-title']}>Add New Event</h1>
                {
                    addEventFormState && addEventFormState.errorMessage &&
                    <Alert severity="error">{addEventFormState.errorMessage}</Alert>
                }
                {
                    addEventFormState && addEventFormState.successMessage &&
                    <Alert severity="success">{addEventFormState.successMessage}</Alert>
                }
                <form action={addEventFormAction} >
                    <div className={styles['new-event-form']}>
                        <div className={styles['side-wrapper']}>
                            <div className={`${styles['event-name-wrapper']} ${styles['event-form-item']}`}>
                                <label>Name:</label>
                                <CustomTextField 
                                    placeholder='Enter Event Name'
                                    // label='Name'
                                    errorMessage={(touchedFields.name && errors.name) ? errors.name.message: ''}
                                    {...register('name')}
                                    />
                                
                            </div>
                            <div className={`${styles['event-location-wrapper']} ${styles['event-form-item']}`}>
                                <label>Location:</label>
                                <CustomTextField 
                                    placeholder='Enter Event Location'
                                    // label='Location'
                                    errorMessage={(touchedFields.location && errors.location) ? errors.location.message: ''}
                                    {...register('location')}
                                />
                            </div>
                            <div className={`${styles['event-desc-wrapper']} ${styles['event-form-item']}`}>
                                <label>Description:</label>
                                <CustomTextField 
                                    placeholder='More Description'
                                    textArea={5}
                                    // label='Description'
                                    errorMessage={(touchedFields.description && errors.description) ? errors.description.message: ''}
                                    {...register('description')}
                                
                                />
                            </div>
                        </div>
                        <div className={styles['side-wrapper']}>

                            <div className={`${styles['event-date-time-wrapper']} ${styles['event-form-item']}`}>
                                <label>Event Date:</label>
                                <CustomDateTimePicker />
                            </div>
                            <div className={`${styles['event-img-wrapper']} ${styles['event-form-item']}`}>
                                <label>Images:</label>
                                <ImagePicker />
                            </div>
                        </div>
                    </div>
                    <div className={styles['submit-btn-wrapper']}>
                        <Button isPending={isPending} disabled={!isValid || isPending}>
                            <div>Submit</div>
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewEvent