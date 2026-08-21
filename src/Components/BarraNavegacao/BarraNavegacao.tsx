import styles from "./BarraNavegacao.module.scss";
import { NavLink } from "react-router-dom";

export function BarraNavegacao() {
    // Lista de rotas
    const rotas = [
        {
            nome: "Home",
            rota: "/",
        },
        {
            nome: "Conteúdos",
            rota: "/conteudos",
        },
        {
            nome: "Sobre",
            rota: "/sobre",
        },
    ];

    return (
        <nav className={styles.containerBarraNavegacao}>
            <ul className={styles.links}>
                {rotas.map((rota) => (
                    <li key={rota.rota}>
                        <NavLink
                            to={rota.rota}
                            className={({ isActive }) => isActive ? `${styles.ativo}` : styles.link}
                        >
                            {rota.nome}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}