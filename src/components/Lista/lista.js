import { useEffect, useState } from "react";
import ItemLista from "./itemLista";

const Lista = props =>{
   const receitas= JSON.parse(localStorage.getItem('receita'))
       
    return(
        <div>
            <h2>Receitas cadastradas: </h2>
            <div>
             {receitas && receitas.map(receita=> <ItemLista receita={receita} key={receita.nome} updateAberto={props.updateAberto} /> )}
                </div>
        </div>
    )
}
export default Lista;