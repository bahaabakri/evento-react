import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const MainLayout = () => {

    return (
        <>
            {/* <h2>Main Layout</h2> */}
            <Navbar />
            <Outlet></Outlet>
        </>
        
    )
}
export default MainLayout