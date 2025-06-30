import allEvents from "@/data/events/all-events"
import EventsGrid from "@/components/EventsGrid/EventsGrid"

const EventPage = () => {
    return (
    <div className="mt-32">
        <EventsGrid
            events={allEvents}
            sectionName={`All Events`}
            sectionSlug={'low-price-events'}
        >
        </EventsGrid>
    </div>

    )
}

export default EventPage