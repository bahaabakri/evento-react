
import CustomTextField from '@/UI/CustomTextField/CustomTextField'

import styles from './NewEvent.module.scss'
import CustomDateTimePicker from '@/UI/CustomDateTimePicker/CustomDateTimePicker'
import ImagePicker from '@/UI/ImagePicker/ImagePicker'
import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useActionState, useCallback, useState } from 'react';
import addEventAction from './add-event-action';
import Button from '@/UI/Button/Button';
import Alert from '@mui/material/Alert';
import dayjs from 'dayjs';
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
    date: yup
    .string()
    .required('Start date is required')
    .test('is-valid-date', 'Invalid date format', (value) => {
      return value ? dayjs(value).isValid() : false;
    }),
    images: yup.array()
    
})
const NewEvent = () => {

    const [imageError, setImageError] = useState<string>()
    const {
        control,
        // setValue,
        formState: {isValid}
    } = useForm({
        defaultValues: {
            name: '',
            location: '',
            description: '',
            date: dayjs().toISOString(),
            images: []
        },
        mode: "onBlur",
        resolver: yupResolver(addEventFormValidationSchema)
    })
    // console.log(watch("date"))
    const [addEventFormState, addEventFormAction , isPending] = useActionState(
        addEventAction,
        {
            errorMessage:null,
            successMessage:null
        } 
    )
    const handleOnChangePicker = useCallback((files:File[]) => {
        // once change in image picker please check error message
        checkImagesValidation(files)
    }, [])

    const checkImagesValidation = (files:File[]) => {
        setImageError(() => {
            if(files.length <= 0) return 'Please upload at least one image';
            if(!files.every(el => el.type.startsWith('image/'))) return 'Only image files are allowed'
        })
    }
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
                                <Controller 
                                    control={control}
                                    name='name'
                                    render={({field, fieldState}) => (
                                        <CustomTextField
                                        {...field}
                                        placeholder='Enter Event Name'
                                        errorMessage={(fieldState.isTouched && fieldState.error) ? fieldState.error.message: ''}
                                        />
                                    )}
                                />
                                
                            </div>
                            <div className={`${styles['event-location-wrapper']} ${styles['event-form-item']}`}>
                                <label>Location:</label>
                                <Controller 
                                    name='location'
                                    control={control}
                                    render={({field, fieldState}) => (
                                        <CustomTextField
                                        {...field}
                                        placeholder='Enter Event Location'
                                        errorMessage={(fieldState.isTouched && fieldState.error) ? fieldState.error.message: ''}
                                        
                                    />
                                    )}
                                
                                />

                            </div>
                            <div className={`${styles['event-desc-wrapper']} ${styles['event-form-item']}`}>
                                <label>Description:</label>
                                <Controller 
                                    name='description'
                                    control={control}
                                    render={({field, fieldState}) => (
                                        <CustomTextField
                                        {...field}
                                        placeholder='Enter Event Description'
                                        textArea={3}
                                        errorMessage={(fieldState.isTouched && fieldState.error) ? fieldState.error.message: ''}  
                                    />
                                    )}
                                
                                />
                            </div>
                        </div>
                        <div className={styles['side-wrapper']}>

                            <div className={`${styles['event-date-time-wrapper']} ${styles['event-form-item']}`}>
                                <label>Event Date:</label>
                                <Controller
                                    control={control}
                                    name="date"
                                    render={({ field, fieldState }) => (
                                        <CustomDateTimePicker
                                        {...field}
                                        errorMessage={(fieldState.isTouched && fieldState.error) ? fieldState.error.message: ''} 
                                        />
                                    )}
                                />
                            </div>
                            <div className={`${styles['event-img-wrapper']} ${styles['event-form-item']}`}>
                                <label>Images:</label>
                                <Controller
                                    control={control}
                                    name="images"
                                    render={({ field }) => (
                                        <ImagePicker
                                        {...field}
                                        onChange={handleOnChangePicker}
                                        errorMessage={imageError} 
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles['submit-btn-wrapper']}>
                        <Button isPending={isPending} disabled={!isValid || isPending || !!imageError}>
                            <div>Submit</div>
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewEvent