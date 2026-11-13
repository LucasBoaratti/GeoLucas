import styles from "./Funcoes.module.scss";
import { Introducao } from "../../Components/Introducao/Introducao";
import { InputFuncoes } from "../../Components/Funcoes/InputFuncoes/InputFuncoes";
import { GraficoFuncao } from "../../Components/Funcoes/GraficoFuncao/GraficoFuncao";
import { useState } from "react";

export function Funcoes() {
    const [funcoesSelecionadas, setFuncoesSelecionadas] = useState<TipoFuncao[]>([]);
    
    return (
        <main>
            <Introducao/>

            <div className={styles.conteudoFuncoes}>
                <InputFuncoes/>
                <GraficoFuncao/>
            </div>
        </main>
    );
}