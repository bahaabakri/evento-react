import topTrendingEvents from "@/data/events/top-trending-events"
import EventsHorizontal from "../EventsHorizontal/EventsHorizontal"
import styles from './TopTrendingEvents.module.scss'
const TopTrendingEvents = () => {
    const topTrendingEventsOrdered = topTrendingEvents.sort((a,b) => {
        if (a.order && b.order) {
            return (a.order - b.order)
        }
        return 0
    })
    return (
        <div className={styles['top-trending-wrapper']}>
            <EventsHorizontal 
            events={topTrendingEventsOrdered}
            isIndexing={true}
            sectionName={'Top Trending In Dubai'} />
        </div>

    )
}

export default TopTrendingEvents