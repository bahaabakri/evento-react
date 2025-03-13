import allEvents from "@/data/events/all-events"
import EventGrid from "../EventsGrid/EventsGrid"

const MoreEvents = () => {
    return (
        <EventGrid
            events={allEvents}
            sectionName={`More Events`}
            sectionSlug={'low-price-events'}
        >
        </EventGrid>

    )
}
export default MoreEvents