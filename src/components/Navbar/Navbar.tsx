import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo'
import navMenuItems from './navbar-menu-items'
import NavMenuItem from './NavMenuItem'
import MobileNav from './MobileNavbar'
const Navbar = () => {

    return (
        <div className={styles['main-navbar']}>
            <div className={styles['navbar-container']}>
                <Logo />
                {/* Large Screen Navbar*/}
                <div className='hidden md:block'>
                    <ul className={styles['menu']}>
                        {
                            navMenuItems.map(navMenuItem => 
                                <NavMenuItem {...navMenuItem}/>
                            )
                        }
                    </ul>
                </div>
                {/* Mobile Screen Navbar*/}
                <div className='block md:hidden'>
                    <MobileNav />
                </div>


            </div>


        </div>
    )
}

export default Navbar