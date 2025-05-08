import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const MainLayout = () => {
    const location = useLocation();
    const hideNavbar = location.pathname.startsWith('/auth');
    return (
        <>
            {/* <h2>Main Layout</h2> */}
            {!hideNavbar && <Navbar />}
            <Outlet></Outlet>
        </>
        
    )
}
export default MainLayout