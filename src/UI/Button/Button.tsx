import { motion } from "framer-motion"
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, ReactElement } from "react"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactElement;
    isPending: boolean
}
const Button = ({children, isPending, ...buttonProps}: ButtonProps) => {
    return (
        <div className={styles['button-wrapper']}>
        
        <motion.div
        {...(!buttonProps.disabled && {
            whileHover:{scale: 1.2 },
            whileTap:{scale: 0.8 }
        })}

        >
            <button {...buttonProps}>
                {isPending && <div className="spinner"></div>}
                {children}
            </button>
        </motion.div>
    </div>
    )
}
export default Button