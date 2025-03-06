import { motion } from "framer-motion"
import styles from './Button.module.scss'
import { ReactElement } from "react"
interface ButtonProps {
    children: ReactElement
}
const Button = ({children}: ButtonProps) => {
    return (
        <div className={styles['button-wrapper']}>
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <button>
                {children}
            </button>
        </motion.div>
    </div>
    )
}
export default Button