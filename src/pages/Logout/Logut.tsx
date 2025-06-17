import useAuth from "@/hooks/useAuth";
import { removeAuthToken } from "@/services/auth-cookie"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const LogoutPage = () => {
    // call use Auth hook to recheck the authentication state
    useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        removeAuthToken()
        navigate('/')
    }, [])
    return <></>
}
export default LogoutPage