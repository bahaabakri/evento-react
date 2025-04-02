import { useState } from "react";
import CustomTextField from '@/UI/CustomTextField/CustomTextField'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import styles from './NewEvent.module.scss'
import dayjs, { Dayjs } from "dayjs";
const NewEvent = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    return (
        <div className={styles['new-event-wrapper']}>
            <div className={styles['new-event']}>
                <h1 className={styles['new-event-title']}>Add New Event</h1>
                <form className={styles['new-event-form']}>
                    <div className={`${styles['event-name-wrapper']} ${styles['event-form-item']}`}>
                        <label>Name:</label>
                        <CustomTextField placeholder='Enter Event Name' ></CustomTextField>
                    </div>
                    <div className={`${styles['event-location-wrapper']} ${styles['event-form-item']}`}>
                        <label>Location:</label>
                        <CustomTextField placeholder='Enter Event Location'></CustomTextField>
                    </div>
                    <div className={`${styles['event-desc-wrapper']} ${styles['event-form-item']}`}>
                        <label>Description:</label>
                        <CustomTextField placeholder='More Description' textArea={5}></CustomTextField>
                    </div>
                    <div className={`${styles['event-date-time-wrapper']} ${styles['event-form-item']}`}>
                        <label>Event Date:</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="Select Date & Time"
                                value={selectedDate}
                                onChange={(newValue) => setSelectedDate(newValue)}
                            />
                            </LocalizationProvider>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewEvent