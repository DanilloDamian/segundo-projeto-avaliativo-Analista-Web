const Formulario = () => {
    return (
        <form>
            <h2>Adicionar receita</h2>
            <label htmlFor="nome">
                Nome:
                <input type="text" name="nome" required />
            </label>
            <label>
                Ingredientes:
                <textarea name="ingredientes">
                </textarea>
            </label>
            <label>
                Modo de preparo:
                <textarea name="preparo">
                </textarea>
            </label>
            <label>
                Restrições
                <input type="checkbox">Lactose</input>
                <input type="checkbox">Glúten</input>
            </label>
            <button type="submit" className="btn">
                Adicionar
            </button>
            <button className="btn">
                Cancelar
            </button>
        </form>
    )
}
export default Formulario;