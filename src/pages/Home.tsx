import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'
import Hero from '../components/Hero/Hero'
import TopTrendingEvents from '@/components/TopTrendingEvents/TopTrendingEvents'
const HomePage = () => {
    return (
        <>
            <Hero />
            <UpcomingEvents />
            <TopTrendingEvents />
        </>
    )
}

export default HomePage