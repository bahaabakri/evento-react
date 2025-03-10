import { motion, PanInfo, useAnimate, useInView } from 'motion/react'
import EventCard from '../EventCard/EventCard'
import styles from './EventsHorizontal.module.scss'
import { useEffect, useRef, useState } from 'react'
import { EventModel } from '@/data/events/events.model'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SolidIcon from '@/UI/SolidIcon/SolidIcon'
interface EventsHorizontalProps {
    sectionName:string,
    sectionSlug:string
    events:EventModel[],
    isIndexing?:boolean,
    isAnimateInView?:boolean
}
const EventsHorizontal = ({events, sectionSlug, sectionName, isIndexing = false, isAnimateInView = false}: EventsHorizontalProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    // const contentRef = useRef<HTMLDivElement>(null);
    const [maxDrag, setMaxDrag] = useState(0);
    const [offsetWidth, setOffsetWidth] = useState(0)
    const isInView = useInView(containerRef)
    const [contentRef, animate] = useAnimate()
  
    // console.log("offsetWidth", offsetWidth);
    
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
    const handleBackScroll = () => {
        setOffsetWidth((prev) => {
            const newOffset = Math.min(prev + (containerRef.current?.offsetWidth || 0), 0);
            animate(contentRef.current, { x: newOffset }, { duration: 0.5 });
            return newOffset;
        });
    };
    
    const handleForwardScroll = () => {
        setOffsetWidth((prev) => {
            const newOffset = Math.max(prev - (containerRef.current?.offsetWidth || 0), maxDrag);
            animate(contentRef.current, { x: newOffset }, { duration: 0.5 });
            return newOffset;
        });
    };
    // Track drag movement and update offsetWidth
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {        
        setOffsetWidth(prev => prev + info.offset.x);
    };
    return (
        <div className={styles['events-wrapper']}>
            <div className={styles['events-title-wrapper']}>
                <div className={styles['events-title']}>
                    <span className={styles['events-title-first-letter']}>{sectionName.slice(0,1)}</span> 
                    <span>{sectionName.slice(1)}</span> 
                </div>
                <div className={styles['events-arrows']}>
                    
                    <SolidIcon handleClick={handleBackScroll} isDisabled={offsetWidth >= 0}>
                        <ArrowBackIcon sx={{color: '#fff'}} />
                    </SolidIcon>
                    <SolidIcon handleClick={handleForwardScroll} isDisabled={offsetWidth <= maxDrag}>
                        <ArrowForwardIcon sx={{color: '#fff'}} />
                    </SolidIcon>
                </div>
            </div>
            <motion.div 
                className="overflow-hidden" 
                ref={containerRef}
                >
                <motion.div 
                ref={contentRef} 
                // className={`${styles['events']} ${isIndexing ? 'gap' : 'gap-5'}` } 
                className={styles['events']} 
                drag="x" 
                dragConstraints={{ left: maxDrag, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={(isInView && isAnimateInView) ? { x: [0, maxDrag, 0] } : { x: 0 }} // Animate only if visible
                transition={{ ease: "easeInOut", duration: 10}}
                >
                    {
                        events.map((event) =>  {
                            return (<div className={styles['event-card-wrapper']}>
                                {(isIndexing && event.order) && 
                                    (<div className={styles['indexing']}>
                                        <div>
                                            {event.order}
                                        </div>
                                    </div>)
                                }
                                <EventCard key={event.id} event={event} sectionSlug={sectionSlug} />
                            </div>) 
                        }
                    )
                    }
                </motion.div>

            </motion.div>
        </div>
    )
}

export default EventsHorizontal