import styles from "./Introducao.module.scss";
import { conteudoModulos } from "../../Models/Modulos.model";

export function Introducao() {
    // Busca o título e a descrição do módulo, através do ID
    const modulo = conteudoModulos.find(mod => mod.id === mod.id);

    return (
        <section className={styles.containerTitulo}>
            <h1 className={styles.titulo}>{modulo?.titulo}</h1>
            <p className={styles.descricao}>{modulo?.descricao}</p>
        </section>
    );
}