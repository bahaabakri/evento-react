import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import { useDispatch } from "react-redux";
import { checkIsAuthenticated } from "@/store/authSlice";
import { useEffect } from "react";
import { AppDispatch } from "@/store/store";

const MainLayout = () => {
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const hideNavbar = location.pathname.startsWith('/auth');
    useEffect(() => {
        // check authentication in main layout
        dispatch(checkIsAuthenticated());
    }, [dispatch]);
    return (
        <>
            {/* <h2>Main Layout</h2> */}
            {!hideNavbar && <Navbar />}
            <Outlet></Outlet>
        </>
        
    )
}
export default MainLayout