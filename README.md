# TradeVision — Dashboard demonstrativo

Dashboard financeiro front-end criado para estudo de programação e apresentação de portfólio. A interface usa a marca fictícia TradeVision e contém somente dados ilustrativos: não há conexão com instituições financeiras, contas, cotações ao vivo ou execução de ordens.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação e execução

### Windows PowerShell

O PowerShell pode bloquear o script `npm.ps1` por causa da política de execução. Use `npm.cmd` para chamar diretamente o executável do npm:

```powershell
npm.cmd install
npm.cmd run dev
```

### macOS, Linux ou outros terminais

```bash
npm install
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

No Windows PowerShell, substitua `npm` por `npm.cmd` nesses comandos também.

## Publicar no GitHub Pages

O workflow em `.github/workflows/deploy.yml` compila e publica o site automaticamente sempre que houver um push para a branch `main`. O endereço esperado, após criar o repositório público `TradeVision-dashboard` e habilitar GitHub Pages com a origem **GitHub Actions**, será `https://SEU-USUARIO.github.io/TradeVision-dashboard/`.

O workflow ajusta a base do Vite durante o build para esse caminho do GitHub Pages. A execução local continua usando `npm.cmd run dev` no PowerShell.

## Recursos

- Resumo demonstrativo de Ibovespa, dólar, Bitcoin e IFIX.
- Gráfico de preço fictício com tooltip e controles de período.
- Busca e ordenação da lista de ativos.
- Favoritos interativos, salvos localmente no navegador.
- Navegação responsiva, menu para celular e alternância entre temas.
- Notícias simuladas e avisos sobre o uso de dados fictícios.

## Tecnologias

React, Vite, TypeScript, Tailwind CSS, Recharts e Lucide React.
