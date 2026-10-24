import type { Asset, MarketIndex } from './types'
export const indices: MarketIndex[] = [
  { name: 'Ibovespa', value: '134.850,20', change: 0.82, symbol: 'IBOV' },
  { name: 'Dólar comercial', value: 'R$ 5,42', change: -0.31, symbol: 'USD/BRL' },
  { name: 'Bitcoin', value: 'R$ 612.450,00', change: 2.14, symbol: 'BTC/BRL' },
  { name: 'IFIX', value: '3.420,50', change: 0.47, symbol: 'IFIX' },
]
export const assets: Asset[] = [
  { ticker: 'PETR4', name: 'Petrobras PN', price: 38.42, change: 1.28, volume: 'R$ 482,6 mi', color: '#42c8b7' },
  { ticker: 'VALE3', name: 'Vale ON', price: 62.18, change: -0.64, volume: 'R$ 391,2 mi', color: '#8e83ef' },
  { ticker: 'ITUB4', name: 'Itaú Unibanco PN', price: 35.76, change: 0.92, volume: 'R$ 278,4 mi', color: '#f1a84b' },
  { ticker: 'BBAS3', name: 'Banco do Brasil ON', price: 27.93, change: -1.12, volume: 'R$ 184,8 mi', color: '#e2c244' },
  { ticker: 'WEGE3', name: 'WEG ON', price: 53.60, change: 1.74, volume: 'R$ 156,3 mi', color: '#68a9ef' },
]
export const news = [
  { category: 'CENÁRIO', time: 'há 12 min', title: 'Mercados acompanham dados econômicos globais em sessão de cautela', color: 'gold' },
  { category: 'EMPRESAS', time: 'há 38 min', title: 'Companhias brasileiras divulgam perspectivas para o próximo trimestre', color: 'blue' },
  { category: 'INDICADORES', time: 'há 1 h', title: 'Investidores monitoram agenda de indicadores desta semana', color: 'purple' },
]
export const chartData = Array.from({ length: 32 }, (_, i) => {
  const base = 38.10 + Math.sin(i / 3.5) * 0.28 + Math.sin(i / 1.8) * 0.08 + i * 0.012
  return { time: `${String(9 + Math.floor((i * 7) / 32)).padStart(2, '0')}:${String((i * 7) % 60).padStart(2, '0')}`, price: Number(base.toFixed(2)) }
})
