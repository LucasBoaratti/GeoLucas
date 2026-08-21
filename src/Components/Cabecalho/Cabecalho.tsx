import Logo from "../../assets/Images/Logo_GeoLucas.png";
import styles from "./Cabecalho.module.scss";
import { BarraNavegacao } from "../BarraNavegacao/BarraNavegacao";

export function Cabecalho() {
    return (
        <header className={styles.containerCabecalho}>
            <section className={styles.cabecalho}>
                <img src={Logo} alt="Calculadora com óculos e números." className={styles.logo}/>
                <h1 className={styles.tituloCabecalho}>GeoLucas</h1>
            </section>
            <BarraNavegacao/>
        </header>
    );
}