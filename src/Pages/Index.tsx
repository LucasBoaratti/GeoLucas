import { Outlet } from "react-router-dom";
import { Cabecalho } from "../Components/Cabecalho/Cabecalho";

export function Index() {
    return (
        <>
            <Cabecalho/>
            <Outlet/>
        </>
    );
}