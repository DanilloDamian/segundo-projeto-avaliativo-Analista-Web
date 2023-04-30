import { useState } from "react";

const Filtro = props => {
    
    const receitas= JSON.parse(localStorage.getItem('receita'))

    const [lactose, setLactose] = useState(false);
    const [gluten, setGluten] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
       
       let array =[];

        receitas.filter(receita=> {
            
            if(receita.lactose == lactose && receita.gluten == gluten){                
                array.push(receita);                
            }        
        });        
       props.handleFiltro(array);
       
 
    }
    const handleLactose = ()=>{    
        setLactose(!lactose)  
      }
      const handleGluten =() =>{
        setGluten(!gluten)
      }

    return (
        <div>

            <h1>Filtro</h1>
            
                <form className="filtro" onSubmit={e => handleSubmit(e)}><label>
                    Lactose
                    <input type="checkbox" name="lactose" value={lactose} onChange={handleLactose}></input>
                </label>
                    <label>
                        Glúten
                        <input type="checkbox" name="gluten" value={gluten} onChange={handleGluten} ></input>
                    </label>
                    <button type="submit" className="btn">Filtrar</button>
                </form>
        
        </div>

    )
}

export default Filtro;