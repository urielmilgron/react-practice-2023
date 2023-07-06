import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Products from "./components/Products/Products"
import Aboutme from "./components/Aboutme/Aboutme"

export const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index path="/:categoryId" element={<ItemListContainer/>} />
            <Route path="/:categoryId" element={<Products/>}/>
            <Route path="/:categoryId" element={<Aboutme/>}/>
        </Routes>
        </BrowserRouter>
    )
}