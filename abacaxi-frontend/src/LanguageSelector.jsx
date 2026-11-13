import { traduzir } from './i18n.js';

const NOMES_IDIOMAS = [
  ['pt', 'Português'],
  ['en', 'English'],
  ['zh', '中文'],
];

export default function LanguageSelector({ idioma, onChange }) {
  return (
    <label className="language-selector">
      <span className="sr-only">{traduzir(idioma, 'language')}</span>
      <select
        aria-label={traduzir(idioma, 'language')}
        value={idioma}
        onChange={(event) => onChange(event.target.value)}
      >
        {NOMES_IDIOMAS.map(([codigo, nome]) => (
          <option key={codigo} value={codigo}>{nome}</option>
        ))}
      </select>
    </label>
  );
}
