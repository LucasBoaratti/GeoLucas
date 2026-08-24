import { Route, Routes } from "react-router-dom";
import { Index } from "../Pages/Index";
import { Home } from "../Pages/Home/Home";

export function Rotas() {
    // Rotas do site
    return (
        <Routes>
            <Route path="/" element={<Index/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    );
}