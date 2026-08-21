import { Route, Routes } from "react-router-dom";
import { Index } from "../Pages/Index";

export function Rotas() {
    // Rotas do site
    return (
        <Routes>
            <Route index element={<Index/>}>
                
            </Route>
        </Routes>
    );
}