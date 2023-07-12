import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ElementsPageContainer from "./components/ElementsPageContainer/ElementsPageContainer"

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<ElementsPageContainer page={"Home"} />} />
                <Route path="/Proyects" element={<ElementsPageContainer page={"Proyects"} />} />
                <Route path="/Aboutme" element={<ElementsPageContainer page={"About me"} />} />
            </Routes>
        </BrowserRouter>
    )
}