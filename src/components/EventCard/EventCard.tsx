
import Button from '@/UI/Button/Button'
import styles from './EventCard.module.scss'

const EventCard = () => {
    return (
        <div className={styles['event-card']}>
            <div className={styles['event-card-content']}>
                <div className={styles['event-card-img']}>
                    <img src="/hero/hero-img1.webp" alt="sdfgsdg" />
                </div>
                <div className={styles['event-card-title']}>
                    This is the Event
                </div>
                <div className={styles['event-card-desc']}>
                    Lorem ipsum dolor sit amet consectetur....
                </div>
            </div>
            <Button title='Join'/>


        </div>
    )
}
export default EventCard