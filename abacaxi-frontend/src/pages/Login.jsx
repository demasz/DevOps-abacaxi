import { useState } from 'react';
import { api } from '../api.js';
import LanguageSelector from '../LanguageSelector.jsx';
import { traduzir, traduzirErro } from '../i18n.js';

export default function Login({ onLogin, idioma, onChangeIdioma }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const t = (chave) => traduzir(idioma, chave);

  async function entrar(e) {
    e.preventDefault();
    setErro('');
    setCarregando(true);
    try {
      const dados = await api('/auth/login', { method: 'POST', body: { usuario, senha } });
      localStorage.setItem('token', dados.token);
      localStorage.setItem('usuario', dados.usuario);
      onLogin(dados.usuario);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="login">
      <LanguageSelector idioma={idioma} onChange={onChangeIdioma} />
      <form className="card" onSubmit={entrar}>
        <h1>🍍 {t('appName')}</h1>
        <label>
          {t('username')}
          <input value={usuario} onChange={(e) => setUsuario(e.target.value)} required autoFocus />
        </label>
        <label>
          {t('password')}
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </label>
        {erro && <p className="erro">{traduzirErro(erro, idioma)}</p>}
        <button type="submit" disabled={carregando}>
          {carregando ? t('loggingIn') : t('login')}
        </button>
        {carregando && (
          <p className="dica">{t('renderWake')}</p>
        )}
      </form>
    </div>
  );
}
