import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'
import Hero from '../components/Hero/Hero'
import TopTrendingEvents from '@/components/TopTrendingEvents/TopTrendingEvents'
import EventLowPrice from '@/components/EventLowPrice/EventLowPrice'
import MoreEvents from '@/components/MoreEvents/MoreEvents'
const HomePage = () => {
    return (
        <>
            <Hero />
            <UpcomingEvents />
            <TopTrendingEvents />
            <EventLowPrice edge={100} currency={'AED'}/>
            <MoreEvents />
        </>
    )
}

export default HomePage