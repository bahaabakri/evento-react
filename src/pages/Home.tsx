import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'
import Hero from '../components/Hero/Hero'
import TopTrendingEvents from '@/components/TopTrendingEvents/TopTrendingEvents'
import EventLowPrice from '@/components/EventLowPrice/EventLowPrice'
const HomePage = () => {
    return (
        <>
            <Hero />
            <UpcomingEvents />
            <TopTrendingEvents />
            <EventLowPrice edge={100} currency={'AED'}/>
        </>
    )
}

export default HomePage