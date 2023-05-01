import { useState } from "react";
import "./Filtro.css";
import imgLactose from "../../assets/lactose.png";
import imgGluten from "../../assets/gluten.png";


const Filtro = props => {
    
    const receitas= JSON.parse(localStorage.getItem('receita'))

    const [lactose, setLactose] = useState(false);
    const [gluten, setGluten] = useState(false);
    const [todas,setTodas]= useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
       
       let array =[];

       if(todas){
        array= receitas;
       }else{
        receitas.filter(receita=> {
            if(receita.lactose || receita.gluten){  
                if(lactose && gluten){
                    if(receita.lactose == lactose && receita.gluten == gluten ){                
                        if(!array.includes(receita)){    
                            array.push(receita);                
                        }                 
                    }
                }else{
                    if(receita.lactose == lactose){  
                        if(!array.includes(receita)){    
                            array.push(receita);                
                        }              
                    }        
                    if(receita.gluten == gluten){                
                        if(!array.includes(receita)){    
                            array.push(receita);                
                        }                 
                    }
                }                   
            }               
        });  
    }     
    console.log(array) 
       props.handleFiltro(array);
 
    }
    const handleLactose = ()=>{    
        setLactose(!lactose)  
      }
      const handleGluten =() =>{
        setGluten(!gluten)
      }
      const handleTodas =()=>{
          setTodas(!todas)          
      }
    return (
        <div className="filtro">
            <div className="tituloFiltro">Filtro</div>
                <form className="formFiltro" onSubmit={e => handleSubmit(e)}>
                    <label className="label">
                    Sem Lactose
                    <input className="checkbox" type="checkbox" name="lactose" value={lactose} onChange={handleLactose}></input>
                    <img className="simbolos" src={imgLactose}/>
                </label><br/>
                    <label className="label">
                        Sem Glúten
                        <input className="checkbox" type="checkbox" name="gluten" value={gluten} onChange={handleGluten} ></input>
                        <img className="simbolos" src={imgGluten}/>
                    </label><br/>
                    <label>
                        Todas
                        <input className="checkbox" type="checkbox" name="todas" value={todas} onChange={handleTodas}></input>
                    </label>
                    <br/>
                    <button type="submit" className="btnCLick" >Filtrar</button>
                </form>
        
        </div>

    )
}

export default Filtro;