import { useState } from 'react';
import Login from './pages/Login.jsx';
import Painel from './pages/Painel.jsx';
import Colheitas from './pages/Colheitas.jsx';
import Vendas from './pages/Vendas.jsx';

const PAGINAS = { painel: 'Painel', colheitas: 'Colheitas', vendas: 'Vendas' };

export default function App() {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario'));
  const [pagina, setPagina] = useState('painel');

  function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setUsuario(null);
  }

  if (!usuario) return <Login onLogin={setUsuario} />;

  return (
    <>
      <header className="app-header">
        <h1 className="marca"><span className="abacaxi-large" aria-hidden="true">🍍</span> Fazenda de Abacaxis</h1>
        <nav className="menu-navegacao" aria-label="Navegação principal">
          {Object.entries(PAGINAS).map(([chave, nome]) => (
            <button
              key={chave}
              type="button"
              className={`menu-item${pagina === chave ? ' ativo' : ''}`}
              aria-current={pagina === chave ? 'page' : undefined}
              onClick={() => setPagina(chave)}
            >
              {nome}
            </button>
          ))}
        </nav>
        <div className="usuario">
          <span className="usuario-nome">{usuario}</span>
          <button type="button" className="botao-sair" onClick={sair}>Sair</button>
        </div>
      </header>
      <main>
        {pagina === 'painel' && <Painel />}
        {pagina === 'colheitas' && <Colheitas />}
        {pagina === 'vendas' && <Vendas />}
      </main>
    </>
  );
}
