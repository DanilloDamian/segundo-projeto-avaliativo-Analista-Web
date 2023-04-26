import inf from "../../assets/informacao.png"

const ItemLista = props => {
    const { receita } = props;

    return (
        <div>
            <div className="itemLista">
                <p>{receita.nome}</p>
                <button className="btn" >
                    <img src={inf} />
                </button>
                <br />
            </div>
        </div>
    )

}
export default ItemLista;