import { useEffect, useState } from "react";

const Formulario = props => {
    
    const [receita, setReceita] = useState({});
    const [prevFormData, setPrevFormData] = useState([]);
    
    useEffect(()=>{
        const data = localStorage.getItem('receita') ? JSON.parse(localStorage.getItem('receita')):[];
        setPrevFormData(data)
    },[])

    const handleSubmit = e =>{
        e.preventDefault();

        const receitaData = receita;

        if(!('lactose' in receita)){
            receitaData.lactose = false;
        }
        if(!('gluten' in receita)){
            receitaData.gluten = false;
        }
        localStorage.setItem('receita', JSON.stringify([...prevFormData,receitaData]));
       
    }
    
    const handleChange = e => {
        setReceita({
            ...receita,
            [e.target.name]: e.target.value
        })
    }
    
    const handleLactose = e =>{
        setReceita({
            ...receita,
            lactose: e.target.checked ? true : false
        })
    }
    const handleGluten = e =>{
        setReceita({
            ...receita,
            gluten: e.target.checked? true : false
        })
    }
    const handleCancel = () => {
        props.updateAberto(false);
    }

    return (
        <form className="formulario" onSubmit={e => handleSubmit(e)}>
            <h2>Adicionar receita</h2>
            <div>
                <label>
                    Nome:
                    <input type="text" name="nome" onChange={e => handleChange(e)} value={receita.nome} required></input>
                </label>
            </div>
            <div>

                <label>
                    Ingredientes:
                    <textarea name="ingredientes" onChange={e => handleChange(e)} value={receita.ingredientes} required>
                    </textarea>
                </label>
            </div>
            <div>

                <label>
                    Modo de preparo:
                    <textarea name="preparo" onChange={e => handleChange(e)} value={receita.preparo} required>
                    </textarea>
                </label>
            </div>
            <div>
                <div className="restricoes">
                    <h3>Restrições</h3>
                    <label>
                        Lactose
                        <input type="checkbox" name="lactose" onChange={e => handleLactose(e)} value={receita.lactose}></input>
                    </label>
                    <label>
                        Glúten
                        <input type="checkbox" name="gluten" onChange={e => handleGluten(e)} value={receita.gluten}></input>
                    </label>
                </div>
            </div>

            <button type="submit" className="btn">
                Adicionar
            </button>
            <button className="btn" onClick={() => {handleCancel()}}>
                Cancelar
            </button>
        </form>
    )
}
export default Formulario;