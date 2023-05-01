import inf from "../../assets/informacao.png";
import imgLactose from "../../assets/lactose.png";
import imgGluten from "../../assets/gluten.png";

const ItemLista = props => {

    const { receita } = props;

    const handleForm = () => {
        props.updateAberto(true);
    };
    const selectReceita = receita => {
        localStorage.setItem('receitaSelecionada', JSON.stringify(receita));
    };

    return (
        <div>
            <div className="itemLista">
                <p className="tituloReceita">{receita.nome}</p>
                <button className="btn" onClick={() => { selectReceita(receita); handleForm() }}>
                    <img className="img-inf" src={inf} alt="Botão de Informações"/>
                </button>
                {receita.lactose ? <img className="simbolos" src={imgLactose} /> : ''}
                {receita.gluten ? <img className="simbolos" src={imgGluten} /> : ''}
                <br />
            </div>
        </div>
    );
};

export default ItemLista;