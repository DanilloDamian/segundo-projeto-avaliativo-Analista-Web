import { useEffect, useState } from 'react';
import './App.css';
import simboloMais from './assets/mais.png'
import Filtro from './components/Filtro/filtro';
import Formulario from './components/Formulario/formulario';
import Lista from './components/Lista/lista';


function App() {
const [receitas, setReceitas] = useState([]);
const [lactose, setLactose] = useState(false);
const [gluten, setGluten] = useState(false);
const [receitasSelecionadas, setReceitasSelecionadas] = useState([]);
const [aberto, setAberto] = useState(false);

useEffect(()=>{
  const data = localStorage.getItem('receita') ? JSON.parse(localStorage.getItem('receita')) : [];
  setReceitas(data);  
  setReceitasSelecionadas(data);  
},[])

const handleFiltro = () => {
  const selected = receitas.filter(receita => receita.lactose === lactose && receita.gluten === gluten);
  setReceitasSelecionadas(selected);
}

const handleLactose = value =>{
  setLactose(value);
  handleFiltro();
}
const handleGluten = value =>{
  setGluten(value);
  handleFiltro();
}

const updateAberto = valor => {
  setAberto(valor);
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
      
      
        <Filtro handleLactose={handleLactose} handleGluten={handleGluten}/>
        <Lista receitas={receitasSelecionadas}/>
        <a onClick={()=>{setAberto(true)}}>
          <img src={simboloMais} alt='Simbolo de Adicionar' ></img>
          </a>
          </div>
  }
      
      { aberto && <Formulario updateAberto={updateAberto} aberto={aberto}/>}
    </div>
  );
}

export default App;
