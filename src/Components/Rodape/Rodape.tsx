import { LogoMarca } from "../LogoMarca/LogoMarca";
import styles from "./Rodape.module.scss";

export function Rodape() {
    return (
        <footer className={styles.containerRodape}>
            <LogoMarca corTexto="branco"/>
            <p className={styles.mensagem}>Matemática visual, simplificada e acessível para todos os níveis de ensino.</p>
            <p className={styles.direitos}>GeoLucas, 2026.</p>
        </footer>
    );
}