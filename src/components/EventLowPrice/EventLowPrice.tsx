import lowPriceEvents from "@/data/events/low-price-events";
import EventsHorizontal from "../EventsHorizontal/EventsHorizontal"
interface EventLowPriceProps {
    edge: number,
    currency: string
}
const EventLowPrice = ({edge, currency}: EventLowPriceProps) => {
    return (

        <EventsHorizontal
            events={lowPriceEvents}
            sectionName={`Events less than ${currency} ${edge}`}
            isAnimateInView={false}
            sectionSlug={'low-price-events'}
        />
    );
};
export default EventLowPrice