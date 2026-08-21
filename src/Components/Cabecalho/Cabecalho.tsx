import styles from "./Cabecalho.module.scss";
import { BarraNavegacao } from "../BarraNavegacao/BarraNavegacao";
import { LogoMarca } from "../LogoMarca/LogoMarca";

export function Cabecalho() {
    return (
        <header className={styles.containerCabecalho}>
            <LogoMarca corTexto="preto"/>
            <BarraNavegacao/>
        </header>
    );
}