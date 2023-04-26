const Filtro = props => {
    const lactose = props.handleLactose;
    const gluten = props.handleGluten;


    return (
        <div>

            <h1>Filtro</h1>
            {lactose && gluten &&
                <><label>
                    Lactose
                    <input type="checkbox" name="lactose"></input>
                </label>
                    <label>
                        Glúten
                        <input type="checkbox" name="gluten" ></input>
                    </label>
                </>
            }
        </div>

    )
}

export default Filtro;