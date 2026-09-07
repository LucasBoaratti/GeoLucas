import JXG from "jsxgraph";
import styles from "./Funcoes.module.scss";
import { useEffect, useRef } from "react";
import "../../../node_modules/jsxgraph/distrib/jsxgraph.css";
import { conteudoModulos } from "../../Models/Modulos.model";

export function Funcoes() {
    const boxRef = useRef<HTMLDivElement>(null);

    const modulo = conteudoModulos.find((funcao) => funcao.id === 1);

    if (!modulo) {
        return null;
    }

    useEffect(() => {
        if (!boxRef.current) return;

        // Criando o gráfico
        const board = JXG.JSXGraph.initBoard(boxRef.current, {
            boundingBox: [-10, 10, 10, -10],
            keepAspectRatio: true,
            axis: true,
            showCopyright: false,
            showNavigation: true,
        });

        return (() => {
            // Desfazendo o gráfico
            JXG.JSXGraph.freeBoard(board);
        });
    }, []);
    
    return (
        <main>
            <section className={styles.containerFuncoes}>
                <h1 className={styles.funcaoTitulo}>{modulo.titulo}</h1>
                <p className={styles.funcaoDescricao}>{modulo.descricao}</p>
            </section>
            {/* <div 
                ref={boxRef} 
                className="jxgbox"
                style={{ width: '640px ', height: '460px' }}
            ></div> */}
        </main>
    );
}