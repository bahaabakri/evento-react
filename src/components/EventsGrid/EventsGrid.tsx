import { EventModel } from '@/types/events.type'
import styles from './EventsGrid.module.scss'
import EventCard from '../EventCard/EventCard'
import EventTitle from '../EventTitle/EventTitle'
interface EventsGridProps {
    sectionName:string,
    sectionSlug:string
    events:EventModel[],
}
const EventsGrid = ({events, sectionSlug, sectionName}: EventsGridProps) => {
    return (
        <div className={styles['events-wrapper']}>
        <EventTitle sectionName={sectionName} children={undefined} />
        <ul className={styles['events']}>
            {
                    events.map((event) =>  {
                        return (<div key={event.id} className={styles['event-card']}>
                            <EventCard event={event} sectionSlug={sectionSlug} />
                        </div>) 
                    }
                )
            }
        </ul>
        </div>
    )
}
export default EventsGrid