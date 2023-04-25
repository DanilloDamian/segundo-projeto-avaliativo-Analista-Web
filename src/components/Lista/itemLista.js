const ItemLista = props =>{
const {receita} = props;

return(
    <div>
        <div><p>{receita.nome}</p></div>        
    </div>
)

}
export default ItemLista;