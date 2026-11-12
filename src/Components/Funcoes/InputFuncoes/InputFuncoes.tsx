import styles from "./InputFuncoes.module.scss";
import { useState } from "react";

export function InputFuncoes() {
    // Estado para verificar se o botão está marcado
    const [linearMarcado, setLinearMarcado] = useState<boolean>(false);
    const [quadraticaMarcada, setQuadraticaMarcada] = useState<boolean>(false);
    const [modularMarcado, setModularMarcado] = useState<boolean>(false);
    const [exponencialMarcado, setExponencialMarcado] = useState<boolean>(false);
    const [logaritmicaMarcada, setLogaritmicaMarcada] = useState<boolean>(false);

    return (
        <section className={styles.containerInputFuncoes}>
            <p className={styles.topico}>1. Escolha o tipo de função</p>
            <div className={styles.categorias}>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => setLinearMarcado(!linearMarcado)}
                    // Estilização interna do botão para ver se ele foi marcado ou não
                    style={{ 
                        backgroundColor: linearMarcado ? "var(--cor-primaria)" : "#fff", 
                        border: linearMarcado ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: linearMarcado ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Linear
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => setQuadraticaMarcada(!quadraticaMarcada)} 
                    style={{
                        backgroundColor: quadraticaMarcada ? "var(--cor-primaria)" : "#fff", 
                        border: quadraticaMarcada ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: quadraticaMarcada ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Quadrática
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => setModularMarcado(!modularMarcado)}
                    style={{
                        backgroundColor: modularMarcado ? "var(--cor-primaria)" : "#fff", 
                        border: modularMarcado ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: modularMarcado ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Modular
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => setExponencialMarcado(!exponencialMarcado)}
                    style={{
                        backgroundColor: exponencialMarcado ? "var(--cor-primaria)" : "#fff", 
                        border: exponencialMarcado ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: exponencialMarcado ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Exponencial
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => setLogaritmicaMarcada(!logaritmicaMarcada)}
                    style={{
                        backgroundColor: logaritmicaMarcada ? "var(--cor-primaria)" : "#fff", 
                        border: logaritmicaMarcada ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: logaritmicaMarcada ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Logaritmica
                    </button>
            </div>
            <hr />
            <p className={styles.topico}>2. Agora, escolha os parâmentros</p>
            <div className={styles.coeficientes}>
                <div className={styles.input}>
                    <label htmlFor="coeficienteA">Coeficiente A (Quadrático)</label>
                    <input type="number" name="coeficienteA" id="coeficienteA" placeholder="Ex: 1.0" className={styles.coeficienteInput}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="coeficienteB">Coeficiente B (Linear)</label>
                    <input type="number" name="coeficienteB" id="coeficienteB" placeholder="Ex: 0.0" className={styles.coeficienteInput}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="coeficienteC">Coeficiente C (Constante)</label>
                    <input type="number" name="coeficienteC" id="coeficienteC" placeholder="Ex: -2.0" className={styles.coeficienteInput}/>
                </div>
            </div>
            <div className={styles.botaoFuncao}>
                <button type="button" className={styles.botaoPlotarFuncao}>Plotar Função</button>
            </div>
        </section>
    );
}