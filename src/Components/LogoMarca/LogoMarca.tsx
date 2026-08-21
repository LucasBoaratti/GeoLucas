import Logo from "../../assets/Images/Logo_GeoLucas.png";
import styles from "./LogoMarca.module.scss";

export function LogoMarca() {
    return (
        <section className={styles.cabecalho}>
            <img src={Logo} alt="Calculadora com óculos e números." className={styles.logo}/>
            <h1 className={styles.tituloCabecalho}>GeoLucas</h1>
        </section>
    );
}