import { useEffect, useState } from "react";

const Formulario = props => {
    
    const [receita, setReceita] = useState({});
    const [form, setForm] = useState([]);
    const [receitaParaAlterar, setReceitaParaAlterar] = useState();
    
    
    useEffect(()=>{
       const receitaParaAlterar = JSON.parse(localStorage.getItem('receitaSelecionada'));
        
        if(receitaParaAlterar){
            setReceita(receitaParaAlterar)
            setReceitaParaAlterar(receitaParaAlterar)
            setForm(receitaParaAlterar) 
        }else{
            const data = localStorage.getItem('receita') ? JSON.parse(localStorage.getItem('receita')):[];
            setForm(data)
        }
    },[])

   

    const handleSubmit = e =>{
        e.preventDefault();        
        
        
        let array = [];
        
        const receitaData = receita;

        if(!('lactose' in receita)){
            receitaData.lactose = false;
        }else{receitaData.lactose = true}
        if(!('gluten' in receita)){
            receitaData.gluten = false;
        }else{
            receitaData.gluten = true
        }
        array= [...form, receitaData];
        
        localStorage.removeItem('receitaSelecionada');
        localStorage.setItem('receita', JSON.stringify(array));
        props.updateAberto(false);
        
       
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
                    <input type="text" name="nome" onChange={e => handleChange(e)} value={receita.nome} required/>
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
                {receitaParaAlterar? "Atualizar": "Adicionar"}
            </button>
            <button className="btn" onClick={() => {handleCancel()}}>
                Cancelar
            </button>
        </form>
    )
}
export default Formulario;