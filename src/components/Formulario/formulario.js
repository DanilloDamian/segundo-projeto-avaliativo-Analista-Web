import { useEffect, useState } from "react";
import "./Formulario.css";

const Formulario = props => {

    const [receita, setReceita] = useState({});
    const [form, setForm] = useState([]);
    const [receitaParaAlterar, setReceitaParaAlterar] = useState();


    useEffect(() => {
        const receitaParaAlterar = JSON.parse(localStorage.getItem('receitaSelecionada'));
        const data = localStorage.getItem('receita') ? JSON.parse(localStorage.getItem('receita')) : [];
        setForm(data);

        if (receitaParaAlterar) {
            setReceita(receitaParaAlterar)
            setReceitaParaAlterar(receitaParaAlterar)
        }
    }, [])



    const handleSubmit = e => {
        e.preventDefault();
        let array = [];
        const receitaData = receita;

        if (!('lactose' in receita)) {
            receitaData.lactose = false;
        }
        if (!('gluten' in receita)) {
            receitaData.gluten = false;
        }

        if (receitaParaAlterar) {
            const updatedReceita = form.map(receita => {
                if (JSON.stringify(receita) === JSON.stringify(receitaParaAlterar)) {
                    return receitaData;
                } else {
                    return receita
                }
            });
            array = updatedReceita;
        } else {

            array = [...form, receitaData];
        }

        localStorage.setItem('receita', JSON.stringify(array));
        localStorage.removeItem('receitaSelecionada');
        window.location.reload();
        props.updateAberto(false);
        props.handleFiltro(array);
    }

    const handleChange = e => {
        setReceita({
            ...receita,
            [e.target.name]: e.target.value
        })
    }

    const handleLactose = e => {
        setReceita({
            ...receita,
            lactose: e.target.checked ? true : false
        })
    }
    const handleGluten = e => {
        setReceita({
            ...receita,
            gluten: e.target.checked ? true : false
        })
    }
    const handleCancel = () => {
        props.updateAberto(false);
        localStorage.removeItem('receitaSelecionada');
    }

    const removeReceita = receitaParaexcluir => {
        let confirma = window.confirm("Deseja realmente excluir?");
        if (confirma) {
            const receitaIndex = form.findIndex(receita => JSON.stringify(receita) === JSON.stringify(receitaParaexcluir));
            form.splice(receitaIndex, 1);
            localStorage.setItem('receita', JSON.stringify(form));
            window.location.reload();
            props.updateAberto(false);
            localStorage.removeItem('receitaSelecionada');
            props.handleFiltro(localStorage.getItem('receita'));
        }

    }

    return (
        <form className="formulario" onSubmit={e => handleSubmit(e)}>
            <div className="divForm">
                <h2 className='tituloForm'>
                {receitaParaAlterar ? "Atualizar" : "Adicionar"} receita</h2>
            </div>
            <div className="centralForm">
                <div >
                    <label className="nomeForm">
                        Nome:
                        <input className="input" type="text" name="nome" onChange={e => handleChange(e)} value={receita.nome} required />
                    </label>
                </div>
                <div >
                    <label className="nomeForm">
                        Ingredientes:
                        <textarea className="textArea" name="ingredientes" onChange={e => handleChange(e)} value={receita.ingredientes} required>
                        </textarea>
                    </label>
                </div>
                <div >
                    <label className="nomeForm">
                        Modo de preparo:
                        <textarea className="textArea" name="preparo" onChange={e => handleChange(e)} value={receita.preparo} required>
                        </textarea>
                    </label>
                </div>
                <div className="restricoes">
                    <div className="tituloRestricoes">
                        <h3>Restrições:</h3>
                    </div>
                    <div className="divCheckbox">
                        <div className="tituloCheckbox">
                            <label>
                               Sem Lactose
                                <input className="checkbox" type="checkbox" name="lactose" onChange={e => handleLactose(e)} checked={receita.lactose} ></input>
                            </label>
                        </div>
                        <div className="tituloCheckbox">
                            <label>
                               Sem Glúten
                                <input className="checkbox" type="checkbox" name="gluten" onChange={e => handleGluten(e)} checked={receita.gluten} ></input>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divBotoes">
            <button type="submit" className="btnCLick" >
                {receitaParaAlterar ? "Atualizar" : "Adicionar"}
            </button>
            {receitaParaAlterar && <button className="btnCLick" onClick={e => { e.preventDefault(); removeReceita(receitaParaAlterar) }}>Excluir</button>}
            <button className="btnCLick" onClick={() => { handleCancel() }}>
                Cancelar
            </button>
            </div>
        </form>
    )
}
export default Formulario;