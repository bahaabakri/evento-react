
import CustomTextField from '@/UI/CustomTextField/CustomTextField'

import styles from './NewEvent.module.scss'
import CustomDateTimePicker from '@/UI/CustomDateTimePicker/CustomDateTimePicker'
import ImagePicker from '@/UI/ImagePicker/ImagePicker'

const NewEvent = () => {
    return (
        <div className={styles['new-event-wrapper']}>
            <div className={styles['new-event']}>
                <h1 className={styles['new-event-title']}>Add New Event</h1>
                <form className={styles['new-event-form']}>
                    <div className={styles['side-wrapper']}>
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
                    </div>
                    <div className={styles['side-wrapper']}>

                        <div className={`${styles['event-date-time-wrapper']} ${styles['event-form-item']}`}>
                            <label>Event Date:</label>
                            <CustomDateTimePicker />
                        </div>
                        <div className={`${styles['event-img-wrapper']} ${styles['event-form-item']}`}>
                            <label>Image:</label>
                            <ImagePicker />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewEvent