import { EventModel } from '@/data/events/events.model';
import styles from './EventDetails.module.scss'
import { transformIsoDateToReadable } from '@/util/date';
interface EventDetailsProps {
    event: EventModel
}
const EventDetails = ({event}:EventDetailsProps) => {
    return (
        <div className={styles['event-details-wrapper']}>
            <div className={styles['event-img']}>
                <img src={event.image} alt={event.title} draggable={false} />
            </div>
            <div className={styles['event-date-place']}>
                On {transformIsoDateToReadable(event.date)} At {event.place}
            </div>
            <div className={styles['event-title']}>
                {event.title}
            </div>
            <div className={styles['event-desc']}>
                {event.description}
            </div>
        </div>
    );
};

export default EventDetails;