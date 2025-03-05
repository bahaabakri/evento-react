import { motion, useInView } from 'motion/react'
import EventCard from '../EventCard/EventCard'
import styles from './EventsHorizontal.module.scss'
import { useEffect, useRef, useState } from 'react'
import { EventModel } from '@/data/events/events.model'
interface EventsHorizontalProps {
    sectionName:string,
    events:EventModel[]
}
const EventsHorizontal = ({events, sectionName}: EventsHorizontalProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxDrag, setMaxDrag] = useState(0);
    const isInView = useInView(containerRef)
    useEffect(() => {
        const checkWidths = () => {
            if (containerRef.current && contentRef.current) {
              const containerWidth = containerRef.current.offsetWidth;
              const contentWidth = contentRef.current.scrollWidth;
              setMaxDrag(containerWidth - contentWidth); // Ensure it's negative
            }
        }
        checkWidths(); // Initial check
        window.addEventListener("resize", checkWidths);
        return () => window.removeEventListener("resize", checkWidths);
      }, []);
    return (
        <div className={styles['events-wrapper']}>
            <div className={styles['events-title']}>
                <span className={styles['events-title-first-letter']}>{sectionName.slice(0,1)}</span> 
                <span>{sectionName.slice(1)}</span> 
            </div>
            <motion.div 
                className="overflow-hidden" 
                ref={containerRef}
                >
                <motion.div 
                ref={contentRef} 
                className={styles['events']} 
                drag="x" 
                dragConstraints={{ left: maxDrag, right: 0 }}
                animate={isInView ? { x: [0, maxDrag, 0] } : { x: 0 }} // Animate only if visible
                transition={{ ease: "easeInOut", duration: 10}}
                >
                    {
                        events.map(event => <EventCard key={event.id} event={event} />)
                    }
                </motion.div>

            </motion.div>
        </div>
    )
}

export default EventsHorizontal