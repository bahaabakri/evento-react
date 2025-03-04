import { motion } from 'motion/react'
import EventCard from '../EventCard/EventCard'
import styles from './UpcomingEvents.module.scss'
import { useEffect, useRef, useState } from 'react'
const UpcomingEvents = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxDrag, setMaxDrag] = useState(0);
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
        <div className={styles['upcoming-events-wrapper']}>
            <div className={styles['upcoming-events-title']}>
                Upcoming Events
            </div>
            <motion.div 
                className="overflow-hidden" 
                ref={containerRef}
                >
                <motion.div 
                ref={contentRef} 
                className={styles['upcoming-events']} 
                drag="x" 
                dragConstraints={{ left: maxDrag, right: 0 }}
                animate={{ x: [0, maxDrag] }}
                transition={{ ease: "easeInOut", duration: 2, repeat: Infinity}}
                >
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </motion.div>

            </motion.div>
        </div>
    )
}
export default UpcomingEvents