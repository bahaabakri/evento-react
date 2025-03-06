import { ReactElement } from "react"
import styles from './SolidIcon.module.scss'
import { motion } from "motion/react"
interface SolidIconProps {
    children: ReactElement,
    handleClick?:() => void,
    isDisabled?:boolean
}
const SolidIcon = ({children, handleClick, isDisabled}: SolidIconProps) => {

    return (
        <motion.div 
        onClick={() => (!isDisabled && handleClick) && handleClick() }
        whileHover={{ scale: !isDisabled ? 1.1 : 1 }}
        whileTap={{ scale: !isDisabled ? 0.95 : 1 }}
        className={`${styles['solid-icon-wrapper']} ${isDisabled && styles['disabled']}`}>
            {children}
        </motion.div>
    )
}
export default SolidIcon