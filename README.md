# Time Zones

Um aplicativo web moderno para visualizar o horário atual de cidades ao redor do mundo, com suporte a múltiplos países, reordenação por arrastar e soltar, e uma interface limpa e intuitiva.

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

## Como Usar

1. Clique no ícone de engrenagem (⚙️) para abrir a área de seleção de países/cidades
2. Selecione um ou mais países (em ordem alfabética, com UTC principal ao lado)
3. Filtre e selecione cidades/fusos (exibidos como: Cidade — Identificador: UTC, principal com estrela)
4. Clique em "Update Times" ou no ícone de atualizar (🔄) para buscar os horários atuais
5. A barra de progresso acima da tabela mostrará o status do carregamento
6. A tabela exibirá a bandeira, timezone e horário atual de cada cidade selecionada
7. Você pode arrastar e soltar as linhas para reordenar
8. Se algum horário aparecer como "Error", o app tentará atualizar automaticamente após o carregamento
9. Ao reabrir o app, sua seleção e ordem serão restauradas automaticamente

## Como Adicionar Novos Países

Edite o arquivo `paises.js` seguindo o formato abaixo:

```javascript
{
  nome: 'Nome do País',
  codigo: 'código do país (2 letras)',
  utc: 'UTC principal',
  timezones: [
    { cidade: 'Nome da Cidade', tz: 'Identificador/Timezone', utc: 'UTC do fuso', principal: true/false }
  ]
}
```

- `nome`: Nome do país (no idioma original)
- `codigo`: Código ISO 3166-1 alpha-2 (2 letras)
- `utc`: UTC principal do país
- `timezones`: Array de objetos com:
  - `cidade`: Nome da cidade
  - `tz`: Identificador do fuso horário (formato IANA)
  - `utc`: UTC daquele fuso
  - `principal`: true se for o fuso/cidade principal

### Exemplo

```javascript
{
  nome: 'Brasil',
  codigo: 'br',
  utc: 'UTC-3',
  timezones: [
    { cidade: 'Brasília', tz: 'America/Sao_Paulo', utc: 'UTC-3', principal: true },
    { cidade: 'Manaus', tz: 'America/Manaus', utc: 'UTC-4' },
    { cidade: 'Rio Branco', tz: 'America/Rio_Branco', utc: 'UTC-5' }
  ]
}
```

## Personalização

### Estilos CSS

Você pode personalizar a aparência editando a seção `<style>` do `index.html`. Principais classes:

- `.container`: Container principal
- `.header-bar`: Barra superior com ícones e título
- `.icon-btn`: Estilo dos ícones de engrenagem e atualizar
- `.area-selecao`: Área de seleção de países/cidades
- `.update-btn`: Botão de atualização
- `.loading-bar-container`, `.loading-bar`, `.loading-bar-inner`: Barra de progresso
- `table`, `th`, `td`: Estilos da tabela

### Funcionalidades JavaScript

Toda a lógica está no `index.html`. Funções principais:

- `atualizarHorarios()`: Busca e atualiza horários, mostra barra de progresso
- `iniciarContador()`: Incrementa horários automaticamente a cada minuto
- Arrastar e soltar para reordenar
- Lógica de filtro e seleção de países/cidades
- Salva/restaura seleção e ordem das cidades no Local Storage

## Requisitos

- Navegador moderno com suporte a:
  - JavaScript ES6+
  - Fetch API
  - Drag and Drop API
  - CSS Flexbox

## Limitações

- A API timeapi.io possui limites de requisições
- Necessita de conexão com a internet para buscar horários
- Depende de serviços externos (timeapi.io e flagcdn.com)
- Se "Current Time" aparecer como "Error", o app tentará atualizar automaticamente após o carregamento
- A seleção e ordem são salvas apenas no navegador/local atual

## Contribuição

Sinta-se à vontade para contribuir:
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para sua branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes. 
