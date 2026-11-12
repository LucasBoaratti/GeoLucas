import styles from "./Funcoes.module.scss";
import { conteudoModulos } from "../../Models/Modulos.model";
import { Introducao } from "../../Components/Introducao/Introducao";
import { InputFuncoes } from "../../Components/Funcoes/InputFuncoes/InputFuncoes";

export function Funcoes() {
    const modulo = conteudoModulos.find((funcao: { id: number; }) => funcao.id === 1);

    // Se não existir módulo, não retorna nada
    if (!modulo) {
        return null;
    }
    
    return (
        <main>
            <Introducao/>

            <div className={styles.conteudoFuncoes}>
                <InputFuncoes/>
            </div>
            {/* <div 
                ref={boxRef} 
                className="jxgbox"
                style={{ width: '640px ', height: '460px' }}
            ></div> */}
        </main>
    );
}