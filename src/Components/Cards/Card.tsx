import styles from "./Card.module.scss";
import { conteudos } from "../../Models/Conteudos.model";
import { useNavigate } from "react-router-dom";

export function Card() {
    const navigate = useNavigate();

    return (
        <section className={styles.containerCards}>
            {conteudos.map((conteudo, index) => (
                <div 
                    className={styles.card} 
                    key={index}
                >
                    <img 
                        src={conteudo.imagem} 
                        alt={conteudo.nome} 
                        className={styles.imagem} 
                    />
                    <div className={styles.conteudo}>
                        <h2 className={styles.nome}>{conteudo.nome}</h2>
                        <p className={styles.descricao}>{conteudo.descricao}</p>
                        <div className={styles.botao}>
                            <button 
                                type="button" 
                                className={`${styles.botaoCard} ${conteudo.id % 2 === 0 ? styles.vermelho : styles.verde}`} onClick={() => navigate(`/${conteudo.rota}`)}
                            >
                                Acessar conteúdo
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}