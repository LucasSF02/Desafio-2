import Home from "./pages/home";
import Produto from "./pages/produto";
import Login from "./pages/login";

import Menu from "./components/menu";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/produto" element={<Produto />} />
            </Routes>
        </BrowserRouter>
    )
};