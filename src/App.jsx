import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Products from "./components/Products"

export const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Main/>} />
            <Route path="/products" element={<Products/>}/>
        </Routes>
        </BrowserRouter>
    )
}