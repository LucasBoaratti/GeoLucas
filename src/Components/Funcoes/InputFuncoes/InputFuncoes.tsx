import styles from "./InputFuncoes.module.scss";
import { useState } from "react";

export type TipoFuncao = "linear" | "quadratica" | "modular" | "exponencial" | "logaritmica";

interface Coeficientes {
    a: number,
    b: number,
    c: number,
};

// Interface para associar cada função aos seus coeficientes
export type FuncoesCoeficientes = Record<TipoFuncao, Coeficientes>;

// Interface para declarar as props que serão enviadas para o gráfico
export interface GraficoFuncoesProps {
    funcoesSelecionadas: TipoFuncao[];
    coeficientes: FuncoesCoeficientes;
}

export function InputFuncoes() {
    // Estado que irá armazenar o array das funções
    const [funcoesSelecionadas, setFuncoesSelecionadas] = useState<TipoFuncao[]>([]);

    // Estado que irá armazeanr a interface das funções e dos seus coeficientes
    const [coeficientes, setCoeficientes] = useState<FuncoesCoeficientes>({
        linear: { a: 0, b: 0, c: 0 },
        quadratica: { a: 0, b: 0, c: 0 },
        modular: { a: 0, b: 0, c: 0 },
        exponencial: { a: 0, b: 0, c: 0 },
        logaritmica: { a: 0, b: 0, c: 0 },
    });

    // Função que adiciona ou remove uma função
    function selecionarFuncao(funcao: TipoFuncao) {
        setFuncoesSelecionadas(prev => prev.includes(funcao) ? prev.filter(item => item !== funcao) : [...prev, funcao]);
    }

    // Função que atualiza os coeficientes
    function atualizarCoeficientes(funcao: TipoFuncao, campo: keyof Coeficientes, valor: number) {
        setCoeficientes(prev => ({
            ...prev,
            [funcao]: {
                ...prev,
                [campo]: valor,
            },
        }));
    }

    return (
        <section className={styles.containerInputFuncoes}>
            <p className={styles.topico}>1. Escolha o tipo de função</p>
            <div className={styles.categorias}>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => selecionarFuncao("linear")}
                    // Estilização interna do botão para ver se ele foi marcado ou não
                    style={{ 
                        backgroundColor: funcoesSelecionadas.includes("linear") ? "var(--cor-primaria)" : "#fff", 
                        border: funcoesSelecionadas.includes("linear") ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: funcoesSelecionadas.includes("linear") ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Linear
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => selecionarFuncao("quadratica")} 
                    style={{
                        backgroundColor: funcoesSelecionadas.includes("quadratica") ? "var(--cor-primaria)" : "#fff", 
                        border: funcoesSelecionadas.includes("quadratica") ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: funcoesSelecionadas.includes("quadratica") ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Quadrática
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => selecionarFuncao("modular")}
                    style={{
                        backgroundColor: funcoesSelecionadas.includes("modular") ? "var(--cor-primaria)" : "#fff", 
                        border: funcoesSelecionadas.includes("modular") ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: funcoesSelecionadas.includes("modular") ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Modular
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => selecionarFuncao("exponencial")}
                    style={{
                        backgroundColor: funcoesSelecionadas.includes("exponencial") ? "var(--cor-primaria)" : "#fff", 
                        border: funcoesSelecionadas.includes("exponencial") ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: funcoesSelecionadas.includes("exponencial") ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Exponencial
                    </button>
                <button 
                    type="button" 
                    className={styles.botao} 
                    onClick={() => selecionarFuncao("logaritmica")}
                    style={{
                        backgroundColor: funcoesSelecionadas.includes("logaritmica") ? "var(--cor-primaria)" : "#fff", 
                        border: funcoesSelecionadas.includes("logaritmica") ? "1px solid var(--cor-fonte-primaria)" : "1px solid #E2E8F0",
                        color: funcoesSelecionadas.includes("logaritmica") ? "var(--cor-fonte-primaria)" : "",
                    }}>
                        Logaritmica
                    </button>
            </div>
            <hr />
            <p className={styles.topico}>2. Agora, escolha os parâmentros</p>
            <div className={styles.coeficientes}>
                <div className={styles.input}>
                    <label htmlFor="coeficienteA">Coeficiente A</label>
                    <input 
                        type="number" 
                        name="coeficienteA" 
                        id="coeficienteA" 
                        placeholder="Ex: 1.0" 
                        className={styles.coeficienteInput}
                        value={coeficientes.quadratica.a}
                        onChange={(e) => atualizarCoeficientes("quadratica", "a", e.target.valueAsNumber)}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="coeficienteB">Coeficiente B</label>
                    <input 
                        type="number" 
                        name="coeficienteB" 
                        id="coeficienteB" 
                        placeholder="Ex: 0.0"
                        className={styles.coeficienteInput}
                        value={coeficientes.linear.b}
                        onChange={(e) => atualizarCoeficientes("linear", "b", e.target.valueAsNumber)}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="coeficienteC">Coeficiente C</label>
                    <input 
                        type="number" 
                        name="coeficienteC" 
                        id="coeficienteC" 
                        placeholder="Ex: -2.0" 
                        className={styles.coeficienteInput} 
                        onChange={(e) => setCoeficientes(prev => ({
                            ...prev,
                            c: e.target.valueAsNumber,
                        }))}/>
                </div>
            </div>
            <div className={styles.botaoFuncao}>
                <button 
                    type="button" 
                    className={styles.botaoPlotarFuncao}
                >
                    Plotar Função
                </button>
            </div>
        </section>
    );
}