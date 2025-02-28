import { motion } from "framer-motion"
import styles from './Button.module.scss'
interface ButtonProps {
    title: string
}
const Button = ({title}: ButtonProps) => {
    return (
        <div className={styles['button-wrapper']}>
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <button>
                {title}
            </button>
        </motion.div>
    </div>
    )
}
export default Button