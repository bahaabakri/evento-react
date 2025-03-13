import { ReactElement } from 'react'
import styles from './EventTitle.module.scss'
interface EventTitleProps {
    sectionName: string,
    children:ReactElement | undefined
}
const EventTitle = ({sectionName, children}: EventTitleProps) => {
    return (
        <div className={styles['events-title-wrapper']}>
            <div className={styles['events-title']}>
                <span className={styles['events-title-first-letter']}>{sectionName.slice(0,1)}</span> 
                <span>{sectionName.slice(1)}</span> 
            </div>
            {children}
        </div>
    )
}
export default EventTitle