import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
const Navbar = () => {

    return (
        <div className={styles['main-navbar']}>
            <div className={styles['navbar-container']}>
                <div className={styles['logo-wrapper']}>
                    <Link  to="/">
                        Event0
                    </Link>
                </div>
                <div className={styles['menu-wrapper']}>
                    <ul className={styles['menu']}>
                        <li className={styles['menu-item']}>
                            <NavLink to="/" className={({isActive}) => isActive ? styles['active'] : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li className={styles['menu-item']}>
                            <NavLink to="/events"  className={({isActive}) => isActive ? styles['active'] : undefined}>
                                Events
                            </NavLink>
                        </li>
                        <li className={styles['menu-item']}>
                            <NavLink to="/contact-us"  className={({isActive}) => isActive ? styles['active'] : undefined}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className={styles['menu-item']}>
                            <NavLink to="/about-us"  className={({isActive}) => isActive ? styles['active'] : undefined}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </div>


        </div>
    )
}

export default Navbar