import { User } from "@/types/user.type"
import api from "@/utils/api"
import { useEffect, useState } from "react"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>()
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        checkIsAuthenticated()
    }, [])

    const checkIsAuthenticated = async() => {
        try {
            const {user} = await api.get<{user:User}>('users/me',{ withCredentials: true })
            if (user) {
                setIsAuthenticated(true)
                setUser(user)
            } else {
                setIsAuthenticated(false)
                setUser(null)
            }
        } catch(err) {
            console.log(err)
        }
    }
    return {isAuthenticated, user}
}
export default useAuth