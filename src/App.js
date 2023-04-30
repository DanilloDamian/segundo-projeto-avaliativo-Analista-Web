import { useEffect, useState } from 'react';
import './App.css';
import simboloMais from './assets/mais.png'
import Filtro from './components/Filtro/filtro';
import Formulario from './components/Formulario/formulario';
import Lista from './components/Lista/lista';


function App() {
const [receitas, setReceitas] = useState([]);
const [receitasSelecionadas, setReceitasSelecionadas] = useState([]);
const [aberto, setAberto] = useState(false);
const [receitaParaAlterar, setReceitaParaAlterar] = useState({})

useEffect(()=>{
  const data = localStorage.getItem('receita') ? JSON.parse(localStorage.getItem('receita')) : [];  
  setReceitas(data);  
  setReceitasSelecionadas(data);  
  const selectedReceita= JSON.parse(localStorage.getItem('receitaSelecionada'));
  if(selectedReceita){
    setReceitaParaAlterar(selectedReceita);
  }else{
    setReceitaParaAlterar('')
  }
 
},[])

const handleFiltro = valor => {
  setReceitasSelecionadas(valor);
}
const updateAberto = valor => {
  setAberto(valor);
}
const updateLista = valor =>{
  setReceitasSelecionadas(valor);  
}



  return (
    <div className='divPrincipal'>
      <div>
        <h1 className='titulo'>
          Livro de receitas Online
        </h1>
      </div>
      {!aberto && 
      <div className='divBody'>
      
      
        <Filtro handleFiltro={handleFiltro} />
        <Lista receitas={receitasSelecionadas} updateAberto={updateAberto}/>
        <a onClick={()=>{setAberto(true); localStorage.removeItem('receitaSelecionada');}}>
          <img src={simboloMais} alt='Simbolo de Adicionar' ></img>
          </a>
          </div>
  }
      
      { aberto && <Formulario updateAberto={updateAberto} aberto={aberto} receita={receitaParaAlterar} updateLista={updateLista} receitas={receitas}/>}
    </div>
  );
}

export default App;
