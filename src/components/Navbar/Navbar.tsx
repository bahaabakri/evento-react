import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo'
import navMenuItems from './navbar-menu-items'
import NavMenuItem from './NavMenuItem/NavMenuItem'
import MobileNav from './MobileNavbar/MobileNavbar'
import SearchBar from './SearchBar/SearchBar'
const Navbar = () => {

    return (
        <div className={styles['main-navbar']}>
            <div className={styles['navbar-container']}>
                <Logo />
                {/* Large Screen Navbar*/}
                <div className='hidden lg:block'>
                    <ul className={styles['menu']}>
                        <li><SearchBar /></li>
                        {
                            navMenuItems.map(navMenuItem => 
                                <NavMenuItem key={navMenuItem.id} {...navMenuItem}/>
                            )
                        }
                    </ul>
                </div>
                {/* Mobile Screen Navbar*/}
                <div className='block lg:hidden'>
                    <MobileNav />
                </div>


            </div>


        </div>
    )
}

export default Navbar