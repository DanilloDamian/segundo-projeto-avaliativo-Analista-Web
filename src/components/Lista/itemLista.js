import { useState } from "react";
import inf from "../../assets/informacao.png"

const ItemLista = props => {
    const { receita } = props;
       
const handleForm = () =>{
    props.updateAberto(true)
        
}
const selectReceita = receita => {
    localStorage.setItem('receitaSelecionada', JSON.stringify(receita));
    
  }


    return (
        <div>
            <div className="itemLista">
                <p>{receita.nome}</p>
                <button className="btn" onClick={()=>{selectReceita(receita);handleForm()}}>
                    <img src={inf} />
                </button>
                <br />
            </div>
        </div>
    )

}
export default ItemLista;