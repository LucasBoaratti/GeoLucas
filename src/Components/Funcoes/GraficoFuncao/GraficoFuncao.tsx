import styles from "./GraficoFuncao.module.scss";
import JXG from "jsxgraph";
import "../../../../node_modules/jsxgraph/distrib/jsxgraph.css";
import { useEffect, useRef } from "react";
import type { TipoFuncao, GraficoFuncoesProps } from "../InputFuncoes/InputFuncoes";

export function GraficoFuncao({ funcoesSelecionadas, coeficientes }: GraficoFuncoesProps) {
    // Criando uma ref para referenciar o gráfico na div
    const boxRef = useRef<HTMLDivElement>(null);

    // Função para escolher uma função, de acordo com a escolha do usuário, e exibir no gráfico
    function calcularFuncaoEscolhida(funcao: TipoFuncao, x: number) {
        const { a, b, c } = coeficientes[funcao];

        switch (funcao) {
            case "linear":
                return a * x + b;
            case "quadratica":
                return a * x**2 + b * x + c;
            case "modular":
                return a * Math.abs(x - b) + c;
            case "exponencial":
                return a * Math.pow(b, x) + c;
            case "logaritmica":
                return a * (Math.log(x) / Math.log(b)) + c;

        }
    }

    useEffect(() => {
        // Se não existir o gráfico, nada é criado
        if (!boxRef.current) {
            return;
        }

        // Criando o gráfico
        const board = JXG.JSXGraph.initBoard(boxRef.current, {
            boundingBox: [-10, 10, 10, -10],
            keepAspectRatio: true,
            axis: true,
            showCopyright: false,
            showNavigation: true,
        });

        // Criando um gráfico para cada função escolhida pelo usuário
        funcoesSelecionadas.forEach((funcao) => {
            board.create('functiongraph', [
                (x: number) => calcularFuncaoEscolhida(funcao, x), 
                -10, 
                10
            ]);
        });

        return (() => {
            // Desfazendo o gráfico
            JXG.JSXGraph.freeBoard(board);
        });
    }, [funcoesSelecionadas, coeficientes]);
    
    return (
        <section className={styles.containerGrafico}>
            <h1 className={styles.textoVisualizacao}>Visualização no plano cartesiano</h1>
            <div
                ref={boxRef}
                className={styles.grafico}
            ></div>
        </section>
    );
}