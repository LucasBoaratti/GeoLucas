import { Route, Routes } from "react-router-dom";
import { Index } from "../Pages/Index";
import { Home } from "../Pages/Home/Home";
import { Funcoes } from "../Pages/Funcoes/Funcoes";

export function Rotas() {
    // Rotas do site
    return (
        <Routes>
            <Route path="/" element={<Index/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/funcoes" element={<Funcoes/>}/>
            </Route>
        </Routes>
    );
}