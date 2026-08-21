import { Cabecalho } from "../Components/Cabecalho/Cabecalho";
import { Outlet } from "react-router-dom";
import { Rodape } from "../Components/Rodape/Rodape";

export function Index() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            <Cabecalho/>
            <div style={{ flex: "1" }}>
                <Outlet/>
            </div>
            <Rodape/>
        </div>
    );
}