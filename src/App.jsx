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
            <Route index path="/main" element={<ItemListContainer/>} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/aboutme" element={<Aboutme/>}/>
        </Routes>
        </BrowserRouter>
    )
}