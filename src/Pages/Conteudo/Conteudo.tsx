import { useNavigate, useParams } from "react-router-dom";
import { conteudos } from "../../Models/Conteudos.model";
import styles from "./Conteudo.module.scss";

export function Conteudo() {
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();

    const conteudoAtual = conteudos.find((item) => item.rota === slug);

    if (!conteudoAtual) {
        return (
            <section>
                <h2 className={styles.conteudoNaoDisponivel}>Esse conteúdo não está disponível ainda...</h2>
                <div className={styles.botao}>
                    <button type="button" onClick={() => navigate("/")} className={styles.botaoErro}>Voltar para a página inicial</button>
                </div>
            </section>
        );
    }

    return (
        <main>

        </main>
    );
}