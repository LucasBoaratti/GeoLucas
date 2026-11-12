import { useRef} from "react";
import JXG from "jsxgraph";
import "../../../node_modules/jsxgraph/distrib/jsxgraph.css";

export function GraficoFuncao() {
    // Criando uma ref para atualizar o gráfico de acordo com as mudanças 
    const boxRef = useRef<HTMLDivElement>(null);

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
}