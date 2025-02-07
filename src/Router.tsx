import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Home from "./pages/Home"

const MainRouterProvider = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} /> {/* Default child route */}
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )

}

export default MainRouterProvider