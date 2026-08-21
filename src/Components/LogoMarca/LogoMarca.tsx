import Logo from "../../assets/Images/Logo_GeoLucas.png";
import styles from "./LogoMarca.module.scss";

interface LogoProps {
    corTexto?: "preto" | "branco";
}

export function LogoMarca({ corTexto = "preto" }: LogoProps) {
    return (
        <section className={`${styles.logoMarca} ${styles[corTexto]}`}>
            <img src={Logo} alt="Calculadora com óculos e números." className={styles.logo}/>
            <h1 className={styles.tituloCabecalho}>GeoLucas</h1>
        </section>
    );
}