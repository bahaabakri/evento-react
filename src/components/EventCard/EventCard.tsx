
import Button from '@/UI/Button/Button'
import styles from './EventCard.module.scss'
import { EventModel } from '@/data/events/events.model'
import EventTimeToLeft from '../EventTimeToLeft/EventTimeToLeft'
import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { transformIsoDateToReadable } from '@/utils/date';
import { Link } from 'react-router-dom';
interface EventCardProps {
    event: EventModel,
    sectionSlug:string
}
const EventCard = ({event, sectionSlug}: EventCardProps) => {
    return (
        <Link to={`events/${event.id.toString()}`}>
            <div className={styles['event-card']}>
                <div className={styles['event-card-content-img']}>
                    <div className={styles['event-card-img']}>
                        <img src={event.image} alt={event.title} draggable={false} />
                    </div>
                    <div className={styles['event-card-content']}>
                        <div className={styles['event-card-title']}>
                            {event.title}
                        </div>
                        {sectionSlug === 'upcoming-events' &&
                            <EventTimeToLeft isoDate={event.date} />
                        }
                        <div className={styles['event-card-date']}>
                            <div>
                                <DateRangeIcon sx={{color: 'var(--primary-color)'}} />
                            </div>
                            <div>
                                {transformIsoDateToReadable(event.date)}
                            </div>
                            
                        </div>
                        <div className={styles['event-card-place']}>
                            <div>
                                <PlaceIcon sx={{color: 'var(--primary-color)'}} />
                            </div>
                            <div>
                                {event.place}
                            </div>
                        </div>
                        <div className={styles['event-card-desc']}>
                            {event.description}
                        </div>

                    </div>
                </div>
                <Button>
                    <div>Join</div>
                </Button>


            </div>
        
        </Link>
    )
}
export default EventCard