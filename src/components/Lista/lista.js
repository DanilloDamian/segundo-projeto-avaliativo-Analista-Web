import { useEffect, useState } from "react";
import ItemLista from "./itemLista";

const Lista = props =>{
    
       
    return(
        <div>
            <h2>Receitas cadastradas: </h2>
            <div>
             {props.receitas && props.receitas.map(receita=> <ItemLista receita={receita} key={receita.nome} updateAberto={props.updateAberto} /> )}
                </div>
        </div>
    )
}
export default Lista;