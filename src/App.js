import './App.css';
import simboloMais from './assets/mais.png'
import Filtro from './components/Filtro/filtro';
import Lista from './components/Lista/lista';



function App() {
  return (
    <div className='divPrincipal'>
      <div>
        <h1 className='titulo'>
          Livro de receitas Online
        </h1>
      </div>
      <div className='divBody'>
        <Filtro />
        <Lista />
        <a href='#'>
          <img src={simboloMais} alt='Simbolo de Adicionar' ></img>
          </a>
      </div>
    </div>
  );
}

export default App;
