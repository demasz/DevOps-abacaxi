import { useState } from 'react';
import Login from './pages/Login.jsx';
import Painel from './pages/Painel.jsx';
import Colheitas from './pages/Colheitas.jsx';
import Vendas from './pages/Vendas.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import { IDIOMAS, traduzir } from './i18n.js';

const PAGINAS = [
  ['painel', 'dashboard'],
  ['colheitas', 'harvests'],
  ['vendas', 'sales'],
];

export default function App() {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario'));
  const [pagina, setPagina] = useState('painel');
  const [idioma, setIdioma] = useState(() => {
    const salvo = localStorage.getItem('idioma');
    return IDIOMAS.includes(salvo) ? salvo : 'pt';
  });

  function alterarIdioma(novoIdioma) {
    setIdioma(novoIdioma);
    localStorage.setItem('idioma', novoIdioma);
  }

  const t = (chave) => traduzir(idioma, chave);

  function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setUsuario(null);
  }

  if (!usuario) {
    return <Login onLogin={setUsuario} idioma={idioma} onChangeIdioma={alterarIdioma} />;
  }

  return (
    <>
      <header className="app-header">
        <h1 className="marca"><span className="abacaxi-large" aria-hidden="true">🍍</span> {t('appName')}</h1>
        <nav className="menu-navegacao" aria-label={t('mainNavigation')}>
          {PAGINAS.map(([chave, chaveNome]) => (
            <button
              key={chave}
              type="button"
              className={`menu-item${pagina === chave ? ' ativo' : ''}`}
              aria-current={pagina === chave ? 'page' : undefined}
              onClick={() => setPagina(chave)}
            >
              {t(chaveNome)}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSelector idioma={idioma} onChange={alterarIdioma} />
          <div className="usuario">
            <span className="usuario-nome">{usuario}</span>
            <button type="button" className="botao-sair" onClick={sair}>{t('logout')}</button>
          </div>
        </div>
      </header>
      <main>
        <p className="currency-notice" role="note">{t('currencyNotice')}</p>
        {pagina === 'painel' && <Painel idioma={idioma} />}
        {pagina === 'colheitas' && <Colheitas idioma={idioma} />}
        {pagina === 'vendas' && <Vendas idioma={idioma} />}
      </main>
    </>
  );
}
