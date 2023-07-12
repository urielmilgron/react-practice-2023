import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./components/Products/Products"
import ElementsPageContainer from "./components/ElementsPageContainer/ElementsPageContainer"

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index path="/:categoryId" element={<ElementsPageContainer />} />
                <Route path="/:categoryId" element={<ElementsPageContainer />} />
                <Route path="/:categoryId" element={<ElementsPageContainer />} />
            </Routes>
        </BrowserRouter>
    )
}