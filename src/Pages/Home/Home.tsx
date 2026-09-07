import styles from "./Home.module.scss";
import Banner from "../../assets/Images/Banner.png";
import { Card } from "../../Components/Cards/Card";

export function Home() {
    return (
        <main>
            <section className={styles.containerIntroducao}>
                <section className={styles.containerBoasVindas}>
                    <h1 className={styles.tituloBoasVindas}>Aprenda matemática de forma divertida!</h1>
                    <p className={styles.explicacao}>GeoLucas é uma plataforma educativa dedicada a tornar a matemática acessível, visual e profundamente interessante para todos os estudantes e universitários.</p>
                    <div className={styles.botao}>
                        <a href="#conteudos">
                            <button 
                                type="button" 
                                className={styles.botaoConteudos}
                            >
                                Explorar conteúdos
                            </button>
                        </a>
                    </div>
                </section>
                <section>
                    <img 
                        src={Banner} 
                        alt="Banner colorido com diversos materiais matemáticos" 
                        className={styles.banner}
                    />
                </section>
            </section>
            <section className={styles.containerConteudos} id="conteudos">
                <h2 className={styles.tituloConteudos}>Nossos conteúdos</h2>
                <p className={styles.explicacaoConteudos}>Escolha um conteúdo para mergulhar em explicações visuais e simulações em gráficos divertidos.</p>
                <Card/>
            </section>
        </main>
    );
}