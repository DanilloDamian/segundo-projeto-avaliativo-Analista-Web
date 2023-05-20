import { useEffect, useState } from 'react';
import './App.css';
import simboloMais from './assets/mais.png'
import Filtro from './components/Filtro/Filtro.js';
import Formulario from './components/Formulario/Formulario.js';
import Lista from './components/Lista/Lista.js';


function App() {

  const [receitas, setReceitas] = useState([]);
  const [receitasSelecionadas, setReceitasSelecionadas] = useState([]);
  const [aberto, setAberto] = useState(false);
  const [receitaParaAlterar, setReceitaParaAlterar] = useState({})

  useEffect(() => {
    const data = localStorage.getItem('receita') ? JSON.parse(localStorage.getItem('receita')) : [];
    setReceitas(data);
    setReceitasSelecionadas(data);
    const selectedReceita = JSON.parse(localStorage.getItem('receitaSelecionada'));
    if (selectedReceita) {
      setReceitaParaAlterar(selectedReceita);
    } else {
      setReceitaParaAlterar('')
    }

  }, []);

  const handleFiltro = valor => {
    setReceitasSelecionadas(valor);
  };
  const updateAberto = valor => {
    setAberto(valor);
  };

  return (
    <div className='divPrincipal'>
      <div className='divTitulo'>
        <h1>
          Livro de receitas Online
        </h1>
      </div>
      {!aberto &&
        <div className='divBody'>

          <Filtro handleFiltro={handleFiltro} />
          <Lista receitas={receitasSelecionadas} updateAberto={updateAberto} />
          <a className='link' onClick={() => { setAberto(true); localStorage.removeItem('receitaSelecionada'); }}>
            <img className='btnMais' src={simboloMais} alt='Simbolo de Adicionar'/>
          </a>
        </div>
      }
      {aberto && <Formulario updateAberto={updateAberto} aberto={aberto} receita={receitaParaAlterar} handleFiltro={handleFiltro} receitas={receitas} />}
    </div>
  );
};

export default App;
