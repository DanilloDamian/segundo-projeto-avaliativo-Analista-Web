import { useEffect, useState } from "react";
import ItemLista from "./ItemLista";
import './Lista.css';


const Lista = props => {

    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        setReceitas(props.receitas);
    });

    return (
        <div className="lista">
            <h1 className="tituloLista">Receitas cadastradas: </h1>
            <div className="items">
                {receitas && receitas.map(receita => <ItemLista receita={receita} key={receita.nome} updateAberto={props.updateAberto} />)}
            </div>
        </div>
    );
};

export default Lista;