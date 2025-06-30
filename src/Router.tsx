import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Home from "./pages/Home"
import EventDetailsPage from "./pages/Events/EventDetails"
import NewEventPage from "./pages/Events/NewEvent"
import AuthPage from "./pages/Auth/Auth"
import AuthOtpPage from "./pages/AuthOtp/AuthOtp"
import LogoutPage from "./pages/Logout/Logut"
import EventPage from "./pages/Events/Event"

const MainRouterProvider = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} /> {/* Default child route */}
            <Route path="about-us" element={<About />} />
            <Route path="events">
                <Route path="" element={<EventPage/>} />
                <Route path=":eventId" element={<EventDetailsPage />} />
            </Route>
            <Route path="new-event" element={<NewEventPage />} />
            <Route path="auth" element={<AuthPage />} />

            <Route path="auth" element={<AuthPage />} />
            <Route path="auth/otp" element={<AuthOtpPage />} />
            <Route path="logout" element={<LogoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )

}

export default MainRouterProvider