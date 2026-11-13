const TRADUCOES = {
  pt: {
    appName: 'Fazenda de Abacaxis',
    dashboard: 'Painel',
    harvests: 'Colheitas',
    sales: 'Vendas',
    logout: 'Sair',
    language: 'Idioma',
    mainNavigation: 'Navegação principal',
    username: 'Usuário',
    password: 'Senha',
    login: 'Entrar',
    loggingIn: 'Entrando...',
    apiUnavailable: 'Não foi possível conectar à API',
    renderWake: 'No plano gratuito do Render a API pode levar até 1 minuto para "acordar".',
    invalidCredentials: 'Usuário ou senha inválidos',
    loading: 'Carregando...',
    totalHarvested: 'Total colhido',
    totalSold: 'Total vendido',
    stock: 'Em estoque',
    revenue: 'Faturamento (BRL)',
    currencyNotice: 'Todos os valores monetários são armazenados e exibidos em reais (BRL). A troca de idioma não converte moedas.',
    registerHarvest: 'Registrar colheita',
    date: 'Data',
    quantity: 'Quantidade',
    notes: 'Observação',
    save: 'Salvar',
    delete: 'Excluir',
    harvestTableNotes: 'Observação',
    noHarvests: 'Nenhuma colheita registrada.',
    registerSale: 'Registrar venda',
    unitPrice: 'Preço unitário (BRL)',
    customer: 'Cliente',
    unitPriceShort: 'Preço un. (BRL)',
    total: 'Total',
    noSales: 'Nenhuma venda registrada.',
    invalidHarvest: 'Informe a data e uma quantidade maior que zero',
    harvestNotFound: 'Colheita não encontrada',
    harvestAlreadySold: 'Não é possível excluir: os abacaxis desta colheita já foram vendidos',
    invalidSale: 'Informe data, quantidade e preço maiores que zero',
    saleNotFound: 'Venda não encontrada',
    insufficientStock: 'Estoque insuficiente. Disponível:',
  },
  en: {
    appName: 'Pineapple Farm',
    dashboard: 'Dashboard',
    harvests: 'Harvests',
    sales: 'Sales',
    logout: 'Log out',
    language: 'Language',
    mainNavigation: 'Main navigation',
    username: 'Username',
    password: 'Password',
    login: 'Log in',
    loggingIn: 'Logging in...',
    apiUnavailable: 'Could not connect to the API',
    renderWake: 'On Render’s free plan, the API may take up to 1 minute to wake up.',
    invalidCredentials: 'Invalid username or password',
    loading: 'Loading...',
    totalHarvested: 'Total harvested',
    totalSold: 'Total sold',
    stock: 'In stock',
    revenue: 'Revenue (BRL)',
    currencyNotice: 'All monetary amounts are stored and displayed in Brazilian reais (BRL). Changing the language does not convert currency.',
    registerHarvest: 'Register harvest',
    date: 'Date',
    quantity: 'Quantity',
    notes: 'Notes',
    save: 'Save',
    delete: 'Delete',
    harvestTableNotes: 'Notes',
    noHarvests: 'No harvests registered.',
    registerSale: 'Register sale',
    unitPrice: 'Unit price (BRL)',
    customer: 'Customer',
    unitPriceShort: 'Unit price (BRL)',
    total: 'Total',
    noSales: 'No sales registered.',
    invalidHarvest: 'Enter a date and a quantity greater than zero',
    harvestNotFound: 'Harvest not found',
    harvestAlreadySold: 'Cannot delete: the pineapples from this harvest have already been sold',
    invalidSale: 'Enter a date, quantity, and price greater than zero',
    saleNotFound: 'Sale not found',
    insufficientStock: 'Insufficient stock. Available:',
  },
  zh: {
    appName: '菠萝农场',
    dashboard: '仪表板',
    harvests: '收成',
    sales: '销售',
    logout: '退出登录',
    language: '语言',
    mainNavigation: '主导航',
    username: '用户名',
    password: '密码',
    login: '登录',
    loggingIn: '正在登录...',
    apiUnavailable: '无法连接到 API',
    renderWake: 'Render 免费方案中的 API 可能需要最多 1 分钟才能唤醒。',
    invalidCredentials: '用户名或密码无效',
    loading: '正在加载...',
    totalHarvested: '收获总量',
    totalSold: '销售总量',
    stock: '库存',
    revenue: '营业额（BRL）',
    currencyNotice: '所有金额均以巴西雷亚尔（BRL）存储和显示。切换语言不会进行货币换算。',
    registerHarvest: '登记收成',
    date: '日期',
    quantity: '数量',
    notes: '备注',
    save: '保存',
    delete: '删除',
    harvestTableNotes: '备注',
    noHarvests: '暂无收成记录。',
    registerSale: '登记销售',
    unitPrice: '单价（BRL）',
    customer: '客户',
    unitPriceShort: '单价（BRL）',
    total: '总计',
    noSales: '暂无销售记录。',
    invalidHarvest: '请输入日期和大于零的数量',
    harvestNotFound: '未找到收成记录',
    harvestAlreadySold: '无法删除：该批菠萝已售出',
    invalidSale: '请输入日期、大于零的数量和价格',
    saleNotFound: '未找到销售记录',
    insufficientStock: '库存不足。可用数量：',
  },
};

const LOCALES = { pt: 'pt-BR', en: 'en-US', zh: 'zh-CN' };
const ERROS_DA_API = {
  'Usuário ou senha inválidos': 'invalidCredentials',
  'Informe a data e uma quantidade maior que zero': 'invalidHarvest',
  'Colheita não encontrada': 'harvestNotFound',
  'Não é possível excluir: os abacaxis desta colheita já foram vendidos': 'harvestAlreadySold',
  'Informe data, quantidade e preço maiores que zero': 'invalidSale',
  'Venda não encontrada': 'saleNotFound',
};

export const IDIOMAS = ['pt', 'en', 'zh'];

export function traduzir(idioma, chave) {
  return TRADUCOES[idioma]?.[chave] ?? TRADUCOES.pt[chave] ?? chave;
}

export function traduzirErro(mensagem, idioma) {
  if (idioma === 'pt') return mensagem;
  if (mensagem === 'Failed to fetch') return traduzir(idioma, 'apiUnavailable');

  const erroEstoque = mensagem.match(/^Estoque insuficiente\. Disponível: (.+)$/);
  if (erroEstoque) {
    return `${traduzir(idioma, 'insufficientStock')} ${erroEstoque[1]}`;
  }

  const chave = ERROS_DA_API[mensagem];
  return chave ? traduzir(idioma, chave) : mensagem;
}

export function formatarMoeda(valor, idioma) {
  return Number(valor).toLocaleString(LOCALES[idioma] || LOCALES.pt, {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatarData(data, idioma) {
  const [ano, mes, dia] = data.split('-').map(Number);
  return new Intl.DateTimeFormat(LOCALES[idioma] || LOCALES.pt).format(
    new Date(ano, mes - 1, dia)
  );
}
