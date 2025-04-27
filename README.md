# Time Zones

Um aplicativo web moderno para visualizar o horário atual de cidades ao redor do mundo, com suporte a múltiplos países e uma interface limpa e intuitiva.

## Tags
`#timezone` `#relogio` `#horario-mundial` `#time-zone-converter` `#world-clock` `#javascript` `#html5` `#css3` `#electron` `#desktop-app` `#time-management` `#productivity` `#time-tracking` `#international-time` `#time-converter`

## Resumo das Ferramentas, Linguagens e Versões

- **HTML5**: Estrutura da interface (`index.html`)
- **CSS3**: Estilização visual (dentro da tag `<style>` no `index.html`)
- **JavaScript (ES6+)**: Toda a lógica do app, manipulação de DOM, Local Storage, requisições à API, etc.
- **APIs externas:**
  - [timeapi.io](https://timeapi.io): API pública para buscar o horário atual de cada timezone
  - [FlagCDN](https://flagcdn.com): CDN para exibir as bandeiras dos países
- **Local Storage (Web Storage API):** Usado para salvar e restaurar as seleções e a ordem do usuário no navegador
- **Build:** Não há build NPM, não há dependências externas, não há backend. Basta abrir o `index.html` em qualquer navegador moderno.
- **Compatibilidade:** Funciona em qualquer navegador moderno (Chrome, Firefox, Edge, Safari)

## Principais Alterações e Funcionalidades Recentes

- Interface do app em inglês (nomes dos países permanecem no idioma original)
- Barra de progresso ao atualizar horários, mostrando a porcentagem carregada
- Salva automaticamente as cidades/paises selecionados e a ordem personalizada no Local Storage
- Ao reabrir o app, restaura a seleção e a ordem exatamente como estava
- Atualização automática dos horários (incremento a cada minuto)
- Se "Current Time" aparecer como "Error", o app tentará atualizar automaticamente após o carregamento
- Arrastar e soltar para reordenar cidades
- Filtros e seleções em ordem alfabética
- Cada país mostra seu UTC principal; cada cidade/fuso mostra: Cidade — Identificador: UTC (principal marcada com uma estrela)

## Tecnologias Utilizadas

- HTML5
- JavaScript (ES6+)
- CSS3
- API: timeapi.io (para buscar horários)
- FlagCDN (para exibir bandeiras)

## Estrutura do Projeto

```
Relogio_Widget/
├── index.html      # Arquivo principal da aplicação
├── paises.js       # Lista de países e seus fusos horários
└── README.md       # Documentação do projeto
```

## Funcionalidades

- Seleção de múltiplos países (nomes dos países no idioma original)
- Fusos horários e cidades em ordem alfabética
- Cada país mostra seu UTC principal
- Cada cidade/fuso mostra: Cidade — Identificador: UTC (principal marcada com uma estrela)
- Bandeiras dos países
- Arrastar e soltar para reordenar cidades
- Interface responsiva e moderna
- Atualização automática dos horários (incremento a cada minuto)
- Barra de progresso ao atualizar horários, mostrando a porcentagem carregada
- Todas as opções, colunas e botões da interface em inglês (exceto nomes dos países)
- Se "Current Time" aparecer como "Error", o app tentará atualizar automaticamente após o carregamento
- Salva e restaura automaticamente a seleção e a ordem das cidades escolhidas

## Como Baixar e Instalar

### Windows
1. Acesse a [página de releases](https://github.com/seu-usuario/RelogioWidget/releases) do projeto
2. Procure pela versão mais recente (exemplo: `RelogioWidget-win32-x64.zip`)
3. Clique no arquivo para baixar
4. Extraia o arquivo ZIP baixado
5. Dentro da pasta extraída, execute o arquivo `RelogioWidget.exe`

## Como Usar
1. Após iniciar o aplicativo, você verá uma tabela com diferentes cidades e seus horários
2. Clique no botão "Atualizar Horários" para atualizar os horários em tempo real
3. O aplicativo mostra automaticamente:
   - Bandeira do país
   - Nome da cidade
   - Horário atual

## Cidades Disponíveis
- São Paulo/Brasil
- IST Índia
- Buenos Aires/Argentina
- Santiago/Chile
- Bogotá/Colômbia
- Lima/Peru
- San Jose/Costa Rica
- Mexico City/México

## Solução de Problemas
Se encontrar algum problema:
1. Verifique sua conexão com a internet
2. Reinicie o aplicativo
3. Se o problema persistir, entre em contato com o suporte

## Atualizações
O aplicativo verifica automaticamente por atualizações quando iniciado. Se uma nova versão estiver disponível, você será notificado.

## Suporte
Para suporte ou reportar problemas, abra uma issue no [GitHub](https://github.com/seu-usuario/RelogioWidget/issues)

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes. 
