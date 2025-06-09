import EventDetails from "@/components/EventDetails/EventDetails";
import allEvents from "@/data/events/all-events";
import { EventModel } from "@/types/events.type";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
    const params = useParams()
    console.log(params.eventId);
    const selectedEvent: EventModel | undefined = allEvents.find(el => el.id === Number(params.eventId))
    
    return (
        <>
            {
                selectedEvent && <EventDetails event={selectedEvent}  />
            }
        </>
    );
};

export default EventDetailsPage;