import EventsHorizontal from "../EventsHorizontal/EventsHorizontal";
import upcomingEvents from "@/data/events/upcoming-events";
const UpcomingEvents = () => {
  return (
    <EventsHorizontal
      events={upcomingEvents}
      sectionName={"Upcoming Events"}
      isAnimateInView={true}
    />
  );
};
export default UpcomingEvents;
