import { NavLink } from 'react-router-dom'
import type {NavMenuItem} from './navbar-menu-items'
import styles from './NavMenuItem.module.scss' 
import { motion } from 'motion/react'
const NavMenuItem = ({path, title}: NavMenuItem) => {
    return(
    <motion.li 
    className={styles['menu-item']}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    >
        <NavLink to={path} className={({isActive}) => isActive ? styles['active'] : undefined}>
            {title}
        </NavLink>
    </motion.li>)
}

export default NavMenuItem