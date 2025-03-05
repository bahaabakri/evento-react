
import Button from '@/UI/Button/Button'
import styles from './EventCard.module.scss'
import { EventModel } from '@/data/events/events.model'
import EventTimeToLeft from '../EventTimeToLeft/EventTimeToLeft'
const EventCard = ({event}: {event:EventModel}) => {
    return (
        <div className={styles['event-card']}>
            <div className={styles['event-card-content']}>
                <div className={styles['event-card-img']}>
                    <img src={event.image} alt={event.title} draggable={false} />
                </div>
                <div className={styles['event-card-title']}>
                    {event.title}
                </div>
                <EventTimeToLeft isoDate={event.date} />
                <div className={styles['event-card-desc']}>
                    {event.description}
                </div>
            </div>
            <Button title='Join'/>


        </div>
    )
}
export default EventCard